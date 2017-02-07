var app = app || {};

app.FlightSearchView = Backbone.View.extend({
  el: '#flightTableBody',
  events: {
    'click a': 'showbookings'
  },
  render: function(){
      // console.log(this.model);
      var flightTemp = _.template( $('#flightTableTemplate').html() );
      // this.$el.html( flightTemp(this.model.attributes) );
      this.$el.html( flightTemp(this.model.attributes) );
      // var flightTemplate = $()
  },
  showbookings: function() {
    app.appRouter.navigate('flights/' + this.model.get('id'), true);
  }
});
