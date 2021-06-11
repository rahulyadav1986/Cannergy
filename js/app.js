window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
    // Detect request animation frame
var scroll = window.requestAnimationFrame ||
// IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

elementsToShow.forEach(function (element) {
if (isElementInViewport(element)) {
element.classList.add('is-visible');
} else {
element.classList.remove('is-visible');
}
});

scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
(rect.top <= 0
&& rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
rect.top <= (window.innerHeight || document.documentElement.clientHeight))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
})





jQuery(document).ready(function(){
    jQuery('div').addClass('show-on-scroll');
    jQuery('.card-header').addClass('active');
    jQuery('.humberger_menu').click(function(){
        jQuery('.responsive_item_back').addClass('open');
        jQuery('.overlay').addClass('open');
        jQuery('.main_cover').addClass('open');
    })
    jQuery('.overlay').click(function(){
        jQuery('.responsive_item_back').removeClass('open');
        jQuery('.overlay').removeClass('open');
        jQuery('.main_cover').removeClass('open');
    })


    //When page loads...
$(".tab_content").hide(); //Hide all content
$("ul.tab_menu li:first").addClass("active").show(); //Activate first tab
$(".tab_content:first").show(); //Show first tab content
//On Click Event
$("ul.tab_menu li").click(function () {
    $("ul.tab_menu li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab_content").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    return false;
});

$('.slider_back').owlCarousel({
    loop: false,
    margin: 20,
    smartSpeed: 450,
    nav: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        600: {
            items: 2
        },
        980: {
            items: 4
        },
        1024: {
            items: 4
        },
        1920: {
            items: 5
        }
    }
});

$('.test_sli').owlCarousel({
    loop: false,
    margin: 20,
    smartSpeed: 450,
    nav: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        600: {
            items: 1
        },
        980: {
            items: 1
        },
        1000: {
            items: 1
        }

    }
});



$('.collapse').on('shown.bs.collapse', function () {
    $(this).prev().addClass('active');
});

$('.collapse').on('hidden.bs.collapse', function () {
    $(this).prev().removeClass('active');
});


})









