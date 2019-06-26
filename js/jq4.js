$(document).ready(function () {
    $(".a").hide();
    $(".tl1").hide();
    $(".tl2").hide();
    $("button").click(function (e) { 
        e.preventDefault();
        $(".a").fadeIn();
        $(".button").fadeOut();
        $(".left").click(function (e) { 
            e.preventDefault();
            $(".thu").text("Đã chọn có");
            $(".button").fadeIn();
            $(".a").fadeOut();
            $(document).click(function (e) { 
                e.preventDefault();
                $(".thu").text("Click me!");
                var x=100;
                console.log(x);
            });
            
        });
        $(".right").click(function (e) { 
            e.preventDefault();
            $(".thu").text("Đã chọn không");
            $(".button").fadeIn();
            $(".a").fadeOut();
            $(document).click(function (e) { 
                e.preventDefault();
                $(".thu").text("Click me!");
                var x=10;
                console.log(x);
            });
            $(".container").click(function (e) { 
                e.preventDefault();
                e.stopPropagation();
            });
        });
        $(document).click(function (e) { 
            e.preventDefault();
            $(".a").fadeOut();
            $(".thu").text("Click me!");
            $(".button").fadeIn();
        });
        $(".container").click(function (e) { 
            e.preventDefault();
            e.stopPropagation();
        });
    });
});