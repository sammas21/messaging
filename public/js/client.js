$(function(){
    var socket = io();
    $('form').submit(function(e){
        e.preventDefault();
        socket.emit('chat_message', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('chat_message', function(msg){
        $('#messages').append($('<li>').text(msg));
    })
});