// MDN WebSocket documentation
// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

const socket = new WebSocket('wss://m1l7vq7ida.execute-api.us-east-2.amazonaws.com/production')

socket.addEventListener('open', e => {
  console.log('WebSocket is connected')
})

socket.addEventListener('close', e => console.log('WebSocket is closed'))

socket.addEventListener('error', e => console.error('WebSocket is in error', e))

socket.addEventListener('message', e => {
  console.log('WebSocket received a message:', e)
})

window.ask = function (msg) {
  const payload = {
    action: 'message',
    msg
  }
  socket.send(JSON.stringify(payload))
}
