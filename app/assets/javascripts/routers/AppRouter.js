var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    var formView = new app.FormView({collection: app.flights});
    formView.render();
  }
});
