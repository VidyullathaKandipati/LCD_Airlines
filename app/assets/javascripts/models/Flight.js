var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
  }
  // initialize: function(){
  //   this.on('add', function(){
  //     console.log("Adding plane to flight",this.plane_id);
  //     this.plane = new app.Planes();
  //     this.plane.url = '/planes/' + this.plane_id;
  //     this.plane.fetch();
  //   });
  // },
  // getPlane: function() {
  //   console.log("Adding plane to flight");
  //   this.plane = new Planes();
  //   this.plane.urlRoot = '/planes/' + this.plane_id;
  //   this.plane.fetch();
  // }

});
