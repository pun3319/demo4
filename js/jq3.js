
 $(document).ready(function () {
   
     $(".about").click(function (e) { 
         e.preventDefault();
         $("html").animate({
             scrollTop: $(".text").offset().top // chạy lên 0
         },1000) // chạy vs tôc độ 1s (1000===1s)
     });
     $(".contact").click(function (e) { 
         e.preventDefault();
         $("html").animate({
             scrollTop: $(".content-s5").offset().top
         },3000)
     });
     $(".gallery").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            scrollTop: $(".content-s2").offset().top
        },3000)
    });
    $(".y1").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            scrollTop: $(".text-3").offset().top
        },3000)
    });
    $(".y1").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            scrollTop: $(".text-3").offset().top
        },3000)
    });
    $(".top-1").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            scrollTop: $(".top").offset().top
        },3000)
    });
 });
