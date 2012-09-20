// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    vendor: "../assets/vendor",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone",
    bootstrap: "../assets/js/libs/bootstrap",
    handlebars: "../assets/js/libs/handlebars-1.0.rc.1"
    /* Use runtime for pre-compiled template (bbb release) */
    //handlebars: "../assets/js/libs/handlebars.runtime-1.0.0.beta.6"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Need to make handlebars globally available
    handlebars: {
      exports: "Handlebars"
    },

    // Twitter Bootstrap depends on jQuery.
    bootstrap: ["jquery"],

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"]
  }

});
