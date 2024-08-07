$(function(){
    $('#menu').slicknav( {
        "label":"",
        'brand': 'Viru Kumar'
    });
});

$(document).ready(function() {
    $(".skitter-large").skitter({
        navigation : true,
        dots : false
    });
  });


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    });
    
  });

  $(document).ready(function(){
    $(".progress_bar_html").animate({"width":"70%"},1000, function(){
    $(".progress_bar_CSS2").animate({"width":"80%"},1000, function(){
    $(".progress_bar_CSS3").animate({"width":"90%"},1000, function(){
    $(".progress_bar_JS").animate({"width":"75%"},1000, function(){
    $(".progress_bar_JQUARY").animate({"width":"85%"},1000, function(){
        
        });  
        });    
        });
    });    
    });
  });