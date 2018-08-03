let slideIndex = 1;
let timer;


showSlides = () => {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}


$(function () {
    timer = window.setInterval("showSlides();", 4000);


    $('#carousel').mouseenter(function () {
        ;
        $('.inner-left').find('h3:nth-of-type(1)').removeClass('animate');
        $('.inner-left').find('h3:nth-of-type(2)').removeClass('animate-two');
        $('.add-margin-inner-left').find('p').removeClass('animate-three');
        $('.inner-left-flex-row').find('button').removeClass('animate-four');
        $('.inner-right').find('img').removeClass('animate-five');
        window.clearInterval(timer);
    });

    $('#carousel').mouseleave(function () {
        $('.inner-left').find('h3:nth-of-type(1)').addClass('animate');
        $('.inner-left').find('h3:nth-of-type(2)').addClass('animate-two');
        $('.add-margin-inner-left').find('p').addClass('animate-three');
        $('.inner-left-flex-row').find('button').addClass('animate-four');
        $('.inner-right').find('img').addClass('animate-five');
        timer = window.setInterval("showSlides();", 4000);
    });

    plusSlides = (n) => {
        slideIndex += n;
        let slides = document.getElementsByClassName("mySlides");
        if (slideIndex > slides.length) { slideIndex = 1 };
        if (slideIndex < 1) { slideIndex = slides.length};
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    const navLinks = document.getElementsByClassName('nav-text');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", (event) => {
            let current = document.getElementsByClassName("active-nav");
            if (current.length >= 1) {
                current[0].className = current[0].className.replace("active-nav", "");
            }
            event.target.className += " active-nav";
        });
    }



    //animation product images on scroll
    $('.fade-in-up').addClass('hidden').waypoint({
        handler: function () {
            $(this.element).addClass("visible animated fadeInUp")
        },
        offset: '80%'
    });

    //hamgurger nav

    $('.burger-nav').on('click', function () {
        $('nav ul').toggleClass('open');
    });


});

//https://stackoverflow.com/questions/21454318/stop-slideshow-on-mouseover