var Reflux = require('reflux');


module.exports = (function() {

  var CardActions = Reflux.createActions([
    'loadMore'
  ]);

  return CardActions;

})();
