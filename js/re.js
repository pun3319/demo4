$(document).ready(function () {
    $(".navbar ul li").hover(function () {
            $(this).find(".menu").fadeIn();
            
        }, function () {
            $(this).find(".menu").fadeOut();
        }
    );
    $(".about-click").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".about").offset().top
        },3000)
    });
    $(".blog-click").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".blog").offset().top
        },3000)
    });
    $(".contact-click").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".contact").offset().top
        },3000)
    });
});