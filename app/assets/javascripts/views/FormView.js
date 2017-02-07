var app = app || {};

app.FormView = Backbone.View.extend({
  el: '#formView',
  events: {
    'click button': 'getFlights'
  },
  render: function(){
    this.$el.html( $('#formViewTemplate').html() );

  },
  getFlights: function(){
    var origin = $('#origin').val();
    var dest = $('#destination').val();
    var matchingAllFlights = this.collection.where({'origin': origin, 'destination': dest});
    //Table template
    $('#flightSearchView').html( $('#flightInfo').html() );
    //Passing in filtered collection
    _(matchingAllFlights).each(function(flight){
      var flightSearchView = new app.FlightSearchView({model: flight});
      flightSearchView.render();
    });

  }
});
