/**
 * Redux middleware that handles interactions with the AWS SDK.
 * TODO: putSession
 * TODO: sendMessage
 */
const lexMiddleware = store => {

  const onLexError = status => store.dispatch(statusChanged(status, true))

  // Client has received a message
  const onIncomingMessage = msg => store.dispatch(messageReceived(msg))

  const lex = n

}

export async function getServerSideProps() {

}
