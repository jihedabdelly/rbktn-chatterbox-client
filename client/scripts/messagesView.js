var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
  	MessagesView.$chats.append(`<div class="username">
        <div id=${window.username}></div>
        <div>${message}</div>
      </div>`)
  }

};