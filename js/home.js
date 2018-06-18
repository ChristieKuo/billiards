// JavaScript Document
$(document).ready(function(){
    re_win();
	$(window).resize(function(){
		re_win();
        
       
	});
    
    $(".box").eq(0).addClass("ch_bg");
    
    $(".box").click(function(){
        var _index = $(this).index();
        var top_s = an_he(_index);
        
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        $(".content").animate({top: top_s}, 1500);
    });
    
});

function re_win(){
	var imgp = $("section img").eq(0);
	var imgwidth = imgp.width();
	var imgheight = imgp.height();
	
	var winwidth = $(window).width();
	var winheight = $(window).height();
	
	var winratio = winwidth / winheight;
	var imgratio = imgwidth / imgheight;
	
	$("section").css({height: winheight});
	$(".content").css({height: winheight});
	
	if(winratio>imgratio){
        $(".content").find(".fullimg").css({
            width:"100%",
            height:"auto"
        });
    }
    else{
        $(".content").find(".fullimg").css({
           height: winheight , width:"auto" 
        });
    }
}

function an_he(_index){
    var h = $(".content").height();
    var top_s = h * _index * -1;
    return top_s;
}