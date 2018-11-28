define([], function(){
  'use strict';

  var header = (function(){
    var init = function(){

      console.log('module: header');

    };

    return{
      init: init
    };
  })();

  return header;
});

	
	