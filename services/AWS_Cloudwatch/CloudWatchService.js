import fetch        from 'unfetch'
import DatasetArray from './DatasetArray'

export default class CloudWatchService {
  constructor (options, metrics) {
    this.key = options.credentials.key
    this.endpoint = options.credentials.endpoint
    this.metrics = metrics
    this.periodMinutes = options.periodMinutes
    this.backfillMinutes = options.backfillMinutes
    this.refreshMinutes = options.refreshMinutes
    this.maxDatapoints = Math.ceil(this.backfillMinutes / this.periodMinutes)
    this.updatedAt = null
    this.datasets = new DatasetArray()
    this.start()
    this.tags = {}
  }
  
  start () {
    this.update()
    this.task = setInterval(this.update.bind(this), this.refreshMinutes * 60000)
  }
  
  update () {
    const data = {
      start: new Date(Date.now() - (this.backfillMinutes * 60 * 1000)),
      periodMinutes: this.periodMinutes,
      metrics: this.metrics
    }

    const requestOptions = {
      method  : 'POST',
      headers : {
        "X-Api-Key": this.key
      },
      body    : JSON.stringify(data)
    }

    fetch("https://api.su-assistant.chat/admin/metrics", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      this.updatedAt = new Date()
      this.appendData(JSON.parse(result))
    })
    .catch(error => console.log('error', error));
  }
  
  appendData (newDatasets) {
    newDatasets.forEach((newDataset) => {
      this.datasets.upsert(this.tagAndLabel(newDataset))
    })
    this.datasets.removeDataDuplicates(this.maxDatapoints)
  }
  
  tagAndLabel (dataset) {
    // Add tags and labels from metrics objects
    const metric = this.metrics.find(m => m.id === dataset.id)
    return typeof metric === 'undefined' ? dataset : Object.assign(dataset, {
      tags         : metric.tags,
      label        : metric.label,
      secondaryAxis: metric.secondaryAxis || false
    })
  }
}
