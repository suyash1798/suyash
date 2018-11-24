$(document).ready(function () {
   $('#slides').superslides({
       animation:'fade',
       play:5000,
       pagination:false
   });

   var typed = new Typed(".typed",{
      strings: ["Software Developer.", "Web Developer.", "Student."],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false
   });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            768:{
                items:5
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
            $('.counter').each(function (i,el) {
                var element = $(this);
                var endVal = parseInt(element.text());
                // console.log(endVal);

                element.countup(endVal)
            })

            countUpFinished = true;
        }
    });

    $("[data-fancybox]").fancybox();

});