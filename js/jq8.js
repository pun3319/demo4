$(document).ready(function () {
    var topbar = $("#top-bar").outerHeight();
    $("#top-bar a").click(function (e) { 
        e.preventDefault();
        $("#top-bar a").removeClass("active");
        $(this).addClass("active");
        console.log($(this.hash))
        $('html, body').stop().animate ({
            scrollTop: $(this.hash).offset().top - topbar
        },3000)
    });
    $(window).scroll(function () { 
        var bao = $('html,body').scrollTop();
      $.each($("#top-bar a"), function (indexInArray, valueOfElement) { 
           var eachHref= $(valueOfElement).attr("href")
           var gettop = eachHref.offset().top
           console.log(gettop)
      });
    });
  
   
});