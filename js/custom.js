$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    $('.portfolio_filter a').click(function () {
        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
});



var scene = document.querySelector('#header-images');
var parallaxInstance = new Parallax(scene);

var scrollProjects = new TimelineMax();
var showProjectsTitle = new TimelineMax();
var aboutMe = new TimelineMax();
var parallaxAboutMe = new TimelineMax();

const controller = new ScrollMagic.Controller();


aboutMe.from(".about-me", 0.5, {y: "50vh", opacity: 0});

showProjectsTitle.from('.portfolio-title', 0.5, {y:"50vh"}, "first")
.from('.portfolio_container', 0.5, {y:"50vh"}, "=-0.25");



const aboutMeScene = new ScrollMagic.Scene({
    triggerElement: ".about-me-div",
    triggerHook: 0.4
})
.setTween(aboutMe)
.addIndicators()
.addTo(controller);


const showProjectTitleScene = new ScrollMagic.Scene({
    triggerElement: ".portfolio-div",
    triggerHook: 0.45
})
.setTween(showProjectsTitle)
.addIndicators()
.addTo(controller);
