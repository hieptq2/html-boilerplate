define([], function(){
  'use strict';

  var home = (function(){
    var init = function(){

      console.log('module: home');

    };

    return{
      init: init
    };
  })();

  return home;
});

	
	