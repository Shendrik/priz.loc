        // Меню
        // $(document).ready(function () {

        //     $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
          
        //     $("#menu-icon").on("click", function(){
        //       $("nav").slideToggle();
        //       $(this).toggleClass("active");
        //   });

        // });


            
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


            $("#slider_pain").owlCarousel({
                
              autoplay:true,
              items:1,
              // nav:true,
              // dots:true,
              autoplayTimeout:6500,
              singleItem:true,
              loop:true,
              responsiveClass:true,
              responsive:{
                  320:{
                      items:1
                  },
                  390:{
                      items:1
                  },
                  720:{
                      items:1
                  },
                  992:{
                      items:1
                  }
              }

          });


            $("#slider_bonus").owlCarousel({
                
                autoplay:true,
                items:1,
                // nav:true,
                // dots:true,
                autoplayTimeout:6500,
                singleItem:true,
                loop:true,
                responsiveClass:true,
                responsive:{
                    320:{
                        items:1
                    },
                    390:{
                        items:1
                    },
                    720:{
                        items:1
                    },
                    992:{
                        items:1
                    }
                }

            });


            $("#slider_certificates").owlCarousel({
                loop: true,
                center: true,
                items: 3,
                // nav:true,
                margin: 50,
                autoplay: true,
                dots:true,
                autoplayTimeout: 6500,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  992: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });


            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots:true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });

          
            




            $('#open-popup').magnificPopup({
              type:'inline',
              callbacks: {
                open: function() {
                  
                  
                 // this part overrides "close" method in MagnificPopup object
                  $.magnificPopup.instance.close = function () {
                  
                      $("#my-popup").submit(function() {

                        $.ajax({
                          type: "POST",
                          url: "mail.php",
                          data: $(this).serialize()
                        }).done(function() {
                          alert("Спасибо");
                          setTimeout(function() {

                          }, 1000);
                        });
                        return false; 
                      });

                      // if (!confirm("Are you sure?")) {
                      //     return;
                      // }
                  
                       // "proto" variable holds MagnificPopup class prototype
                       // The above change that we did to instance is not applied to the prototype, 
                       // which allows us to call parent method:
                       $.magnificPopup.proto.close.call(this);
                  }; 
                  // you may override any method like so, just note that it's applied globally
                  
                }
              }
            });
            
            


          
        });

    
        
        