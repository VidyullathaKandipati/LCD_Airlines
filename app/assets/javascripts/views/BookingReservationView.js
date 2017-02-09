var app = app || {};

app.BookingReservationView = Backbone.View.extend({
  el: '#flight-book',
  events: {
    'click td': 'reserveSeat',
    'click #reserve_seat': 'makeReservation'
  },
  initialize: function(){
    this.listenTo(app.reservations, 'add', this.render);
  },
  seatNumber: [],
  render: function() {
    var rows = this.model.plane.get('rows');
    var cols = this.model.plane.get('cols');

    //Getting the column names in alphabets depending on the number of the cols in collection
    $('#div-seats').html( $('#seatTemplate').html() );
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
        //Check for the existing reservations on flight
        flight_reservations.forEach(function(fr){
          if ( (fr.get('seat_row') === i) && (fr.get('seat_col') === colNames[j]) )
          {
            $(tData).addClass('reserved'); //This shows the reserved seats in red
          }
        });
        $(tData).attr('id',i+colNames[j]);
      }
      //Appending the seat row to the table
      $('#seat-body').append(tRow);
    }
    // Preserving the previous selected seats on page re-rendering
    var reservedSeats = [];
    for (var i=0; i< this.seatNumber.length; i++){
      var seat = this.seatNumber[i].split(' ');
      var seat_row = seat[0];
      var seat_col = seat[1];
      var seatElement = '#'+seat_row+seat_col;

      console.log("Just reserving the seats : ",seatElement);

      if ( !( $(seatElement).is('.reserved') ) ){
        debugger;
        $(seatElement).addClass("new-reservation");
      }
      else{
        var seat = seat_row+" "+seat_col;
        console.log(seat);
        reservedSeats.push(seat);
      }
    }
    for(var i=0; i<reservedSeats.length; i++){
      var index = this.seatNumber.indexOf(reservedSeats[i]);
      if (index > -1) {
        this.seatNumber.splice(index, 1);
      }
    }
    reservedSeats = [];

    $('#seat_number').text(this.seatNumber);

    //Rendering Make-reservation buttons and the selected seats display
    $('#reserve-panel').html( $('#reserve-panel-template').html() );
  },
  reserveSeat: function(event){
    //Checking for reservation on the seat
    if ( (event.toElement.className !== 'reserved') &&
         (event.toElement.className !== 'new-reservation') ){
      this.seatNumber.push(event.toElement.textContent);
      $('#seat_number').text(this.seatNumber);

      event.toElement.className = "new-reservation";
    }
    else if(event.toElement.className === 'new-reservation'){
      //Unselecting the element, remove from our list as well
      var index = this.seatNumber.indexOf(event.toElement.textContent);
      if (index > -1) {
        this.seatNumber.splice(index, 1);
      }

      $('#seat_number').text(this.seatNumber);
      //Removing class
      event.toElement.className = "";
    }
  },
  makeReservation: function(){

    for (var i=0; i< this.seatNumber.length; i++){
      var seat = this.seatNumber[i].split(' ');
      var seat_row = seat[0];
      var seat_col = seat[1];
      var seatElement = '#'+seat_row+seat_col;

      if ( !( $(seatElement).is('.reserved') ) ){
      // if ( $(seatElement).attr('class') === 'reserved' ){
        app.reservations.create({flight_id: this.model.id, user_id: app.user.id, seat_row: seat_row, seat_col: seat_col});
        $(seatElement).addClass('reserved');
        // seatElement.className = "reserved";
      }
      else {
        $(seatElement).removeClass('new-reservation');
        console.log("This seat is no longer available, please select some other seat.");
      }
    }

    var ticketData = {
      origin: this.model.get('origin'),
      destination: this.model.get('destination'),
      user: app.user.name,
      flight_id: this.model.id,
      seat_row: seat_row,
      seat_col: seat_col,
      date: this.model.get('date')
    };
    var ticketTemplate =  _.template( $('#ticketTemplate').html() );
    this.$el.append( ticketTemplate(ticketData) );

    //Emptying the reserved seats after booking.
    this.seatNumber = [];

  }
});
