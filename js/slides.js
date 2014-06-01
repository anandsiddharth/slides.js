/*

Minified Reveal.js :)
Slides.js
C0ded By Anand Siddharth

*/

$(document).ready(function(){
	slidesSize();
	setTimeout(function(){ 
		navAndControls();
	}, 10);
	$("section").addClass("future");
	$("section:nth-child(1)").removeClass("future");
	$("section:nth-child(1)").addClass("current");
	for (var i = 1; i <= $("section").size(); i++) {
		$(".slide-navigator").append("<span></span>");
	};
	$(".left-arrow").click(function(){
		slide.prev();
	});
	$(".right-arrow").click(function(){
		slide.next();
	});
});
$(document).keyup(function(e){
	if (e.keyCode == 37) {
		slide.prev();
	}else if(e.keyCode == 39){
		slide.next();
	};
});

$(window).resize(function(){
	slidesSize();
});
function slidesSize(){
	$(".slides-container").css({
		height : window.innerHeight - 150
	});
	$(".slides-container section").css({
		height : window.innerHeight - 150
	});
};

var activeSlide;
var slide ={
	next : function(){
		activeSlide = $("section.current").index() + 1;
		nextSlide =activeSlide +1;
		if(nextSlide <= $(".slides-container section").size()){
			$("section:nth-child("+activeSlide+")").removeClass("current");
			$("section:nth-child("+ nextSlide +")").removeClass("future");
			$("section:nth-child("+ activeSlide +")").addClass("past");
			$("section:nth-child("+ nextSlide +")").addClass("current");
		};
		navAndControls()
	},
	prev : function(){
		activeSlide = $("section.current").index() + 1;
		prevSlide = activeSlide - 1;
		if(prevSlide >= 1){
			$("section:nth-child("+activeSlide+")").removeClass("current");
			$("section:nth-child("+ prevSlide +")").removeClass("past");
			$("section:nth-child("+activeSlide+")").addClass("future");
			$("section:nth-child("+ prevSlide +")").addClass("current");
		};
		navAndControls()
	}
};
function navAndControls(){
	if($(".current").index()+1 == 1){
		$(".left-arrow").addClass("disabled");
	}else{
		$(".left-arrow").removeClass("disabled");	
	};
	if($(".current").index()+1 == $(".slides-container section").size()){
		$(".right-arrow").addClass("disabled");
	}else{
		$(".right-arrow").removeClass("disabled");
	};

	$(".slide-navigator span").removeClass("active");
	slideActive = $(".current").index()+1;
	$(".slide-navigator span:nth-child("+ slideActive +")").addClass("active");
};