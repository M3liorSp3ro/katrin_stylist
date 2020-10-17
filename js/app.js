$(function () {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        console.log(introH);

        checkScroll(scrollPos, introH);
        
    });

    function checkScroll() {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    //Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700);
    });

    //Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show")
    });

});