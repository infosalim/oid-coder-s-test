
(function ($) {
    "use strict";
    
    jQuery(document).ready(function($){
       
        
        
        
        
        //jquery for scrollspy

            var headerHeight = $(".void-header-area").outerHeight();
            var scrollLink = $(".spy-btn");
            // smooth scrolling

            scrollLink.click(function(e){
               e.preventDefault();

                $("html, body").animate({
                    scrollTop: $(this.hash).offset().top
                },800);
            });
        
        
          $(window).scroll(function(){

                //scrollspy active link switching
                var scrollBarLocation = $(this).scrollTop();
                scrollLink.each(function(){
                   var sectionOffset = $(this.hash).offset().top - 20

                   if( sectionOffset <= scrollBarLocation ){
                       $(this).addClass("active-class");
                       $(this).parent().siblings().find('a').removeClass("active-class");
                   }
                });
              
              
              /**********
                  scroll black
                **********/
              if($(window).scrollTop()){
                    $('.void-header-area').addClass('black');
                }else{
                    $('.void-header-area').removeClass('black');
                }
            });
        
        
         
        // magnific popup
        
        $(".light-box").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        

        
        
        // slickNav
        
        $("ul#navigation").slicknav({
            prependTo: ".responsive-menu-wrap"
        });
        
        
        
        
        // wow js
        new WOW().init();
        
        // jquery for counter
        $('.value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        
        
        
        
        
        
    });
    
   
}(jQuery));





$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.void-header-area').addClass('black');
    }else{
        $('.void-header-area').removeClass('black');
    }
});