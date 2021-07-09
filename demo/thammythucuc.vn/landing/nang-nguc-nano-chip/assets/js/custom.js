jQuery.noConflict();
(function($) {

    $(".navbar-nav li a").on('click', function(event) {
        $("#navbar").trigger("offcanvas.toggle");
    });

    $('.navbar [data-toggle="collapse"]').on('click', function() {
        $('.navbar-toggle-fix').toggleClass('mo-open')
    })

    $('[data-toggle="offcanvas"]').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // $(document).ready(function() {
    //     //alert("URL : " + window.location.href);       // Hiển thị đường dẫn url
    //     var url = $(location).attr('href');
    //     $('#contactForm input[name=url]').val(url);
    //     $('#contactFormbottom input[name=url]').val(url);
    // });

    $("#contactForm").submit(function(e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmits"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data) {
                $cfResponse.html(data);
                $cfsubmit.html('<button class="btn btn-round cover-btn btn-v" id="cfsubmit" type="submit"><img src="assets/images/img/bt-nhantuvan.png" alt="bt-nhantuvan"></button>');
                $('#contactForm input[name=name]').val('');
                $('#contactForm input[name=email]').val('');
                $('#contactForm input[name=phone]').val('');
                $('#contactForm input[name=nhucau]').val('');
            },
            error: function(data) {
                alert("Error occurd! Please try again");
            }
        });

        return false;

    });
    /* ----- */
    $("#contactFormGoiLai").submit(function(e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponseGoiLai'),
            $cfsubmit = $("#cfsubmitGoiLai"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data) {
                $cfResponse.html(data);
                $cfsubmit.html('<button id="cfsubmitGoiLai" class="form-submit" type="submit" style="padding: 7px 0px !important">Yêu cầu gọi lại</button>');
                $('#contactForm input[name=name]').val('');
                $('#contactForm input[name=email]').val('');
                $('#contactForm input[name=phone]').val('');
                $('#contactForm input[name=nhucau]').val('');
            },
            error: function(data) {
                alert("Error occurd! Please try again");
            }
        });

        return false;

    });

    /* Form top */
    $(document).ready(function() {
        //alert("URL : " + window.location.href);       // Hiển thị đường dẫn url
        var url = $(location).attr('href');
        // $('#contactForm input[name=url]').val(url);
        $('#contactFormtop input[name=url]').val(url);
    });

    $("#contactFormtop").submit(function(e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponsetop'),
            $cfsubmit = $("#cfsubmitstop"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data) {
                $cfResponse.html(data);
                $cfsubmit.html('<button class="btn btn-round cover-btn btn-v" id="cfsubmit" type="submit"><img src="assets/images/img/bt-nhanuudai.png" alt="bt-nhanuudai"></button>');
                $('#contactFormtop input[name=name]').val('');
                $('#contactFormtop input[name=email]').val('');
                $('#contactFormtop input[name=phone]').val('');
                $('#contactFormtop input[name=nhucau]').val('');
            },
            error: function(data) {
                alert("Error occurd! Please try again");
            }
        });

        return false;

    });

    /* ----- */
    $(document).on('ready', function() {
        // $('.video').magnificPopup({
        //     type: 'iframe',
        //     iframe: {
        //         markup: '<div class="mfp-iframe-scaler">' +
        //             '<div class="mfp-close"></div>' +
        //             '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        //             '</div>'
        //     },
        //     callbacks: {
        //         markupParse: function(template, values, item) {
        //             values.title = item.el.attr('title');
        //         }
        //     }
        // });

        // $('.collapse').collapse()

        $(window).on('scroll', function() {
            //Header
            if ($(".navbar").offset().top > 50) {
                $(".navbar-custom").addClass("top-nav-collapse");
            } else {
                $(".navbar-custom").removeClass("top-nav-collapse");
            }
        });
        /* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('a[href="#totop"]').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        /* ---------------------------------------------- /*
         * Scroll Animation
         /* ---------------------------------------------- */

        $('.section-scroll').bind('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

    });

    function checkWidth() {
        if ($(window).width() < 768) {
            $('#frame-1 .form-submit').attr('id', 'none');
            $('.module-10').attr('id', 'dangky');
        } else {
            $('#frame-1 .form-submit').attr('id', 'dangky');
            $('.module-10').attr('id', 'none');
        }
    }
    $(window).resize(checkWidth);

    // $('.pt0-sl').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })

    // $('.pt60-sl').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:3
    //         }
    //     }
    // })

    // $('.slide-phuongphap').slick({
        // dots: true,
        // speed: 300,
        // arrows: false,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //       dots: false,
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       arrows: true,
        //     }
        //   },
          // {
            // breakpoint: 480,
            // settings: {
              // slidesToShow: 1,
              // slidesToScroll: 1,
              // arrows: true,
            // }
          // }
        // ]
    // });
    $('.banggiasilide').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        responsive: [    
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                }
            },       
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                }
            }
        ]
    });
    $('.box-bac-si').slick({
        dots: false,
        speed: 300,
        slidesToShow: 5,
        responsive: [            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });
    $('.box-dich-vu').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        responsive: [            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                }
            }
        ]
    });
    $('.box-hinh-anh-truoc-sau').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        responsive: [            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                }
            }
        ]
    });

    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages;

        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll(".lazy");
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove("lazy");
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyloadImages.forEach(function(image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazy");

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function() {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function(img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    })

    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages;

        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll(".lazyimg1");
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.srcset = image.dataset.srcset;
                        image.classList.remove("lazyimg1");
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyloadImages.forEach(function(image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazyimg1");

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function() {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function(img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.srcset = img.dataset.srcset;
                            img.classList.remove('lazyimg1');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    })

    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages;

        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll(".lazybg");
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.classList.remove("lazybg");
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyloadImages.forEach(function(image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazybg");

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function() {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function(img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazybg');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    })

})(jQuery);