$(document).ready(function () {
    var click = 0;
    var drop =0;
    var drop1=0;
   $(".child-top").hover(function () {
           $(this).find(".hover").fadeIn()
           $(this).find(".hover-background").fadeIn()

           
       }, function () {
        $(this).find(".hover").fadeOut()
        $(this).find(".hover-background").fadeOut()
       }
   );
   $(".kid-top").hover(function () {
        $(this).find(".hover").fadeIn()
        $(this).find(".hover-background").fadeIn()
           
       }, function () {
        $(this).find(".hover").fadeOut()
        $(this).find(".hover-background").fadeOut()
       }
   );
        $(".map-map").click(function (e) { 
            e.preventDefault();
            click=click+1;
            if(click===1){
                $(".map").fadeIn();
            }
            if(click>1){
                click =0;
            }
            if(click===0){
                $(".map").fadeOut();
            }
        });
        $(".la").click(function (e) { 
            e.preventDefault();
            $("html").animate({
                scrollTop:$(".gallery").offset().top
            },1000)
        });
        $(".hi").click(function (e) { 
            e.preventDefault();
            $("html").animate({
                scrollTop:$(".content-ab").offset().top
            },2000)
    });
        $(".mini-drop-left").click(function (e) { 
            e.preventDefault();
            drop1=drop1+1;
            if(drop1==1)
            {
                $(".dropdown").fadeIn();
                $(".dropdown a").click(function (e) { 
                    e.preventDefault();
                    var bao1 = $(this).text();
                    $(".text-left").text(bao1);
                    console.log(bao1);
                });
            }
            if(drop1>1){
                drop1=0;
            }
            if(drop1==0)
            {
                $(".dropdown").fadeOut();
            }
        });
        $(".mini-drop-right").click(function (e) { 
            e.preventDefault();
            drop=drop+1;
            if(drop==1)
            {
                $(".dropdown-1").fadeIn();
                $(".dropdown-1 a").click(function (e) { 
                    e.preventDefault();
                    var bao = $(this).text();
                    $(".text-right").text(bao);
                    console.log(bao);
                });
            }
            if(drop>1){
                drop=0;
            }
            if(drop==0)
            {
                $(".dropdown-1").fadeOut();
            }
        });
    
});