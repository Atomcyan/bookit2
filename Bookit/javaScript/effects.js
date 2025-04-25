$(document).ready(function() {
$('.featured_title').hide().fadeIn(3000).animate({left: '40px'});
});


$(document).ready(function(){
$('.nav').hide().slideDown();
});

$(document).ready(function() {

    $('body').css('display', 'none');
    
    $('body').fadeIn(2000);


$('.nav a').click(function(event) {

    event.preventDefault();
    
    newLocation = this.href;
    
    $('body').fadeOut(2000, nextPage);
    
    });


    function nextPage() {

        window.location = newLocation;
       
        }
    }); 


    $(document).ready(function(){
    $('.hiddenReview').click(function(){
    $('.reviewPanel').toggleClass('activePanel');
    });
    });
  

