var app = app || {};

_.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs code (for if statements, loops etc.)
    interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function(){
  app.appRouter = new app.AppRouter();

  app.flights = new app.Flights();
  app.flights.fetch().done(function(){
    Backbone.history.start();
  });
});
