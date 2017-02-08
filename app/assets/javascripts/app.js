var app = app || {};

_.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs code (for if statements, loops etc.)
    interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function(){

  app.appRouter = new app.AppRouter();

  app.flights = new app.Flights();
  app.planes = new app.Planes();
  app.reservations = new app.Reservations();
  app.reservations.fetch();
  app.planes.fetch().done(function(){
    app.flights.fetch().done(function() {
      Backbone.history.start();
    });
  });

});


//nav bar ////////////////////////////////
// Sticky Header
$(window).scroll(function() {
console.log('scrolling')
    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
//////////////////////////////////
