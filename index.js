$(function(){
    $(".about,.contact,.project").hide();
    
    $(".hello").show();
    $(".aboutbtn").click(function(){$(".aboutbtn").css("font-weight","bold");});
    $(".aboutbtn").click(function(){$(".hello,.contact,.project").hide(function(){$(".about").show();})});
    $(".contactbtn").click(function(){$(".contactbtn").css("font-weight","bold");});
    $(".contactbtn").click(function(){$(".hello,.contact,.project").hide(function(){$(".contact").show();})});
    $(".projectbtn").click(function(){$(".projectbtn").css("font-weight","bold");});
    $(".projectbtn").click(function(){$(".hello,.contact").hide(function(){$(".project").show();})});

    $(".back").click(function(){$(".about,.contact,.project").hide(function(){$(".hello").show();});});
    
})