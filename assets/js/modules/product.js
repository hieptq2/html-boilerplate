define([], function () {
  'use strict';

  var product = (function() {
    var init = function() {
      console.log('product');
    };

    return {
      init: init
    };
  })();

  return product;
});

	
	