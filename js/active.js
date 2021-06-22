/*===================================
Template Name: HandyFix 
Author: codeglim
Version: 1.0
=====================================*/
(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/* Search */
		$('.header .search').on( "click", function(){
			$('.search-form, .search').toggleClass('active');
		});		
		
		/*==============================
			Mobile Nav
		================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			label: '',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
	
		/*===============================
			Ticker Slider
		=================================*/ 
		$(".testimonial-active").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			center:false,
			margin:15,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
					nav:false,	
				},
				480: {
					items:2,
					nav:false,
				},
				768: {
					items:2,
					nav:false,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*======================================
		// Parallax JS
		======================================*/ 
		 $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
		
		
		/*===============================
			Ticker Slider
		=================================*/ 
		$(".slider-client").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			center:false,
			margin:15,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
					nav:false,	
				},
				480: {
					items:2,
					nav:false,
				},
				768: {
					items:3,
					nav:false,
				},
				1170: {
					items:6,
				},
			}
		});	
		
		/*===============================
			Ticker Slider
		=================================*/ 
		$(".blog-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			center:false,
			margin:15,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
					nav:false,	
				},
				480: {
					items:2,
					nav:false,
				},
				768: {
					items:2,
					nav:false,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Partner Slider
		=================================*/ 
		$(".partner-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			center:false,
			margin:15,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:2,
					nav:false,	
				},
				480: {
					items:3,
					nav:false,
				},
				768: {
					items:4,
					nav:false,
				},
				1170: {
					items:6,
				},
			}
		});	
		
		/*====================================
			05. Counter Up JS
		======================================*/ 
		$('.count').counterUp({
			time: 3000,
			delay: 20,
		});
		
		/*=====================================
		20. Video Popup
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*====================================
			Scrool Up
		======================================*/ 	
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
		
	});	
		
	/*====================================
		Preloader JS
	======================================*/		
	$(window).on('load', function () {
		"use strict";
		$(".preeloader").fadeOut(1000);

	});
		
})(jQuery);