var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: '#flightTableBody',
  events: {
    'click td button': 'showbookings',
  },
  flightModel: '',
  render: function(){
      this.flightModel = this.model;
      console.log("Render",this.flightModel);
      var flightTemp = _.template( $('#flightTableTemplate').html() );
      // this.$el.html( flightTemp(this.model.attributes) );
      this.$el.append( flightTemp(this.model.attributes) );
      // var flightTemplate = $()
  },
  showbookings: function() {
    if (app.user === null){
      // app.appRouter.navigate('/login', true);
      window.location = '/login';
    }
    else{
      app.appRouter.navigate('flights/' + this.flightModel.get('id'), true);
      console.log("FLight SearchView showbookings",this.flightModel.plane.get('rows'));
    }
  }
});
