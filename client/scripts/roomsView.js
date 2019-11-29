var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(name) {

   RoomsView.$select.append(`<div>${name}</div>`)

  }

};
