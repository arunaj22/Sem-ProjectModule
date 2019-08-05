/*
 Project Name : Builder
 Author Company : Grow Scales
 Project Date: 08 May, 2017
 Project Developer : sufyan319@outlook.com
 */


/* Table of Content
 ==================================================
 1.Pre Loader
 2.Height
 3.Count Function
 4.Count Down
 5.Tooltip
 6.Contact Form
 7.Blog slider
 8.Header
 9.Portfolio
 10.FAQ
*/

$(document).ready(function($) {
    "use strict";


    //$("#loading").delay(2000).fadeOut(500);
    $(window).load(function() {
        $("#pre_loader").addClass('down');
    });

    //============================================
    //Height
    //=============================================
    $(".height").css({
        'height': window.innerHeight
    });

    $(window).resize(function() {
        $(".height").css({
            'height': window.innerHeight
        });
    });
    /*--------------------------------------------------
     Parallax
     ---------------------------------------------------*/
    $(window).stellar({
        responsive: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        horizontalOffset: 0,
        verticalOffset: 0
    });
    //===========================================================
    //Color Picker
    //===========================================================
    $('#colorPanel').ColorPanel({
        styleSheet: '#cpswitch',
        animateContainer: '.body-innerwrapper',
        colors: {
            '#EFBB20': '/assets/skins/default.css',
            '#00AFA3': '/assets/skins/green.css',
            '#EC440B': '/assets/skins/red.css',
            '#05B4E9': '/assets/skins/blue.css'
        }
    });


    //========================================
    // count function
    //======================================

    $('.counter-block').each(function() {
        $(this).appear(function() {
            var focus = $(this),
                i = focus.find(".odometer");
            window.setTimeout(function() {
                i.html(focus.attr("data-count"))
            }, 500)
        });
    });
    //================================================
    // count down
    //================================================
    // $('#countdown').countdown('2018/03/01', function(event) {
    //     $(this).html(event.strftime('<div class="days count-down"><span class="number">%-D</span><span class="string">%!D:Day,Days;</span></div> <div class="hours count-down"><span class="number">%H</span><span class="string">%!H:Hour,Hours;</span></div><div class="minutes count-down"><span class="number">%M</span><span class="string">%!M:Minute,Minutes;</span></div> </div><div class="seconds count-down"><span class="number">%S</span><span class="string">%!S:Second,Seconds;</span> </div>'));
    // });

    /* ---------------------------------------------------------------------- */
    /*  Contact Form
     /* ---------------------------------------------------------------------- */

    var submitContact = $('#submit_contact'),
        message = $('#msg');

    submitContact.on('click', function(e) {
        e.preventDefault();
        
        var form = $(this).closest('form');
        var $this = $(this);

        $.ajax({
            type: "POST",
            url: 'contact.php',
            dataType: 'json',
            cache: false,
            data: $('#contact-form').serialize(),
            success: function(data) {

                if (data.info !== 'error') {
                    $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                    message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                     form.find('input[type=email]').val('');
                } else {
                    message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                   
                }
            }
        });
    });

    //=================================================
    //Animation
    //===============================================
    $(function() {
        var $elems = $('.animate-in');
        var winheight = $(window).height();
        var fullheight = $(document).height();

        $(window).scroll(function() {
            animate_elems();
        });
        $(window).load(function() {
            animate_elems();
        });

        function animate_elems() {
            var wintop = $(window).scrollTop(); // calculate distance from top of window
            // loop through each item to check when it animates
            $elems.each(function() {
                var $elm = $(this);

                var topcoords = $elm.offset().top; // element's distance from top of page in pixels

                if (wintop > (topcoords - (winheight * .99999))) {
                    // animate when top of the window is 3/4 above the element
                    $elm.addClass('animated');

                }


            });
        } // end animate_elems()
    });
    //===============================================
    //On load Scroll Top
    //===============================================
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
        setTimeout(function() {
            $('html, body').scrollTop(0);
        }, 0);
    });

    //============================================
    //Partner logo
    //=============================================
    var owl = $("#partner-slider");
    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 3],
            [1000, 5],
            [1200, 5],
            [1400, 5],
            [1600, 6]
        ],
        navigation: false,
        pagination: false,
        autoPlay: true

    });
    //============================================
    //Blog slider
    //=============================================
    $('.bs-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoPlay: true,
        items: 1
    });
    //============================================
    //Blog slider
    //=============================================
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 3,
        nav: false,
        dots: true,
        autoPlay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    //============================================
    //Header
    //=============================================
    //offCanvas menu
    $("div.offcanvas-inner ul > li.parent").append('<div class="more"></div>');
    $("div.offcanvas-inner .gp-module-content").on("click", ".more", function(e) {
        e.stopPropagation();
        $(this).parent().toggleClass("current")
            .children("div.offcanvas-inner ul > li.parent").toggleClass("open");
    });

    var $body = $('body'),
        $wrapper = $('.body-innerwrapper'),
        $toggler = $('#offcanvas-toggler'),
        $close = $('.close-offcanvas'),
        $offCanvas = $('.offcanvas-menu');

    $toggler.on('click', function(event) {
        event.preventDefault();
        stopBubble(event);
        setTimeout(offCanvasShow, 50);
    });

    $close.on('click', function(event) {
        event.preventDefault();
        offCanvasClose();
    });

    var offCanvasShow = function() {
        $body.addClass('offcanvas');
        $wrapper.on('click', offCanvasClose);
        $close.on('click', offCanvasClose);
        $offCanvas.on('click', stopBubble);

    };

    var offCanvasClose = function() {
        $body.removeClass('offcanvas');
        $wrapper.off('click', offCanvasClose);
        $close.off('click', offCanvasClose);
        $offCanvas.off('click', stopBubble);
    };

    var stopBubble = function(e) {
        e.stopPropagation();
        return true;
    };
});
//============================================
//Portfolio 1
//=============================================
/* masonry */
(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-masonry').cubeportfolio({
        filters: '#js-filters-masonry',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'overlayBottomAlong',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });
    //============================================
    //Portfolio 2
    //=============================================
    // init cubeportfolio
    $('#js-grid-lightbox-gallery').cubeportfolio({
        filters: '#js-filters-lightbox-gallery1, #js-filters-lightbox-gallery2',
        loadMore: '#js-loadMore-lightbox-gallery',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: ''
            }
        }, {
            width: 320,
            cols: 1,
            options: {
                caption: ''
            }
        }],
        defaultFilter: '*',
        animationType: 'rotateSides',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {

                    t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
    });
    //============================================
    //faq
    //=============================================
    // init cubeportfolio
    $('#js-grid-faq').cubeportfolio({
        filters: '#js-filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0
    });
})(jQuery, window, document);
