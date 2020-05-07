import React                        from 'react'
import { useSelector } from 'react-redux'

const getKeys = data => Object.keys(data[0])

const getHeader = data => {
  const keys = getKeys(data)
  return keys.map((key, index) => <th key={key}>{key.toUpperCase()}</th>)
}

const RenderRow = props => props.keys.map((key, index) => <td key={props.data[key]}>{props.data[key]}</td>)

const getRowsData = data => {
  const items = data
  const keys = getKeys()
  return items.map((row, index) => (
    <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
  )
}

export const Table = () => {
  const data = useSelector(state => state.lex.latestData)

  return (
    <>
      <h1>Table</h1>
      {showScraperResults()}
    </>
  )
}

const showScraperResults = () => {
  console.log(data)


  // const entries = Object.entries(sessionAttr)
  //
  // const json = data.response.sessionAttributes

  // sessionAttr.forEach(index => {
  //   console.log(sessionAttr[index])
  // })

  // const tableFormat = ["Support Article Title", "Link"]
  // var parent = document.getElementById('dynamicWindow');
  //
  // for(var i = 0; i < count; i++)
  // {
  //   var table = createTable(tableFormat);
  //   addEntryToTable(table, tableFormat, [JSON.parse(data[i])["Title"], JSON.parse(data[i])["Link"]]);
  // }
  //
}


