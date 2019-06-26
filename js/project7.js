$(document).ready(function () {
    var bao = 0;
    $(".left-10").click(function (e) { 
        e.preventDefault();
        bao++;
        if(bao===1){
            $(".menu-ab").css('display','block')
        }
        if(bao>1){
            bao=0;
        }
        if(bao===0)
        {
            $(".menu-ab").css('display','none');
        }
    });
    $('.child-top').hover(function () {
            $(this).find('.hover').fadeIn()
            
        }, function () {
            // out
            $(this).find('.hover').fadeOut()

        }
    );
});