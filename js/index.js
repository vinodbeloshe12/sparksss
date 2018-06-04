$('document').ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ourScene = new ScrollMagic.Scene({
            triggerElement: '#test'
        })
        .setClassToggle('#test', 'fade-in') // add class to project01
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            indent: 200,
            colorStart: '#75C695'
        }) // this requires a plugin
        .addTo(controller);
});