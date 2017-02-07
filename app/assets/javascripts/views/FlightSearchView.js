var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: '#flightTableBody',
  render: function(){
      console.log(this.model);
      var flightTemp = _.template( $('#flightTableTemplate').html() );
      this.$el.html( flightTemp(this.model.attributes) );
      // var flightTemplate = $()
  }
});
