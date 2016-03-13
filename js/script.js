$(document).ready(function() {
    function t() {
        var e = $(window).width()
          , t = 1;
        if (e > 1200) {
            t = 4
        } else if (e > 992 && e < 1200) {
            t = 4
        } else if (e > 768 && e < 992) {
            t = 2
        } else if (e > 662 && e < 768) {
            t = 2
        } else if (e < 662 || e < 480) {
            t = 1
        }
        return t
    }
    function n() {
        var n = $(window).width()
          , r = t()
          , i = Math.floor(n / r);
        e.find(".wrapper-portfolio li").each(function() {
            $(this).css({
                width: i + "px"
            })
        })
    }
    function r() {
        n();
        e.isotope("reLayout")
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $(".navbar").removeClass("navbar-transparent")
        } else {
            $(".navbar").addClass("navbar-transparent")
        }
    });
    if ($(window).scrollTop() > 80) {
        $(".navbar").removeClass("navbar-transparent")
    }
    $("#header").parallax();
    var e = $(".wrapper-portfolio");
    e.isotope({
        filter: "*",
        animationOptions: {
            duration: 750,
            easing: "easeOutBounce",
            queue: false
        }
    });
    $(".portfolio-sort > li").on("click", function() {
        $(".portfolio-sort > li.active").removeClass("active");
        $(this).addClass("active");
        var t = $(this).attr("data-filter");
        e.isotope({
            filter: t,
            animationOptions: {
                duration: 750,
                easing: "easeOutBounce",
                queue: false
            }
        });
        r();
        return false
    });
    e.imagesLoaded(function() {
        n()
    });
    $(window).bind("resize", function() {
        r()
    });
    
    
})
