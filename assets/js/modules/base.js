define([''], function(){
  'use strict';

  var base = (function() {
    var init = function() {
      console.log('base');

      $('[data-toggle="tooltip"]').tooltip();
    };

    return {
      init: init
    };
  })();

  return base;
});

	