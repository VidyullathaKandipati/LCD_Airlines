var app = app || {};

app.BookingView = Backbone.View.extend({
  el: 'main',
  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },
  render: function() {
    app.reservations = new app.Reservations();
    app.reservations.fetch({flight_id: this.model.id});

  }

});
