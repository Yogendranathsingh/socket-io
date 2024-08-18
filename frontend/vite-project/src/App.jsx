import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import './App.css'

const socket = io.connect("http://localhost:3000")

function App() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  function sendChat(e) {
    e.preventDefault()
    console.log('send clicked')
    socket.emit('chat', { message })
    setMessage('')
  }

  useEffect(() => {
    socket.on("chat", function (payload) {
      setChat([...chat, payload])
    })


  })

  return (
    <>
      <h2>Chatty App</h2>
      <form onSubmit={sendChat}>
        <div>message:{message}</div>
        <input type="text" value={message} onChange={function (e) { setMessage(e.target.value) }} name="message" placeholder='meaasge' />
        <button type="submit" >send</button>
        <div style={{padding:'10px'}}>
        {
          chat.map((sandesh, index) => 
            <div key={index}>{sandesh.message}</div>
          )
        }
        </div>

      </form>
    </>
  )
}

export default App
