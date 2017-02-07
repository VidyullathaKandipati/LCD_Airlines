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
    flight.attributes.plane = new app.Plane();
    flight.attributes.plane.urlRoot = '/planes/'+flight.get('plane_id');
    flight.attributes.plane.fetch().done(function(plane){
      flight.set({plane_name: plane.name});
    });
  }
});
