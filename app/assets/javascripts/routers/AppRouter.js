var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'bookings'
  },
  index: function(){
    var formView = new app.FormView({collection: app.flights});
    formView.render();
  },
  bookings: function(id) {
    var flight = app.flights.get(id);
    console.log("App router Bookings: ", flight.plane);
    var bookingView = new app.BookingFlightInfoView({model: flight});
    bookingView.render();
  }

});
