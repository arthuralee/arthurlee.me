var Reflux = require('reflux');


module.exports = (function() {

  var CardActions = Reflux.createActions([
    'load',
    'loadMore'
  ]);

  return CardActions;

})();
