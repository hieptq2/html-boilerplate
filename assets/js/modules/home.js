requirejs(['../config'], function () {
  requirejs([
		'jquery',
		'bootstrap',
		'easing',
		'swiper'
	], function($){
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip();
		  console.log("home");
		});
	});
});

	