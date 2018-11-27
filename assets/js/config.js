/**
 * REQUIREJS configuration file
 *
 */


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
    'main':           'modules/home'
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
    //
  }
});

requirejs([
	'jquery',
	'bootstrap',
	'easing',
	'swiper'
], function($){
  //
});

