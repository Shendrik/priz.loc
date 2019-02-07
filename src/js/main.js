        // Меню
        $(document).ready(function () {

        //     $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
          
        //     $("#menu-icon").on("click", function(){
        //       $("nav").slideToggle();
        //       $(this).toggleClass("active");
        //   });

        });


            
        //  Меню

        // Баннер

        $(document).ready(function () {

            $("#slider_container").owlCarousel({
                
                autoplay:true,
                items:1,
                dots:true,
                dotsEach:true,
                autoplayTimeout:3000,
                singleItem:true,
                loop:true,

            });


            $("#slider_partners").owlCarousel({
                
                autoplay:true,
                items:1,
                // nav:true,
                // dots:true,
                autoplayTimeout:3000,
                singleItem:true,
                loop:true,
                responsiveClass:true,
                responsive:{
                    320:{
                        items:1
                    },
                    390:{
                        items:2
                    },
                    720:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                }

            });


            $("#slider_reviews").owlCarousel({
                
                autoplay:true,
                items:1,
                // nav:true,
                // dots:true,
                autoplayTimeout:7000,
                singleItem:true,
                loop:true,
               
                

            });



            

          
        });