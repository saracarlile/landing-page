$(document).ready(function () {
   

    //animation product images on scroll
    $('.fade-in-up').addClass('hidden').waypoint({
        handler: function () {
            $(this.element).addClass("visible animated fadeInUp")
        },
        offset: '80%'
    });

    //hamgurger nav

    $('.burger-nav').on('click', function(){
        $('nav ul').toggleClass('open');
    });

});