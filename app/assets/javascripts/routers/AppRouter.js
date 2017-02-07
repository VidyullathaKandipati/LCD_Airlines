var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'show'
  },
  index: function(){
    var formView = new app.FormView({collection: app.flights});
    formView.render();
  },
  show: function(id) {
    var flight = app.flights.get(id);
    var bookingView = new app.BookingView({model: flight});
    bookingView.render();
  }

});
