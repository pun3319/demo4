$(document).ready(function () {
    var index=0;
    var total=$(".slider-img img").length
    console.log(total)
    $(".next").click(function (e) { 
        e.preventDefault();
        index++;
        if(index==(total)){
            index=0;
        }
        $(".slider-img").css('transform',`translateX(-${index*100}%)`)
        
    });
    $(".prev").click(function (e) { 
        e.preventDefault();
        index--;
        if(index<0)
        {
            index=total-1;
        }
        $(".slider-img").css('transform',`translateX(-${index*100}%)`)
    });
    var pun=setInterval(show , 1000);
    var haha=0;
    $(".stop").click(function (e) { 
        e.preventDefault();
        clearInterval(pun);
        $(".text").text("start");
        $(".stop").click(function (e) { 
            e.preventDefault();
            $(".text").text("stop");
            var pun=setInterval(show , 1000);
        });
    });
});
////
/////
////////
//////////////////////
////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////////////////////////////
function show(){
    $('.next').click();
}