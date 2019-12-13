var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

<<<<<<< HEAD
  render: function() {
    MessagesView.$chats.html('');
    Messages.items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message) ;
  },
=======
  renderMessage: function(message) {
  	MessagesView.$chats.append(`<div class="username">
        <div id=${window.username}></div>
        <div>${message}</div>
      </div>`)
  }
>>>>>>> 3d1a8301ec22a1c4634ea5e80fdd204b70de9dab

};