// One Page Navigation
$('#nav').onePageNav({
		begin: function() {
		console.log('start');
		},
		end: function() {
		console.log('stop');
		},
	scrollOffset: 99
});

// TinyNav.js
$('#nav').tinyNav({
	header: 'Navigation' // Writing any title with this option triggers the header
});
	  
// Loupe.js
$('.phone-preview').loupe();

// Easytabs.js
$("#t_map_container").easytabs({
	animate: true,
	animationSpeed: 200,
	defaultTab: "span#t_purple",
	panelActiveClass: "active-content-div",
	tabActiveClass: "selected-tab",
	tabs: "> div > div > span",
	updateHash: false
});

// Responsiveslides.js
$("#slider").responsiveSlides({
	auto: true,
	pager: false,
	nav: true,
	speed: 500,
	maxwidth: 800,
	namespace: "hero-slide"
});

// Inview.js
$('.fadeIn').bind('inview', function(event, visible) {
      if (visible) {
        $(this).stop().animate({ opacity: 1 }, 600);
      }
});

// Fancybox.js
$('.fancybox-media')
	.attr('rel', 'media-gallery')
	.fancybox({
	openEffect : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',

	arrows : false,
	helpers : {
		media : {},
		buttons : {}
	}
});