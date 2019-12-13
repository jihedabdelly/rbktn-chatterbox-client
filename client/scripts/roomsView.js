var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

<<<<<<< HEAD
  render: function() {
    RoomsView.$select.html('');
    Rooms.items().each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    var $option = $('<option>')
      .val(roomname)
      .text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },
=======
  renderRoom: function(name) {

   RoomsView.$select.append(`<div>${name}</div>`)

  }
>>>>>>> 3d1a8301ec22a1c4634ea5e80fdd204b70de9dab

  handleClick: function(event) {
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
};
