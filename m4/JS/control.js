$(function(){
    "use strict";
    
    
    // contacts - every page
    $('#info').click(function(){
        $('#info_box').toggleClass('open');
    }); 
    
    // progress - about page
    $('.pr_bar').each(function(){
        let width = $(this).data('skill');
        $(this).css('width', width + '%');
    });
    
});