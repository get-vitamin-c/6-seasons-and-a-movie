// One Page Navigation
$('#nav').onePageNav({
		begin: function() {
		console.log('start');
		},
		end: function() {
		console.log('stop');
		},
	scrollOffset: 99,
	filter: ':not(.external)'
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

$(document).ready( function(){


	if($(".usertable").length > 0){
		var opt = {
			"sPaginationType": "full_numbers",
			"oLanguage":{
				"sSearch": "<span>Search:</span> ",
				"sInfo": "Showing <span>_START_</span> to <span>_END_</span> of <span>_TOTAL_</span> entries",
				"sLengthMenu": "_MENU_ <span>entries per page</span>"
			},
			'sDom': "lfrtip",
			'aoColumnDefs' : [
			{ 'bSortable': false, 'aTargets': [0, 5] }
			],
			'oColVis': {
				"buttonText": "Change columns <i class='icon-angle-down'></i>"
			},
			'oTableTools' : {
				"sSwfPath": "js/plugins/datatable/swf/copy_csv_xls_pdf.swf"
			}
		};
		var oTable = $('.usertable').dataTable(opt);

		$('.dataTables_filter input').attr("placeholder", "Search here...");
		$(".dataTables_length select").wrap("<div class='input-mini'></div>").chosen({
			disable_search_threshold: 9999999
		});
		$("#check_all").click(function(e){
			$('input', oTable.fnGetNodes()).prop('checked',this.checked);
		});
		$.datepicker.setDefaults( {
			dateFormat: "dd-mm-yy"
		});
		oTable.columnFilter({
			"sPlaceHolder" : "head:after",
			'sRangeFormat': "{from}{to}",
			'aoColumns': [
			null,
			{
				type: "text",
			},
			{
				type: "text",
			},
			{
				type: "select",
				bCaseSensitive:true,
				values: ['Active', 'Inactive', 'Disabled']
			},
			{
				type: "date-range"
			},
			null
			]
		});
		$(".usertable").css("width", '100%');
	}

	var $left = $("#left");

	$(".table-user .icon .btn").click(function(e){
		e.preventDefault();
		var $el = $(this);
		var $parent = $el.parents("tr");
		var name = $parent.find('td').eq(1).text(),
		img = $parent.find("td").eq(0).find("img").attr("src");
		var email = name + "@randomemailgenerated.com";
		$("#user-infos").text(name);
		$("#modal-user .dl-horizontal dd").eq(0).text(name);
		$("#modal-user .dl-horizontal dd").eq(1).text(email);
		$("#modal-user .span2 img").attr("src", img);
		$("#modal-user").modal("show");
	});

	if($(".username-check").length > 0){
		//ajax mocks
		$.mockjaxSettings.responseTime = 500; 

		$.mockjax({
			url: '/check',
			contentType: "text/json",
			response: function(settings) {
				this.responseText = {available: "true"};
				if(settings.data.username == ""){
					this.responseText = {
						available: 'false'
					};
				}
			}
		});
	}

	if($("#user").length > 0){
		//ajax mocks
		$.mockjaxSettings.responseTime = 500; 

		$.mockjax({
			url: '/post',
			response: function(settings) {
			}
		});

		$.mockjax({
			url: '/error',
			status: 400,
			statusText: 'Bad Request',
			response: function(settings) {
				this.responseText = 'Please input correct value'; 
			}        
		});
		
		$.mockjax({
			url: '/status',
			status: 500,
			response: function(settings) {
				this.responseText = 'Internal Server Error';
			}        
		});
		
		$.mockjax({
			url: '/groups',
			response: function(settings) {
				this.responseText = [ 
				{value: 0, text: 'Guest'},
				{value: 1, text: 'Service'},
				{value: 2, text: 'Customer'},
				{value: 3, text: 'Operator'},
				{value: 4, text: 'Support'},
				{value: 5, text: 'Admin'}
				];
			}        
		});
	}
	
	if($.isFunction($.mockjax)){
		$.mockjax({
			url: 'post.php',
			responseText: {
				say: 'Form was submitted!'
			}
		});
	}

	// Random money value
	moneyRandom();
	// Set current Time
	currentTime();
	// Random feeds update
	randomFeed();

	$("#message-form").submit(function (e) {
		e.preventDefault();
		var $el = $(this),
		randomAnswer = new Array("Lorem ipsum incididunt dolor...", "Lorem ipsum velit in incididunt id consectetur commodo.", "Lorem ipsum voluptate dolore occaecat reprehenderit anim elit nostrud.", "Lorem ipsum in dolor Excepteur et non sunt elit non officia in qui deserunt cupidatat aliquip.");
		var mess = $el.find("input[type=text]").val(),
		messageUl = $el.parents(".messages");

		if ($el.find("button").attr("disabled") == undefined) {
			var newEl = messageUl.find('.right').first().clone(),
			answer = messageUl.find('.left').first().clone();
			answer.find(".message p").html(randomAnswer[Math.floor(Math.random() * 4)]);
			answer.find(".message .time").html("Just now");
			newEl.find(".message p").html(mess);
			newEl.find(".message .time").html("Just now");
			messageUl.find(".typing").before(newEl);
			slimScrollUpdate(messageUl.parents(".scrollable"), 100000);
			$el.find("button").attr('disabled', 'disabled');
			messageUl.find(".typing").removeClass("active");
			setTimeout(function () {
				messageUl.find(".typing").addClass("active");
				messageUl.find(".typing .name").html("Jane Doe");
				slimScrollUpdate(messageUl.parents(".scrollable"), 100000);
			}, 300);

			setTimeout(function () {
				messageUl.find(".typing").before(answer);
				slimScrollUpdate(messageUl.parents(".scrollable"), 100000);
				$el.find("button").removeAttr("disabled");
				messageUl.find(".typing").removeClass("active");
			}, 1500);
		}
	});
});