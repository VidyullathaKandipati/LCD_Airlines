var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight,
  initialize: function(){
    this.on('add', this.getAssociatons);
  },
  getAssociatons: function(flight){
    this.getPlane(flight);
  },
  getPlane: function(flight){
      var flight_id = flight.get('plane_id');
      flight.plane = app.planes.get(flight.get('plane_id'));
      flight.set({plane_name: flight.plane.get('name')});
  }
});
