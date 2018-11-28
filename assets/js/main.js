/**
 * REQUIREJS configuration file
 *
 */

(function(){
  'use strict';

  requirejs.config({

    baseUrl: 'assets/js',
    paths: {

    	// libraries
      'jquery': [
        // 'https://code.jquery.com/jquery-3.3.1.min.js',
      	'libs/jquery.min'
      ],
      'bootstrap': 			'libs/bootstrap.bundle.min',
      'easing': 				'libs/jquery.easing.min',
      'swiper': 				'libs/swiper.min',

      // modules
      'base':           'modules/base',
      'header':         'modules/header',
      'footer':         'modules/footer',

      'home':           'modules/home',
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
        deps: ['jquery', 'bootstrap']
      },
      'header': {
        deps: ['jquery', 'bootstrap']
      },
      'footer': {
        deps: ['jquery', 'bootstrap']
      },

      'home':{
        deps: ['jquery', 'bootstrap', 'swiper']
      },
      
    }
  });

  require([
    'base',
    'header',
    'footer',
  	'jquery',
  	'bootstrap',
  	'easing'
  ], function(base, header, footer, $, bootstrap, easing){

    // Global module
    base.init();
    header.init();
    footer.init();

    // Page specific module
    var currentModule = $('#SiteContent').attr('data-start');
    var listModules = ['home'];

    if (currentModule && $.inArray(currentModule, listModules) !== -1) {
      require([currentModule], function (currentModule) {
        currentModule.init();
      });
    }else{
      console.log('Not found any Specific module of page in #SiteContent');
    }
  });

}());

