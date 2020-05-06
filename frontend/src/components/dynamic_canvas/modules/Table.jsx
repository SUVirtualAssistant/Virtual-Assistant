import React from 'react'

const __mock_data__ = {
  type: 'MESSAGE_SEND_SUCCESS',
  response: {
    intentName: 'WS_SearchSU',
    slots: {
      TargetText: 'printing'
    },
    sessionAttributes: {
      '0': '{"Title": "Android Devices - Mobile Printing", "Link": "www.seattleu.edu/its/support/support-articles/android-devices---mobile-printing.html", "TargetMatches": 1}',
      '1': '{"Title": "Android Devices - Mobile Printing Set Up", "Link": "www.seattleu.edu/its/support/support-articles/android-devices---mobile-printing-set-up.html", "TargetMatches": 1}',
      '2': '{"Title": "Apple iOS - Mobile Printing", "Link": "www.seattleu.edu/its/support/support-articles/apple-ios---mobile-printing.html", "TargetMatches": 1}',
      '3': '{"Title": "Apple iOS - Mobile Printing Set Up", "Link": "www.seattleu.edu/its/support/support-articles/apple-ios---mobile-printing-set-up.html", "TargetMatches": 1}',
      '4': '{"Title": "Colleague Printing Through MPS", "Link": "www.seattleu.edu/its/support/support-articles/colleague-printing-through-mps.html", "TargetMatches": 1}',
      '5': '{"Title": "Managed Printing Costs", "Link": "www.seattleu.edu/its/support/support-articles/managed-printing-costs.html", "TargetMatches": 1}',
      '6': '{"Title": "Managed Printing Services FAQ", "Link": "www.seattleu.edu/its/support/support-articles/managed-printing-services-faq.html", "TargetMatches": 1}',
      '7': '{"Title": "SU Managed Printing - Adjust Brightness on Scans/Copies", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---adjust-brightness-on-scanscopies.html", "TargetMatches": 1}',
      '8': '{"Title": "SU Managed Printing - Advanced Settings - Mac", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---advanced-settings---mac.html", "TargetMatches": 1}',
      '9': '{"Title": "SU Managed Printing - Advanced Settings - Windows", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---advanced-settings---windows.html", "TargetMatches": 1}',
      '10': '{"Title": "SU Managed Printing - Bypass Tray Printing", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---bypass-tray-printing.html", "TargetMatches": 1}',
      '11': '{"Title": "SU Managed Printing - Clear Paper Jams", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---clear-paper-jams.html", "TargetMatches": 1}',
      '12': '{"Title": "SU Managed Printing - Copying", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---copying.html", "TargetMatches": 1}',
      '13': '{"Title": "SU Managed Printing - Creating MPS Print Groups", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---creating-mps-print-groups.html", "TargetMatches": 1}',
      '14': '{"Title": "SU Managed Printing - Faculty/Staff Printing", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---facultystaff-printing.html", "TargetMatches": 1}',
      '15': '{"Title": "SU Managed Printing-Loading Paper ", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing-loading-paper.html", "TargetMatches": 1}',
      '16': '{"Title": "SU Managed Printing - MPS Print Groups", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---mps-print-groups.html", "TargetMatches": 1}',
      '17': '{"Title": "SU Managed Printing - Open Access Printer Locations", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---open-access-printer-locations.html", "TargetMatches": 1}',
      '18': '{"Title": "SU Managed Printing-Paper Empty", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing-paper-empty.html", "TargetMatches": 1}',
      '19': '{"Title": "SU Managed Printing - Print from USB", "Link": "www.seattleu.edu/its/support/support-articles/su-managed-printing---print-from-usb.html", "TargetMatches": 1}'
    },
    message: 'Search for printing had 20 results.',
    sentimentResponse: {
      sentimentLabel: 'NEUTRAL',
      sentimentScore: '{Positive: 0.033998683,Negative: 0.02110102,Neutral: 0.9448544,Mixed: 4.599967E-5}'
    },
    messageFormat: 'PlainText',
    dialogState: 'Fulfilled',
    slotToElicit: null,
    sessionId: '2020-05-05T22:33:04.102Z-iuGPMWaN'
  }
}

const showScraperResults = data => {
  // const count = Object.keys(data).length
  const sessionAttr = data.response.sessionAttributes
  const keys = Object.keys(sessionAttr)
  const entries = Object.entries(sessionAttr)
  console.log(entries)

  for (const entry of entries)
    console.log(entry)
  // sessionAttr.forEach(index => {
  //   console.log(sessionAttr[index])
  // })

  return <p>hi</p>

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

export const Table = () => {
  return (
    <>
      <h1>Table</h1>
      {showScraperResults(__mock_data__)}
    </>
  )
}
