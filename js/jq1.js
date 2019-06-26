$(document).ready(function(){
    var k1=0,k2=0,k3=0,k4=0,k5=0,k6=0,dem=0;
    $(".keo").click(function(e){
        k1++;
        dem++;
        if(dem==2){
          if(k1==1 && k4==1){
            $(".equal").show();
          }
          if(k1==1 && k5==1){
            $(".lose").show();
          }
          if(k1==1 && k6==1){
            $(".win").show();
          }
          if(k2==1 && k4==1){
            $(".win").show();
          }
          if(k2==1 && k5==1){
            $(".equal").show();
          }
          if(k2==1 && k6==1){
            $(".lose").show();
          }
          if(k3==1 && k4==1){
            $(".lose").show();
          }
          if(k3==1 && k5==1){
            $(".win").show();
          }
          if(k3==1 && k6==1){
            $(".equal").show();
          }
        }
        e.preventDefault();
        $(".bua").hide();
        $(".bao").hide();
        console.log(k1);
      });
      $(".bua").click(function(e){
        k2++;
        dem++;
        if(dem==2){
          if(k1==1 && k4==1){
            $(".equal").show();
          }
          if(k1==1 && k5==1){
            $(".lose").show();
          }
          if(k1==1 && k6==1){
            $(".win").show();
          }
          if(k2==1 && k4==1){
            $(".win").show();
          }
          if(k2==1 && k5==1){
            $(".equal").show();
          }
          if(k2==1 && k6==1){
            $(".lose").show();
          }
          if(k3==1 && k4==1){
            $(".lose").show();
          }
          if(k3==1 && k5==1){
            $(".win").show();
          }
          if(k3==1 && k6==1){
            $(".equal").show();
          }
        }
        e.preventDefault();
        $(".keo").hide();
        $(".bao").hide();
        console.log(k2);
      });
      $(".bao").click(function(e){
        k3++;
        dem++;
        if(dem==2){
          if(k1==1 && k4==1){
            $(".equal").show();
          }
          if(k1==1 && k5==1){
            $(".lose").show();
          }
          if(k1==1 && k6==1){
            $(".win").show();
          }
          if(k2==1 && k4==1){
            $(".win").show();
          }
          if(k2==1 && k5==1){
            $(".equal").show();
          }
          if(k2==1 && k6==1){
            $(".lose").show();
          }
          if(k3==1 && k4==1){
            $(".lose").show();
          }
          if(k3==1 && k5==1){
            $(".win").show();
          }
          if(k3==1 && k6==1){
            $(".equal").show();
          }
        }
        e.preventDefault();
        $(".keo").hide();
        $(".bao").hide();
        console.log(k3);
      });
      $(".keo-1").click(function(e){
        k4++;
        dem++;

        if(dem==2){
          if(k1==1 && k4==1){
            $(".equal").show();
          }
          if(k1==1 && k5==1){
            $(".lose").show();
          }
          if(k1==1 && k6==1){
            $(".win").show();
          }
          if(k2==1 && k4==1){
            $(".win").show();
          }
          if(k2==1 && k5==1){
            $(".equal").show();
          }
          if(k2==1 && k6==1){
            $(".lose").show();
          }
          if(k3==1 && k4==1){
            $(".lose").show();
          }
          if(k3==1 && k5==1){
            $(".win").show();
          }
          if(k3==1 && k6==1){
            $(".equal").show();
          }
        }
        e.preventDefault();
        $(".bua-1").hide();
        $(".bao-1").hide();
        console.log(k4);
      });
      $(".bua-1").click(function(e){
        k5++;
        dem++;
        if(dem==2){
          if(k1==1 && k4==1){
            $(".equal").show();
          }
          if(k1==1 && k5==1){
            $(".lose").show();
          }
          if(k1==1 && k6==1){
            $(".win").show();
          }
          if(k2==1 && k4==1){
            $(".win").show();
          }
          if(k2==1 && k5==1){
            $(".equal").show();
          }
          if(k2==1 && k6==1){
            $(".lose").show();
          }
          if(k3==1 && k4==1){
            $(".lose").show();
          }
          if(k3==1 && k5==1){
            $(".win").show();
          }
          if(k3==1 && k6==1){
            $(".equal").show();
          }
        }
        e.preventDefault();
        $(".keo-1").hide();
        $(".bao-1").hide();
      });
      $(".bao-1").click(function(e){
        k6++;
        dem++;
        if(dem==2){
          if(k1==1 && k4==1){
            $(".equal").show();
          }
          if(k1==1 && k5==1){
            $(".lose").show();
          }
          if(k1==1 && k6==1){
            $(".win").show();
          }
          if(k2==1 && k4==1){
            $(".win").show();
          }
          if(k2==1 && k5==1){
            $(".equal").show();
          }
          if(k2==1 && k6==1){
            $(".lose").show();
          }
          if(k3==1 && k4==1){
            $(".lose").show();
          }
          if(k3==1 && k5==1){
            $(".win").show();
          }
          if(k3==1 && k6==1){
            $(".equal").show();
          }
        }
        e.preventDefault();
        $(".keo-1").hide();
        $(".bua-1").hide();
      });
      $(".win").hide();
      $(".lose").hide();
      $(".equal").hide();
     
      
});

