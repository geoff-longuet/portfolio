/*
$("[smooth-scroll-to]").click(function (event) {
    event.currentTarget.id();
});*/

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, 'swing');
                return false;
            }
        }
    });
});

$(function () {
    $('[target-lightbox]').click(function(event) {
        var lb = $('#'+$(event.currentTarget).attr('target-lightbox'));
        lb.addClass('opening');
        lb.addClass('open');
        setTimeout(function () {
            lb.removeClass('opening');
        }, 250);
        lb.click(function (event2) {
            if(event2.target.id === lb[0].id || $(event2.target).attr('target-lightbox') === lb[0].id){
                lb.addClass('opening');
                lb.removeClass('open');
                setTimeout(function () {
                    lb.removeClass('opening');
                }, 250);
            }
        })
    });
});

$(function () {
    $('[bg-fadein-src]').each(function () {
        var obj = $(this);
        var img = new Image();
        img.onload = function(){
            console.log("set bg to " + img.src);
            obj.css("background-image", "url(" + img.src + ")");
            obj.addClass('opacity-img-fadein');
        };
        img.src = obj.attr('bg-fadein-src');
    });
});