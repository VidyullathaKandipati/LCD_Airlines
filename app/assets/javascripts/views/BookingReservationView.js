var app = app || {};

app.BookingReservationView = Backbone.View.extend({

  render: function() {
    var plane = this.model.get('plane_id');
    console.log('Plane details:', plane);
    app.reservations = new app.Reservations();
    app.reservations.fetch().done(function (){
    });
  }
});
