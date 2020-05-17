import React from 'react'

const getKeys = data => {
  return Object.keys(data[0])
}

const getHeader = data => {
  const keys = getKeys(data)
  delete keys[2]
  return keys.map(key => <th key={key}>{key.toUpperCase()}</th>)
}

const RenderRow = props => {
  return props.keys.map((key, index) => {
    delete props.data.TargetMatches
    return <td key={index}>{props.data[key]}</td>
  })
}

const getRowsData = data => {
  const items = data
  const keys = getKeys(data)
  return items.map((row, index) => {
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
  })
}

export const Table = props => {
  return <table>
      <thead>
      <tr>{getHeader(props.data)}</tr>
      </thead>
      <tbody>
      {getRowsData(props.data)}
      </tbody>
    </table>

}
