$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function () {
    'use strict';
    function homepageResponsive() {
        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();
        if (windowsWidth > 767) {
            $('.introduction , .menu').css({
                // width: '50%',
                // height: '100%'
                width: '100%',
                height: '50%'
            });
        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }
        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('.custom-property'),
            menuBgImages = $('.menu > div img');
        if (introWidth > introHeight) {
            bgImage.css({
                width: '100%',
                height: 'auto'
            });
            menuBgImages.css({
                width: '100%',
                // height: 'auto'
                height: '100%'
            });
        } else {
            bgImage.css({
                width: 'auto',
                height: '100%'
            });
            menuBgImages.css({
                width: 'auto',
                height: '100%'
            });
        }
    }

    $(window).on('load resize', homepageResponsive);
    function removeHash () {
        history.pushState("", document.title, window.location.pathname
            + window.location.search);
    }

    function hideBoots4Menu()
    {
        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();
        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });
    }
    $('.menu').on('click', '.menu_button' , function () {
        hideBoots4Menu();
    });


    var mapOptions = {
        // center: new google.maps.LatLng(19.146613, 72.939044),
        center: new google.maps.LatLng(19.266423, 72.967034),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    $('.menu').on('click', 'div.menu_button' , function(){
        var selectedPage = $(this).data('url_target');
        window.location.hash = selectedPage;
        $('#'+selectedPage).fadeIn(1200);
    });

    $('body').on('click', '.close-btn', function () {
        window.location.hash="";
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.page').fadeOut(800);
        removeHash ();
    });

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();
    $("#sponsor-list").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        items : 3,
        itemsDesktop: [1200,3],
        itemsDesktopSmall: [991,3],
        itemsTablet: [767,2],
        itemsTabletSmall: [625,2],
        itemsMobile: [479,1]
    });

    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });

    if(window.location.hash !== "" && window.location.hash) {
        var redirectPage = window.location.hash.slice(1);
        $('*[data-url_target="'+redirectPage+'"]').trigger('click');
    }
});
