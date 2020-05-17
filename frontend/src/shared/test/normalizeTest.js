import { omit }              from 'lodash'
import { normalize, schema } from 'normalizr'
import data                  from './printing.json'
import test                  from './test.json'
// "0": "{\"Title\": \"Android Devices - Mobile Printing\", \"Link\": \"www.seattleu.edu/its/support/support-articles/android-devices---mobile-printing.html\", \"TargetMatches\": 1}",
//   "1": "{\"Title\": \"Android Devices - Mobile Printing Set Up\", \"Link\": \"www.seattleu.edu/its/support/support-articles/android-devices---mobile-printing-set-up.html\", \"TargetMatches\": 1}",
//   "2": "{\"Title\": \"Apple iOS - Mobile Printing\", \"Link\": \"www.seattleu.edu/its/support/support-articles/apple-ios---mobile-printing.html\", \"TargetMatches\": 1}",
//   "3": "{\"Title\": \"Apple iOS - Mobile Printing Set Up\", \"Link\": \"www.seattleu.edu/its/support/support-articles/apple-ios---mobile-printing-set-up.html\", \"TargetMatches\": 1}",
//   "4": "{\"Title\": \"Colleague Printing Through MPS\", \"Link\": \"www.seattleu.edu/its/support/support-articles/colleague-printing-through-mps.html\", \"TargetMatches\": 1}",
//   "5": "{\"Title\": \"Managed Printing Costs\", \"Link\": \"www.seattleu.edu/its/support/support-articles/managed-printing-costs.html\", \"TargetMatches\": 1}",
//   "6": "{\"Title\": \"Managed Printing Services FAQ\", \"Link\": \"www.seattleu.edu/its/support/support-articles/managed-printing-services-faq.html\", \"TargetMatches\": 1}",
//   "7": "{\"Title\": \"SU Managed Printing - Adjust Brightness on Scans/Copies\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---adjust-brightness-on-scanscopies.html\", \"TargetMatches\": 1}",
//   "8": "{\"Title\": \"SU Managed Printing - Advanced Settings - Mac\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---advanced-settings---mac.html\", \"TargetMatches\": 1}",
//   "9": "{\"Title\": \"SU Managed Printing - Advanced Settings - Windows\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---advanced-settings---windows.html\", \"TargetMatches\": 1}",
//   "10": "{\"Title\": \"SU Managed Printing - Bypass Tray Printing\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---bypass-tray-printing.html\", \"TargetMatches\": 1}",
//   "11": "{\"Title\": \"SU Managed Printing - Clear Paper Jams\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---clear-paper-jams.html\", \"TargetMatches\": 1}",
//   "12": "{\"Title\": \"SU Managed Printing - Copying\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---copying.html\", \"TargetMatches\": 1}",
//   "13": "{\"Title\": \"SU Managed Printing - Creating MPS Print Groups\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---creating-mps-print-groups.html\", \"TargetMatches\": 1}",
//   "14": "{\"Title\": \"SU Managed Printing - Faculty/Staff Printing\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---facultystaff-printing.html\", \"TargetMatches\": 1}",
//   "15": "{\"Title\": \"SU Managed Printing-Loading Paper \", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing-loading-paper.html\", \"TargetMatches\": 1}",
//   "16": "{\"Title\": \"SU Managed Printing - MPS Print Groups\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---mps-print-groups.html\", \"TargetMatches\": 1}",
//   "17": "{\"Title\": \"SU Managed Printing - Open Access Printer Locations\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---open-access-printer-locations.html\", \"TargetMatches\": 1}",
//   "18": "{\"Title\": \"SU Managed Printing-Paper Empty\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing-paper-empty.html\", \"TargetMatches\": 1}",
//   "19": "{\"Title\": \"SU Managed Printing - Print from USB\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---print-from-usb.html\", \"TargetMatches\": 1}",
//   "20": "{\"Title\": \"SU Managed Printing - Print From Virtual Desktop\", \"Link\": \"www.seattleu.edu/its/support/support-articles/su-managed-printing---print-from-virtual-desktop.html\", \"TargetMatches\": 1}"

/*
 {
   "intentName": "WS_SearchSU",
   "slots": {
     "TargetText": "printing"
   },
   "sessionAttributes": {},
   "message": '{
     "messages":[
       {
         "type":"PlainText",
         "group":1,
         "value":"Hi!"
       },
       {
         "type":"PlainText",
         "group":2,
         "value":"How can I help you today?"
       }
     ]
   }',
   "sentimentResponse": {
     "sentimentLabel": "NEUTRAL",
     "sentimentScore": "{Positive: 0.089685604,Negative: 0.10302031,Neutral: 0.7989007,Mixed: 0.00839336}"
   },
   "messageFormat": "PlainText",
   "dialogState": "Fulfilled",
   "slotToElicit": null,
   "sessionId": "2020-05-17T00:44:51.708Z-weFZJhTg"
 }
*/

export const normalizeTest = () => {
  const intent = new schema.Entity('intent')
  const target = new schema.Entity('target')

  const slots = new schema.Entity('slots', {
    target: target
  })

  const msgs = JSON.parse(data.message).messages
  const attrs = data.sessionAttributes
  console.log(attrs)


  // const group = new schema.Entity('group', {}, { idAttribute: 'group' })
  //
  // const message = new schema.Entity(
  //   'message',
  //   undefined,
  //   {
  //     idAttribute: (value) => (value.group ? `${value.group}-${value.value}` : value.group)
  //   }
  // )

  // const d = [{ id: '1', guest_id: null, name: 'Esther' }, { id: '1', guest_id: '22', name: 'Tom' }];
  //
  // const patronsSchema = new schema.Entity('patrons', undefined, {
  //   // idAttribute *functions* must return the ids **value** (not key)
  //   idAttribute: (value) => (value.guest_id ? `${value.id}-${value.guest_id}` : value.id)
  // });
  //
  // const messageSchema = new schema.Entity('message', undefined, {
  //   idAttribute: (value) => (value.group ? `${value.group}-${value.type}` : value.group),
  //   processStrategy: (value) => omit(value, 'type')
  // })

  // console.log(normalize(d, [patronsSchema]))
  // console.log(normalize(msgs, [messageSchema]))

  // const nD = normalize(msgs, message)
  // console.log(nD)
  console.log(msgs)
}
