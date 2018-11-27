/**
 * REQUIREJS configuration file
 *
 */

(function () {
  'use strict';

  requirejs.config({

    baseUrl: 'assets/js',
    paths: {

    	// libraries
      'jquery':[
      	'libs/jquery.min',
      	'https://code.jquery.com/jquery-3.3.1.min.js'
      ], 	
      'autosize': 			'libs/autosize.min',
      'bootstrap': 			'libs/bootstrap.bundle.min',
      'easing': 				'libs/jquery.easing.min',
      'swiper': 				'libs/swiper.min',

      // modules
      'base':           'modules/base',
      'home':           'modules/home',
      'product':        'modules/product'
    },

    shim:{

  		// libraries
      'jquery': {
        exports: '$'
      },
      'easing': {
      	deps: ['jquery']
      },

      // modules
      'base': {
        deps: ['jquery']
      },
      'home': {
        deps: ['jquery','product']
      },
      'product': {
        deps: ['jquery']
      },
      
    }
  });

  require([
    'base',
  	'jquery',
  	'bootstrap',
  	'easing',
  	'swiper',
  ], function(base, $, bootstrap, easing, swiper){
    // console.log('1');

    // Global module
    base.init();

    // Page specific module
    var currentModule = $('#SiteContent').attr('data-start');
    console.log('Module:' + currentModule);
    if (currentModule) {
      require([currentModule], function (currentModule) {
        currentModule.init();
      });
    }
  });

}());

