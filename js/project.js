$(document).ready(function(){

	
	var last_id = -1;
	var last_other = -1;
	var mtiExpanded = false;
	var theatreExpanded = false;
	var otherExpanded = false;
	var last_mti;
	var last_mtiNav;

	var highlight_mtiNav=function(nav_num){
		$("#mti" + last_mtiNav).css({"color": "white", "background-color": "#FF0093"});
		$("#mti"+nav_num).css({"color": "#FF0093", "background-color": "white"});
		last_mtiNav=nav_num;
	};


	var close_mti = function(){
		if (mtiExpanded == true) {
			mtiExpanded = false;
			$("#mti-content").slideToggle(1000);
			$("#mti-header").toggleClass('reverse-mti-header');
		}
	};

	var close_theatre = function(){
		if (theatreExpanded) {
				$("#yellow-box").hide();
				$("#slide" + last_id).hide();
				last_id = -1;
				theatreExpanded = false;
				$("#theatre-content").slideToggle(1000);
				$( "#theatre-header" ).toggleClass('reverse-theatre-header');
			}
		};

	var close_other = function(){
		if (otherExpanded) {
			otherExpanded= false;
			$("#other-content").slideToggle(1000);
			$( "#other-header" ).toggleClass('reverse-other-header');
		}
	};

	var close_all = function(){
		close_other();
		close_theatre();
		close_mti();
	};

	var showManager=function(evt){
		evt.preventDefault();
		$(last_mti).hide();
		$("#manager").fadeIn(300);
		last_mti="#manager";
		highlight_mtiNav(1);
	};


	var mti = function(evt){
		$("#mti-content").slideToggle(1000);
		$( "#mti-header" ).toggleClass('reverse-mti-header');
		if (mtiExpanded) {
			mtiExpanded= false;
		}
		else {
			showManager(evt);
			mtiExpanded = true;
			close_theatre();
			resetOther();
			close_other();
		}
		// 
		// $("#mti-header").css({ 
		// 	"background-color": "white", 
		// 	"border-bottom": "2px solid ##FF0093",
		// 	"color": "#FF0093"});

	};

	var theatre = function(){
		$("#theatre-content").slideToggle(1000);
		$( "#theatre-header" ).toggleClass('reverse-theatre-header');
		if(theatreExpanded) {
			$("#yellow-box").hide();
			$("#slide" + last_id).hide();
			last_id = -1;
			theatreExpanded = false;
		}
		else {
			theatreExpanded = true;
			close_mti();
			resetOther();
			close_other();
		}

	};

	var resetOther = function(event){
 		// if(last_other != -1 && !$(this).parents("#other-nav").is("#other-nav") && !$(this).parents("#white-box").is("#white-box")) {
 			$("#otherSlide" + last_other).fadeOut(1000);
 			$("#white-box").fadeOut(1000);
 			$("#other-header").css("background-image", "url(img/otherhead_01.jpg)");
		 	$("#other-content").css("background-image", "url(img/otherhead_02.jpg)");
		 	$("#front-other h3").css("color", "black");
		 	$("#front-other h4").css("color", "black");
		 	$("#stephen-sondheim h1").css("color", "black");
		 	$("#other-header.reverse-other-header").css("border-color", "black");
 			last_other = -1;
 		// }
 		
	};

	var other = function(){
		$("#other-content").slideToggle(1000);
		$( "#other-header" ).toggleClass('reverse-other-header');
		resetOther();
		if (otherExpanded) {
			$("#white-box").hide();
			$("#otherSlide" + last_other).hide();
			last_other = -1;
			otherExpanded = false;
		}
		else {
			otherExpanded = true;
				close_mti();
				close_theatre();
		}

		};




	$("#mti-header").click(mti);
	$("#pink").click(mti);

	$("#theatre-header").click(theatre);
	$("#yellow").click(theatre);

	$("#other-header").click(other);
	$("#blue").click(other);
	
	$("#resume-header").click(function(event){
		if(!$(event.target).is(".nav")) {
			close_all();
		}
	});
	$("#white").click(close_all);
	


	// theatre nav

	$("#theatre-nav a").click(function(){
		 $("#theatre-nav a").removeClass("active");
		 $(this).addClass("active");

		if(last_id == -1) {
			$("#yellow-box").fadeIn(1000).height($("#theatre-nav").height());
			$("body").css("overflow", "hidden");
		}
		else {
			$("#slide" + last_id).hide();
		}
		 var div_id = $('#theatre-nav a').index($(this));
		 $("#slide" + div_id).fadeIn(1000);
		 last_id = div_id;

		 return false;
 	});

	// $(".slide").on("mousewheel", function(e) {
	// 	// alert("joe");
	// 	// alert("what up");
	// 	// e.preventDefault();
	// 	// e.stopPropagation();

	// });

 	// $(".slide").mouseover(function(){
 	// 	var el = $(this);
 	// 	$("body").on({
		//     "mousewheel": function(e) {

		//     }
		// });
 	// });


 	$("#theatre-content").click(function(event){
 		if(last_id != -1 && !$(this).parents("#theatre-nav").is("#theatre-nav") && !$(this).parents("#yellow-box").is("#yellow-box")) {
 			$("#slide" + last_id).fadeOut(1000);
 			$("#yellow-box").fadeOut(1000, function(){
				$("body").css("overflow", "auto");
 				$("#theatre-nav a").removeClass("active");
 			});
 			last_id = -1;		 
 		}
	});



	// var showManager=function(evt){
	// 	evt.preventDefault();
	// 	$(last_mti).hide();
	// 	$("#manager").show();
	// 	last_mti="#manager";
	// 	highlight_mtiNav(1);
	// };

	
	var showDesigner=function(evt){
		evt.preventDefault();
		$(last_mti).hide();
		$("#designer").fadeIn(300);
		last_mti="#designer";
		highlight_mtiNav(2);
	};

	var showPMS=function(evt){
		evt.preventDefault();
		$(last_mti).hide();
		$("#PMS").fadeIn(300);
		last_mti="#PMS";
		highlight_mtiNav(3);

	};

	var showReception=function(evt){
		evt.preventDefault();
		$(last_mti).hide();
		$("#reception").fadeIn(300);
		last_mti="#reception";
		highlight_mtiNav(4);
	};

	$("#mti1").click(showManager);
	$("#mti2").click(showDesigner);
	$("#mti3").click(showPMS);
	$("#mti4").click(showReception);


	$("#manager-next").click(showDesigner);
	
	$("#designer-prev").click(showManager);

	$("#designer-next").click(showPMS);
		
	$("#PMS-prev").click(showDesigner);

	$("#PMS-next").click(showReception);

	$("#reception-prev").click(showPMS);

	$("#reception-next").click(function(evt){
		evt.preventDefault();
		$("#reception").hide();
		$("#theatre-header").trigger("click");
		$("#mti-header").removeClass("reverse-mti-header");
		$("#manager").show();
	});	

	var otherImages = ["portlandstage","newjerseyshakes", "masongross", "chitarivera", "bruriah", "hezatramp"];
	var otherColor = ["#ff0033","#ff9900", "#ccccff", "red", "#99ff00", "#3399cc"];

	$("#other-nav a").click(function(){
	// evt.preventDefault();
		if(last_other == -1) {
			$("#white-box").fadeIn(1000);
		}
		else {
			$("#otherSlide" + last_other).hide();
		}
		 var div_id = $('#other-nav a').index($(this));
		 $("#otherSlide" + div_id).fadeIn(1000);
		 $("#other-header").css("background-image", "url(img/"+otherImages[div_id]+"_01.jpg)");
		 $("#other-content").css("background-image", "url(img/"+otherImages[div_id]+"_02.jpg)");
		 $("#front-other h3").css("color", otherColor[div_id]);
		 $("#front-other h4").css("color", otherColor[div_id]);
		 $("#stephen-sondheim h1").css("color", otherColor[div_id]);
		 $("#white-box p").css("color", otherColor[div_id]);
		 $("#other-header.reverse-other-header").css("border-color", otherColor[div_id]);

		 
		 // $("#other-content").css("background-image", "url(img/hezatramp_02.jpg)");
		 // $("#other-header").css({'background-image': 'url(img/hezatramp_01.jpg)',
			// 					'border-color': '#47a9ce'});
		 // $("#front-other h3").css("color", "#47a9ce");
		 // $("#front-other h4").css("color", "#47a9ce");
		 // $("#stephen-sondheim h1").css("color", "#47a9ce");
		 // $("#white-box p").css("color", "#47a9ce");

		 // $("#other-content").css("background-image", "url(img/chitarivera_02.jpg)");
		 // $("#other-header").css({'background-image': 'url(img/chitarivera_01.jpg)',
			// 					'border-color': 'red'});
		 // $("#front-other h3").css("color", "red");
		 // $("#front-other h4").css("color", "red");
		 // $("#stephen-sondheim h1").css("color", "red");
		 // $("#white-box p").css("color", "red");

		 last_other = div_id;
		 return false;

 	});
	
	 	$("#other-content").click(function(event){
 		if(last_other != -1 && !$(this).parents("#other-nav").is("#other-nav") && !$(this).parents("#white-box").is("#white-box")) {
 			resetOther();
 		}
 		
	});
});





// $("#other-nav a").click(function(evt){
// 	evt.preventDefault();
// 		if(last_other == -1) {
// 			$("#white-box").fadeIn(1000);
// 		}
// 		else {
// 			$("#otherSlide" + last_other).hide();
// 		}
// 		 var div_id = $('#other-nav a').index($(this));
// 		 $("#otherSlide" + div_id).fadeIn(1000);
// 		 last_other = div_id;
// 		 // return false;

//  	});



// $('.click').click(function() {
//     $displayVal = $('.stuffWrapper').css("display");
//     if ($displayVal == "block") {
//       $('.stuffWrapper').css({
//         "display" : "none"
//       });
//     } else {
//       $('.stuffWrapper').css({
//         "display" : "block"
//       });
//     }
    
//   });
  
//   $('.next').click(function() {
//     $currentPos = parseInt($('.theStuff').css( "left"));
//     if ($currentPos == -1200) {
//       $currentPos = 400;
//     }
//     $('.theStuff').css({
//       "left" : $currentPos - 400 + "px"
//     });
//   });
//   $('.prev').click(function() {
//     $currentPos = parseInt($('.theStuff').css( "left"));
//     if ($currentPos == 0) {
//       $currentPos = -1600;
//     }
//     $('.theStuff').css({
//       "left" : $currentPos + 400 + "px"
//     });
//   });