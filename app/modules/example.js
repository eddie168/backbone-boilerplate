/*global define:true */
define([
  "app",

  // Libs
  "backbone"

  // Modules

  // Plugins
],

function(app, Backbone) {

  // Create a new module
  var Example = app.module();

  // This will fetch the tutorial template and render it.
  Example.Views.Tutorial = Backbone.View.extend({
    template: "example",

    //serialize: function () {
    data: function () {
      return {
        title: "Hello KYEW!"
      };
    }
  });

  // Required, return the module for AMD compliance
  return Example;

});
