export const mockChatState = {
  botName: 'MERCURY',
  active: true,
  sendingMessage: false,
  currentIntent: 'Greeting',
  dialogState: '',
  messages: [
    {
      author: 0,
      selectionIndex: 0,
      suggestedActions: [ { type: "reply", value: "Oh, really?" },
                          { type: "reply", value: "Thanks, but this is boring" } ],
      text: "Hello, this is a demo bot. I don't do much",
      timestamp: null
    },
    {
      author: 1,
      selectionIndex: 1,
      text: "hi",
      timestamp: null
    },
    {
      author: 1,
      selectionIndex: 2,
      text: "hi",
      timestamp: null
    },
    {
      author: 0,
      selectionIndex: 3,
      text: "hi contains exactly 2 symbols.",
      timestamp: null
    }
  ]
}
