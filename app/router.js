/*global define:true */
define([
  // Application.
  "app",
  // Modules.
  "modules/example"
],

function(app, Example) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      /*
      // Create a layout and associate it with the #main div.
      var layout = new Backbone.Layout({
        el: "#main"
      });

      // Insert the tutorial into the layout.
      layout.insertView(new Example.Views.Tutorial());
      
      // Render the layout into the DOM.
      layout.render();
      */
      app.useLayout({template:"layouts/main"}).render();
      app.layout.setView("#content", new Example.Views.Tutorial());
    }
  });

  return Router;

});
