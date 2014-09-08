$(document).ready(function(){
    
    $('.categories').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('.categories').mouseleave(function(){
        $(this).fadeTo('fast',0.75);
    });
    
});

