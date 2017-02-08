var app = app || {};

app.BookingFlightInfoView = Backbone.View.extend({
  el: '#main',

  render: function() {
    var flightTemp = _.template($('#bookingFlightInfo').html());
    this.$el.html(flightTemp(this.model.attributes));
    var bookingReservation = new app.BookingReservationView({model: this.model});
    bookingReservation.render();
  }

});
