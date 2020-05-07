import React from 'react'

const getKeys = data => {
  return Object.keys(data[0])
}

const getHeader = data => {
  const keys = getKeys(data)
  return keys.map((key, index) => <th key={key}>{key.toUpperCase()}</th>)
}

const RenderRow = props => {
  return props.keys.map(key => {
    return <td key={props.data[key]}>{props.data[key]}</td>
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
  return props.data !== null
         ? <table>
             <thead>
               <tr>{getHeader(props.data)}</tr>
             </thead>
           <tbody>
             {getRowsData(props.data)}
           </tbody>
         </table>
         : <h1>null</h1>
}
