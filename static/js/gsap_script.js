$(function () {
    const allmedia = window.matchMedia("(max-width: 767px)");

    // Feature section animation
    function fetureshape() {
        if ($(".feture__shape").length) {
            window.addEventListener('wheel', function (value) {
                if (value.deltaY > 0) {
                    gsap.to(".feture__shape", {
                        y: 150,
                        duration: 2,
                        borderRadius: "50%",
                        backgroundColor: '#2D50CE',
                    });
                } else {
                    gsap.to(".feture__shape", {
                        y: 0,
                        duration: 4,
                        borderRadius: "50%",
                        backgroundColor: '#EF495E',
                    });
                }
            });
        }
    }

    // About section animation
    function aboutbullet() {
        if ($(".about__bullet").length) {
            window.addEventListener('wheel', function (value) {
                if (value.deltaY > 0) {
                    gsap.to(".about__bullet.bullet1", {
                        x: 350,
                        duration: 5,
                    });
                } else {
                    gsap.to(".about__bullet.bullet1", {
                        x: 0,
                        duration: 4,
                    });
                }
            });

            // Repeat for other bullets
            ["bullet2", "bullet3", "bullet4"].forEach((bullet, index) => {
                window.addEventListener('wheel', function (value) {
                    let moveValue = (bullet === "bullet3") ? 450 : 0;
                    if (value.deltaY > 0) {
                        gsap.to(`.about__bullet.${bullet}`, {
                            [bullet.includes('bullet3') ? 'y' : 'x']: moveValue,
                            duration: 5,
                        });
                    } else {
                        gsap.to(`.about__bullet.${bullet}`, {
                            [bullet.includes('bullet3') ? 'y' : 'x']: 0,
                            duration: 4,
                        });
                    }
                });
            });
        }
    }

    // Case section animation
    function caseanimation() {
        if ($(".case__bullet").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".case__bullet.bullet1", {
                    y: value.deltaY > 0 ? 500 : 0,
                    duration: 5,
                });
            });
        }
        if ($(".case__bullet").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".case__bullet.bullet2", {
                    y: value.deltaY > 0 ? -500 : 0,
                    duration: 5,
                });
            });
        }
    }

    // Working process section animation
    function workingprocess() {
        if ($(".working__shape").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".working__shape.shape1", {
                    y: value.deltaY > 0 ? 600 : 0,
                    duration: 2,
                });
            });
        }

        if ($(".working__shape").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".working__shape.shape2", {
                    y: value.deltaY > 0 ? -600 : 0,
                    duration: 2,
                });
            });
        }
    }

    // Pricing animation
    function pricinganimation() {
        if ($(".pricing__bullet").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".pricing__bullet.bullet1", {
                    y: value.deltaY > 0 ? 800 : 0,
                    duration: 3,
                });
            });
        }
    }

    // Blog section animation
    function bloganimation() {
        if ($(".blog__bullet").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".blog__bullet.bullet1", {
                    y: value.deltaY > 0 ? 400 : 0,
                    duration: 3,
                });
            });
        }
        if ($(".blog__bullet").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".blog__bullet.bullet2", {
                    y: value.deltaY > 0 ? 300 : 0,
                    duration: 3,
                });
            });

        }
    }

    // Footer section animation
    function footeranimation() {
        if ($(".footer__bullet").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".footer__bullet.bullet1", {
                    y: value.deltaY > 0 ? 380 : 0,
                    duration: 3,
                });
            });

        }
    }

    // Services section animation
    function servicesanimatoin() {
        if ($(".services .services__any").length) {
            gsap.from(".services .services__any", {
                y: 60,
                duration: 0.5,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: '.services .services__any',
                    scroller: 'body',
                    start: "top 90%",
                }
            });
        }
    }

    // Client section animation
    function clientanimation() {
        if ($(".client__shape").length) {
            window.addEventListener('wheel', function (value) {
                gsap.to(".client__shape.shape1", {
                    y: value.deltaY > 0 ? 600 : 0,
                    duration: 2,
                });
            });

        }
    }

    // Banner two animation
    function banner2animation() {
        if ($(".banner__leftshapepage3 img").length) {
            gsap.from(".banner__leftshapepage3 img", {
                x: -20,
                duration: 3,
                repeat: -1,
            });
        }

        if ($(".banner__rightshapepage3 img").length) {
            gsap.from(".banner__rightshapepage3 img", {
                y: -20,
                duration: 3,
                repeat: -1,
            });
        }
    }

    // Common image animation
    function forallimg() {
        if ($(".allcomming__animation").length) {
            gsap.to(".allcomming__animation .item1 img", {
                y: -20,
                delay: 2,
                duration: 2,
                repeat: -1,
                yoyo: true,
            });

            gsap.to(".allcomming__animation .item2 img", {
                x: -20,
                delay: 2,
                duration: 2,
                repeat: -1,
                yoyo: true,
            });
        }
    }

    // Banner two animation
    function banertwo() {
        if ($(".banner__rightimage--rightimage2 img").length) {
            gsap.to(".banner__rightimage--rightimage2 img", {
                x: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
            });
        }
    }

    fetureshape();

    // Run animation on desktop, but skip it on mobile
    if (!allmedia.matches) {
        aboutbullet();
        caseanimation();
        workingprocess();
        pricinganimation();
        bloganimation();
        footeranimation();
        servicesanimatoin();
        clientanimation();
        banner2animation();
        forallimg();
        banertwo();
    }

});
