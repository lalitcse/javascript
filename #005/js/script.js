$(document).ready(function(){
    
    var speed = 500;
    var autoswitch = true;
    var autoswitch_speed = 4000;


    $('.slide').first().addClass('active');

    $('.slide').hide();

    $('.active').show();

    $('#next').on('click', function(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    })

    $('#pre').on('click', function(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').pre().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    })
});