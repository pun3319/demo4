$(document).ready(function(){
    $(".green img").click(function(e){
        e.preventDefault();
        var srcsmall = $(this).attr("src");
        $(".big-hoodie").find("img").attr("src",srcsmall);
        $(".blue").css("opacity",'0.3');
        $(".black").css("opacity",'0.3');
        $(".red").css("opacity",'0.3');
        $(".white").css("opacity",'0.3');
        $(".green").css({
            "opacity":'1',
            "box-shadow":" 1px 3px #999999",
            "transition":'all 0.3s'
        });
    });
    $(".red img").click(function(e){
        e.preventDefault();
        var srcsmall = $(this).attr("src");
        $(".big-hoodie").find("img").attr("src",srcsmall);
        $(".blue").css("opacity",'0.3');
        $(".black").css("opacity",'0.3');
        $(".red").css({
            "opacity":'1',
            "box-shadow":" 1px 3px #999999",
            "transition":'all 0.3s'
        });
        $(".white").css("opacity",'0.3');
        $(".green").css("opacity",'0.3');
    });
    $(".white img").click(function(e){
        e.preventDefault();
        var srcsmall = $(this).attr("src");
        $(".big-hoodie").find("img").attr("src",srcsmall);
        $(".blue").css("opacity",'0.3');
        $(".black").css("opacity",'0.3');
        $(".red").css("opacity",'0.3');
        $(".white").css({
            "opacity":'1',
            "box-shadow":" 1px 3px #999999",
            "transition":'all 0.3s'
        });
        $(".green").css("opacity",'0.3');
    });
    $(".black img").click(function(e){
        e.preventDefault();
        var srcsmall = $(this).attr("src");
        $(".big-hoodie").find("img").attr("src",srcsmall);
        $(".blue").css("opacity",'0.3');
        $(".black").css({
            "opacity":'1',
            "box-shadow":" 1px 3px #999999",
            "transition":'all 0.3s'
        });
        $(".red").css("opacity",'0.3');
        $(".white").css("opacity",'0.3');
        $(".green").css("opacity",'0.3');
    });
    $(".blue img").click(function(e){
        e.preventDefault();
        var srcsmall = $(this).attr("src");
        $(".big-hoodie").find("img").attr("src",srcsmall);
        $(".blue").css({
            "opacity":'1',
            "box-shadow":" 1px 3px #999999",
            "transition":'all 0.3s'
        });
        $(".black").css("opacity",'0.3');
        $(".red").css("opacity",'0.3');
        $(".white").css("opacity",'0.3');
        $(".green").css("opacity",'0.3');
    });
    $(".S").click(function (e) { 
        e.preventDefault();
        $(this).css("border",'1px red solid');
        $(".XL").css("border",'1px black solid')
        $(".XXL").css("border",'1px black solid')
    });
    $(".XL").click(function (e) { 
        e.preventDefault();
        $(this).css("border",'1px red solid');
        $(".S").css("border",'1px black solid')
        $(".XXL").css("border",'1px black solid')
    });
    $(".XXL").click(function (e) { 
        e.preventDefault();
        $(this).css("border",'1px red solid');
        $(".XL").css("border",'1px black solid')
        $(".S").css("border",'1px black solid')
    });
    $("button").click(function (e) { 
        e.preventDefault();
        var bao= $("input").val();
        var tien=bao*55;
        console.log(tien);
        $(".tien").text(tien);
    });
});
