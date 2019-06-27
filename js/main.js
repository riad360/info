(function($) {
	'use strict';
	$(document).ready(function(){

	//loader js
	setTimeout(function () {
		$('.loader_bg').toggle();
	}, 2000);

	// jQuery NiceScroll
	$("body").niceScroll({
		cursorcolor: "#26476C", // change cursor color in hex
		cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
	    cursorborder: "0px", // css definition for cursor border
	    cursorborderradius: "3px", // border radius in pixel for cursor
	});

	//counterUp js
	$('.counter').counterUp({
		delay: 20,
		time: 1000
	});

	//jQuery to collapse the navbar on scroll
	var scroll_start = 0;
	var startchange = $('.wec_section');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top){
				$(".nav_bg").css('background','rgba(38, 71, 108, .5)')
			}else{
				$(".nav_bg").css('background','transparent')
			}
		})
	};

	// ScrollSpy Effect
	var scrollLink = $('.scroll');
	// Smooth scrolling
	scrollLink.click(function(e) {
	    e.preventDefault();
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000 );
	});
	// Active link switching
	$(window).scroll(function() {
	    var scrollbarLocation = $(this).scrollTop();
	    scrollLink.each(function() {
	    var sectionOffset = $(this.hash).offset().top - 20;
	    if ( sectionOffset <= scrollbarLocation ) {
	        $(this).parent().addClass('active');
	        $(this).parent().siblings().removeClass('active');
	      }
	    })
	});


	//Animation Text Js
   var typed = new Typed(".type", {
   	strings: [
   		"Full Stack Web Developer", 
   		"Wordpress Theme Development",
   		"Youtuber",
   		"Digital Marketer",
   		"Bloger",
   		],
   	typeSpeed: 30,
   	startDelay: 1200,
   	backSpeed : 20,
   	backDelay : 1200,
   	loop: true,
   	loopCount: true,
   	showCursor: false,
   	cursorChar:"|",
   	attr: null,
   	contentType: 'html',
   	callback: function() {},
   	preStringTyped: function() {},
   	onStringTyped: function() {},
   	resetCallback: function() {},
   });

   //Skill Bar Js
	$(".skills").addClass("active")
		$(".skills .skill .skill-bar span").each(function() {
			$(this).animate({
			  "width": $(this).parent().attr("data-bar") + "%"
				   }, 1000);
			$(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
			});
			setTimeout(function() {
			   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
			}, 2000);

	//MixiTup jQurey
	var containerEl = document.querySelector('.work_content');
		var mixer = mixitup(containerEl, {
		  	controls: {
		    	toggleLogic: 'and'
		  	},

		  	animation: {
		    	effects: 'fade',
		    	duration: 200,
		    	nudge: false,
		    	reverseOut: false
		  	}
		});

	//FancyBox jQurey
	$("[data-fancybox]").fancybox({
	    // Options will go here
	    toolbar : true,
	    animationEffect : "zoom-in-out",
	    transitionEffect : "circular",
	    thumbs : {
	        autoStart   : false,                  // Display thumbnails on opening
	        hideOnClose : true,                   // Hide thumbnail grid when closing animation starts
	        parentEl    : '.fancybox-container',  // Container is injected into this element
	        axis        : 'y'                     // Vertical (y) or horizontal (x) scrolling
	    },
	    buttons : [
	        'slideShow',
	        'fullScreen',
	        'thumbs',
	        // 'share',
	        //'download',
	        //'zoom',
	        'close'
	    ],
	});

	



	});
})(jQuery);