var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
<<<<<<< HEAD
    // todo: save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message) /*'string'/* /*{ order: '-createdAt' }*/,
=======
    $.ajax({
      url: Parse.server,
      type: 'POST',
	  data: JSON.stringify(message),
>>>>>>> 3d1a8301ec22a1c4634ea5e80fdd204b70de9dab
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: JSON.parse(JSON.stringify({ order: '-createdAt' })),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};


// <img src = 'https://www.goldderby.com/wp-content/uploads/2019/10/joker-joaquin-phoenix.jpg?w=620&h=360&crop=1'>