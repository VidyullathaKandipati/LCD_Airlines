var app = app || {};

app.BookingReservationView = Backbone.View.extend({
  el: '#main',
  render: function() {
    var rows = this.model.plane.get('rows');
    var cols = this.model.plane.get('cols');
    console.log("BookingReservationView render: ", rows, cols);
    this.$el.append( $('#seatTemplate').html() );
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var colNames = [];
    for(var i=0; i<cols; i++){
      colNames.push(alphabets[i]);
    }
    console.log(colNames);
    for (var i=1; i<=rows; i++){
      var tRow = "<tr>";
      for (var j=0; j<cols; j++){
        tRow += "<td>" + i + colNames[j] + "</td>";
      }
      tRow += "</tr>";
      $('#seat-body').append(tRow);
    }
  }
});
