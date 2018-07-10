$(document).ready(function () {
   
    $('.fade-in-up').addClass('hidden').waypoint({
        handler: function () {
            $(this.element).addClass("visible animated fadeInUp")
        },
        offset: '80%'
    });

});