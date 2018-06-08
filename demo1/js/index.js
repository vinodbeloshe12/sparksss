// $('document').ready(function () {

// Init ScrollMagic
// var controller = new ScrollMagic.Controller();

// // build a scene
// var ourScene = new ScrollMagic.Scene({
//         triggerElement: '#test'
//     })
//     .setClassToggle('#test', 'fade-in') // add class to project01
//     .addIndicators({
//         name: 'fade scene',
//         colorTrigger: 'black',
//         indent: 200,
//         colorStart: '#75C695'
//     }) // this requires a plugin
//     .addTo(controller);

function showPage(val) {
    console.log("val", val);

    $('#introDiv').css({
        'left': '-100%',
        // 'transition-delay': '0.6s'
    });
    $('#menuContainer').css({
        'right': '-100%',
        // 'transition-delay': '0.6s'
    });
    $('.parentCont').css({
        'visibility': 'hidden',
        'transition': 'opacity 0.6s ease-in-out',

    });
    // setTimeout(function () {
    //     $('.parentCont').fadeOut(800).hide();
    // }, 800)
    if (val == 'PROFILE') {
        $('#profileCont').css({
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'opacity': 1,
            "visibility": "visible",
            // "transform": "scale(1)"
        }).fadeIn(100);

        $('.proIntro').css({
            "transform": "translateY(-50px)",
            'top': "50px",
            'opacity': 1,
            'transition-delay': '3s ease-in-out',
        })
        $('.aside img').css({
            "transform": "translateY(-50px)",
            "right": 0,
            'transition-delay': '1s ease-in-out',
        })
    }
}


// });