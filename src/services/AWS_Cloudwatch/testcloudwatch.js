import AWS  from 'aws-sdk'
import test from './test.json'

const d3Scale = require('d3-scale')
const d3Time = require('d3-time')

const formatZeroData = date => ({ t: date, y: 0 })

const linearZeroSeries = (
  start,
  end,
  periodMinutes
) => {
  // Array of linearly displaced timestamps that we will project CloudWatch data onto
  const scale = d3Scale.scaleTime().domain([start, end])
  return scale.ticks(d3Time.timeMinute.every(periodMinutes))
              .map(formatZeroData)
}

const matchTimestampOrZero = (
  target,
  timestamps,
  values
) => {
  // Lookup value at index of target in timestamps or return zero
  const targetTimestamp = target.getTime()
  const index = timestamps.findIndex(timestamp => timestamp.getTime() === targetTimestamp)
  return index < 0 ? 0 : values[index]
}

const minimumDateRange = (
  startString,
  periodMinutes
) => {
  // CloudWatch can take up to 10 minutes to display metrics, set date range accordingly
  // Adjust end date by half period to ensure most recent data is fetched
  const halfPeriod = (periodMinutes * 60000) / 2
  const end = new Date(Date.now() + halfPeriod)
  let start = new Date(startString)
  
  if (end - start < 10 * 60000)
    start = new Date(end.getTime() - (10 * 60000))
  
  return { start, end }
}

const cloudwatch = new AWS.CloudWatch({
  apiVersion     : '2010-08-01',
  accessKeyId    : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region         : 'us-west-2'
})

const getMetrics = (
  cloudWatch,
  dateRange,
  requestMetrics,
  periodMinutes
) => {
  const zeros = linearZeroSeries(dateRange.start, dateRange.end, periodMinutes)
  const params = {
    StartTime        : zeros[0].t,
    MaxDatapoints    : 100800, // Maximum 100800
    EndTime          : zeros[zeros.length - 1].t,
    MetricDataQueries: requestMetrics.map(metric => ({
      Id        : metric.id,
      MetricStat: {
        Metric: {
          Dimensions: [
            {
              Name : metric.dimensionName,
              Value: metric.dimensionValue
            }
          ],
          MetricName: metric.name,
          Namespace : metric.namespace
        },
        Period: periodMinutes * 60,
        Stat  : metric.stat || 'Sum'
      },
      ReturnData: true
    })),
    ScanBy           : 'TimestampAscending'
  }
  
  return new Promise((res, rej) => {
    cloudwatch.getMetricData(params, (err, data) => {
      if (err)
        return rej(err)
      
       res(data.MetricDataResults.map(metric => ({
        id  : metric.Id,
        data: zeros.map(zero => ({
          t: zero.t,
          y: matchTimestampOrZero(zero.t, metric.Timestamps, metric.Values)
        }))
      })))
    })
  })
  
  // const data = cloudwatch.getMetricData(params, (rej, res) => {
  //   if (res) {
  //     const { MetricDataResults } = res
  //
  //     console.log(formatted)
  //     return formatted
  //   } else if (rej) {
  //     console.log('rej' + rej)
  //   }}
  // )
}

export const testCloudwatch = () => {
  const headers = {
    'Access-Control-Allow-Origin': '*'
  }
  
  const metrics = getMetrics(
    cloudwatch,
    minimumDateRange(test.start, test.periodMinutes),
    test.metrics,
    test.periodMinutes
  ).then(met => {
    console.log(met)
  }, err => console.log(err))
  
  console.log(metrics)
}
