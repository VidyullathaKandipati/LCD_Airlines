var app = app || {};

app.BookingReservationView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td': 'reserveSeat'
  },
  render: function() {
    var rows = this.model.plane.get('rows');
    var cols = this.model.plane.get('cols');
    console.log("BookingReservationView render: ", rows, cols);
    console.log("BookingReservationView: ", app.reservations.filter({flight_id: this.model.id}));

    this.$el.append( $('#seatTemplate').html() );
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var colNames = [];
    for(var i=0; i<cols; i++){
      colNames.push(alphabets[i]);
    }

    var flight_reservations = new app.Reservations();
    flight_reservations = app.reservations.filter({flight_id: this.model.id});
    for (var i=1; i<=rows; i++){
      var tRow = document.createElement('tr');
      for (var j=0; j<cols; j++){
        var tData = document.createElement('td');
        var td_text = i + " " + colNames[j];
        $(tData).html(td_text);
        $(tRow).append(tData);
        //Check for the reservations
        flight_reservations.forEach(function(fr){
          if ( (fr.get('seat_row') === i) && (fr.get('seat_col') === colNames[j]) )
          {
            $(tData).addClass('reserved');
          }
        });
      }
      $('#seat-body').append(tRow);
    }
    this.$el.append( $('#reserve-panel').html() );
  },
  reserveSeat: function(event){
    //Checking for reservation on the seat
    if ( (event.toElement.className !== 'reserved') && (event.toElement.className !== 'new-reservation') ){
      var seat_number = event.toElement.textContent.split(' ');
      var seat_row = seat_number[0];
      var seat_col = seat_number[1];

      $('#seat_number').append(event.toElement.textContent);

      console.log("Row: "+seat_row + " Col: "+seat_col);
      event.toElement.className = "new-reservation";
      // app.reservations.add({seat_col})
    }
    else{
      console.log("Seat already reserved");
    }
  }
});
