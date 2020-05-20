import DatasetArray from './DatasetArray'

export default class CloudWatchService {
  constructor({ periodMinutes = 5, backfillMinutes = 120, refreshMinutes = 5 } = {}, metrics) {
    this.key = null
    this.endpoint = null
    this.metrics = metrics
    this.periodMinutes = periodMinutes
    this.backfillMinutes = backfillMinutes
    this.refreshMinutes = refreshMinutes
    this.maxDatapoints = Math.ceil(backfillMinutes / periodMinutes)
    this.updatedAt = null
    this.datasets = new DatasetArray()
    this.start()
    this.tags = {}
  }
  
  setEndpoint(key, endpoint) {
    this.key = key
    this.endpoint = endpoint
  }
  
  start() {
    this.update()
    this.task = setInterval(this.update.bind(this), this.refreshMinutes * 60000)
  }
  
  update() {
    const options = {
      method: 'post',
      url    : this.endpoint,
      headers: {
        'X-Api-Key': this.key
      },
      data  : {
        start        : this.updatedAt || new Date(Date.now() - (this.backfillMinutes * 60 * 1000)),
        periodMinutes: this.periodMinutes,
        metrics      : this.metrics
      }
    }
    
    // this.endPoint.request(options)
    //     .then(res => {
    //       this.updatedAt = new Date() // Doesn't reach if request failed
    //       this.appendData(res.data)
    //     })
    //     .catch(err => { console.log('err' + err) })
    //
    // return this.data
  }
  
  appendData(newDatasets) {
    newDatasets.forEach((newDataset) => {
      this.datasets.upsert(this.tagAndLabel(newDataset))
    })
    this.datasets.removeDataDuplicates(this.maxDatapoints)
  }
  
  tagAndLabel(dataset) {
    // Add tags and labels from metrics objects
    const metric = this.metrics.find(m => m.id === dataset.id)
    return typeof metric === 'undefined' ? dataset : Object.assign(dataset, {
      tags         : metric.tags,
      label        : metric.label,
      secondaryAxis: metric.secondaryAxis || false
    })
  }
}
