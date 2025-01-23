const mediaQuery = window.matchMedia("(max-width: 767px)");

function bannertext() {
    var bannertextani = gsap.timeline();

    bannertextani.from(".b_animation", {
        y: 1000,
        duration: 3,
    });

    bannertextani.from(".b_animationbtn", {
        x: 80,
        duration: 1,
    });

    function textanimation() {
        var texth2 = document.querySelector('.nextanimaton');
        var textcontent = texth2.textContent;
        var textspilt = textcontent.split('');

        var blankvalue = '';

        textspilt.forEach(function (allvalue) {
            blankvalue += `<span class='b'>${allvalue}</span>`;
        });

        var texth = document.querySelector('.nextanimaton');
        texth.innerHTML = blankvalue;
    }

    textanimation();

    bannertextani.from(".nextanimaton", {
        rotate: 360,
        duration: 1,
    });

    bannertextani.to(".shape1 img", {
        rotate: 7200,
        delay: 0.3,
        duration: 5,
    });

    bannertextani.to(".shape2 img", {
        rotate: 360,
        duration: 3,
    });

    bannertextani.to(".shape3 img", {
        rotate: 7200,
        duration: 15,
    });

    gsap.to(".shape4 img", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
    });

    gsap.to(".banner__image img", {
        x: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
    });
}

// Run animation on desktop, but skip it on mobile
function checkBannerAnimation() {
    if (!mediaQuery.matches) {
        bannertext();
    }
}


checkBannerAnimation();


mediaQuery.addEventListener('change', checkBannerAnimation);
