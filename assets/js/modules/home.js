define([], function () {
  'use strict';

  var home = (function() {
    var init = function() {
      console.log('home');
    };

    return {
      // path:     'modules/product',
      init: init
    };
  })();

  return home;
});

	
	