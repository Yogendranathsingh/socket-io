const app= require('express')()
const server= require('http').createServer(app)
const io= require('socket.io')(server,{cors:{origin:"*"}})

io.on('connection',function(socket){
    // console.log('socket: ',socket)
    console.log('connected')

    socket.on('chat',function(payload){
        console.log(' chat payload: ',payload)
        io.emit('chat',payload)
    })
})


server.listen(3000,function(){
    console.log('server running at port 3000...')
})