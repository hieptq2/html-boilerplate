define(['header'], function(){
  'use strict';

  console.log('before | module: footer');

  var footer = (function(){
    var init = function(){

      console.log('module: footer');

    };

    return{
      init: init
    };
  })();

  return footer;
});

	
	