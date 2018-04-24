


//  ! Important

//  Place the minified version of this file into the script tag
//  at the bottom of the html file this is used on.
//  This is for pagespeed purposes.


function KeyPress(n) { var t = window.event ? event : n; t.keyCode == 90 && t.shiftKey && t.altKey && $("html").toggleClass("outlineHelper") }
document.onkeydown = KeyPress;


$(document).ready(function()
{

    //$('html').addClass('outlineHelper');

    function toggleMobileMenu()
    {
        $('.mainNav .navList').fadeToggle();
        $('body').toggleClass('noScroll');
    }

    $('.showMobileMenu, .mainNav .navList a, .mainNav .closeBtn').click(function(){
        if(window.innerWidth <= 800) {
            toggleMobileMenu();
        }
    });



    $('.accordion-item').click(function()
    {
        var self = this;

        $(self).parent().find('.active .content').slideUp(function()
        {
            if(window.innerWidth <= 800) {
                var scrollTo = $(self).offset().top - 7;
                $("html, body").animate({ scrollTop: scrollTo });
            }

            $('.accordion-item').removeClass('active');
            $(self).addClass('active').find('.content').slideDown();
        });
    });


    $(".anchorList a").click(function (e)
    {
        e.preventDefault();
        var target = 'a[name="' + $(this).attr('href').slice(1) + '"]';
        var dest = $(target).offset().top - 10;
        $("html, body").animate({ scrollTop: dest }, 'slow');
    });



});