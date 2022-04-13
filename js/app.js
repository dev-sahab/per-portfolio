$(document).ready(function(){

    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass: 'dots'
    })

    $('.mobile-nav li a').click(function(){
        $('.mobile-nav').removeClass('open');
        $('.toggle').removeClass('active');
    });

// Mobile Toggle button
    let menutoggle = document.querySelector('.toggle');
    let mobileNav = document.querySelector('.mobile-nav');


    menutoggle.onclick = function(){
        menutoggle.classList.toggle('active');
        mobileNav.classList.toggle('open');
    }


    //You can replace offset value from here
    var offset = 300
    $(window).on('load scroll', function(){
        
        if( $(window).scrollTop() > offset ){
            $('.scrollToTopBtn').addClass('show')
        }else{
            $('.scrollToTopBtn').removeClass('show')
        }
    })

});
