define([], function(){
  'use strict';

  console.log('before | module: header');

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

	
	