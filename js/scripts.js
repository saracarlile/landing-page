window.addEventListener('load', () => {
//carousel JavaScript
    let slideIndex = 0;

    showSlides = () => {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 6000); // Change image every 5 seconds
    }

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


    showSlides();

});