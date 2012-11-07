// For IE8 and earlier version.
if (!Date.now) {
  Date.now = function() {
    //return new Date().valueOf();
    // https://gist.github.com/1035932
    return +new Date();
  };
}
