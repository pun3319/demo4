$(document).ready(function () {
    var index =0;
    var total=$(".mini .con").length
    $(".right").click(function (e) { 
        e.preventDefault();
        index++;
        if(index===total-2){
            index=0;
        }
        $(".con").css('transform',`translateX(-${index*382}px)`)
    });
    $(".left").click(function (e) { 
        e.preventDefault();
        index--;
        if(index<0){
            index=total-3;
        }
        $(".con").css('transform',`translateX(-${index*382}px)`)
    });
    var pun=setInterval(show,3000)
    function show(){
        $('.right').click();
    }
});