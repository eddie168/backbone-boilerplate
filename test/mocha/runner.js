/*global mocha,mochaPhantomJS:true */
if (window.mocha) {
  var test = [
    'test/test.sample'
  ];
  
  require(test, function() {
    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  });
}
