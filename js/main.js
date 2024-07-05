$(function(){

    $(".look").hover(function(){
        $(".c_box_inner").addClass("cbox_inner");
    },function(){
        $(".c_box_inner").removeClass("cbox_inner");
    })

    $(".con_menu li").hover(function(){
        $(this).find("a").addClass("abg");
    }, function(){
        $(".con_menu li a").removeClass("abg");
    })


})// j end