function initMap () {
     var location = {lat: 38.871857, lng: -77.056267};
     var map = new google.maps.Map(document.getElementById("map"), {
         zoom: 14,
         center: location
         
     });
     
}

/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} */

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('#scroll').fadeIn();
    }else{
        $('#scroll').fadeOut();
    }
});

$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});