$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }if(this.scrollY >500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }

    });

//Slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })

    // toggle menu btn
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });


   // Typing animation script
   var typed = new Typed(".typing",{
       strings:['Web Devloper','Blogger','Designer','Freelancer'],
       typeSpeed:100,
       backSpeed:60,
       loop:true
   })
   var typed = new Typed(".typing-2",{
    strings:['Web Devloper','Blogger','Designer','Freelancer'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

    //owl-carousel styling
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:1500,
        autoplayHoverPause:true,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                item:1,
                nav:false
            },
            600:{
                item:2,
                nav:false
            },
            1000:{
                item:3,
                nav:false
            }
        }
    })
})
