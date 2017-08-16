$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if($(window).width() >= 700){
    $('.about_context').css({
        'transform' : 'translate(0px, '+ wScroll /1.5 +'%)'
    });
    $('.about_me_header').css({
        'transform' : 'translate('+ wScroll /6 +'%, ' + wScroll /1.7 +'%)'
    });
    } 

  
    
});

$(document).ready(function() {
    $(".button-collapse").sideNav();
    var options = [

/////about section events///////


//// Project header////
        {selector: '.project_header', offset: 125, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('wobble animated');
            }},
        //row one//
        {selector: '.project_image_one', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.project_text_one', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row two//
        {selector: '.project_image_two', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.project_text_two', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row three//
        {selector: '.project_image_three', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.project_text_three', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row four//
        {selector: '.project_image_four', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.project_text_four', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row five//
        {selector: '.project_image_five', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.project_text_five', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row six//
        {selector: '.project_image_six', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.project_text_six', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},

        // {selector: '.client_text_one', offset: 150, callback: function(el) {
        //     Materialize.fadeInImage($(el));
        //     $(el).addClass('fadeIn animated');
        // }},

//// client header////
        {selector: '.client_header', offset: 125, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('wobble animated');
        }},
        //row one//
        {selector: '.client_image_one', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
            // setTimeout("Materialize.fadeIn($('.client_event_one'))",500);
            // setTimeout("Materialize.showStaggeredList($('#skills3'))",1000);
            // setTimeout("Materialize.showStaggeredList($('#skills4'))",1500);
        }},
        {selector: '.client_text_one', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row two//
        {selector: '.client_image_two', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.client_text_two', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row three//
        {selector: '.client_image_three', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.client_text_three', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row four//    
        {selector: '.client_image_four', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.client_text_four', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row five//   
        {selector: '.client_image_five', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.client_text_five', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row six//
        {selector: '.client_image_six', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.client_text_six', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row seven//
        {selector: '.client_image_seven', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.client_text_seven', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        //row eight//
        {selector: '.client_image_eight', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        {selector: '.client_text_eight', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},


//// story header////
        {selector: '.story_header', offset: 125, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('wobble animated');
        }},
        //row one//
        {selector: '.story_text_one', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        {selector: '.story_image_one', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        //row two//
        {selector: '.story_text_two', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        {selector: '.story_image_two', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
        //row three//
        {selector: '.story_text_three', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        {selector: '.story_image_three', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        //row four//
        {selector: '.story_text_four', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeIn animated');
        }},
        {selector: '.story_image_four', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
//// footer////
        {selector: '.footer_JAVA', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
        {selector: '.footer_CSS', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
         {selector: '.footer_JS', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
         {selector: '.footer_HTML', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
         {selector: '.footer_PYTHON', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
         {selector: '.footer_ROR', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInLeft animated');
        }},
         {selector: '.footer_MEAN', offset: 150, callback: function(el) {
            Materialize.fadeInImage($(el));
            $(el).addClass('fadeInRight animated');
        }},
    ];
    Materialize.scrollFire(options);

//// Background Manager////
  //       $('.project_text_one').scroll(function(){
  //               $('.level_one').css('visibility','hidden')
  //           })
  //           $(window).scroll(function() {
  //               $('.project_text_one').each(function(){
  //               var imagePos = $(this).offset().top;

  //               var topOfWindow = $(window).scrollTop();
  //                   if (imagePos < topOfWindow+400) {
  //                       $('.level_one').addClass('hidden');
  //                   }
  //               });
  //       });


  });




/////////

    // $(document).scroll(function(){
    //   $('.client').addClass("bounceInLeft animated");
    //   $('.project').addClass("show");
    // })

///////////Row One Animations/////////////
    // $(document).scroll(function(){
    //   $('.event_one').addClass("fadeInLeft animated");
    // })
  

    // $(document).scroll(function(){
    //   $('.happy_text_one').addClass("fadeIn animated");
    // })

/////////Row Two Animations////////

    // $(document).scroll(function(){
    //   $('.event_two').addClass("fadeInRight animated");
    // })
  
    // $(document).scroll(function(){
    //   $('.happy_text_two').addClass("fadeIn animated");
    // })
  
/////////Row Three Animations////////
    // $(document).scroll(function(){
    //   $('.event_three').addClass("fadeInLeft animated");
    // })
  
    // $(document).scroll(function(){
    //   $('.happy_text_three').addClass("fadeIn animated");
    // })
  
/////////Row Four Animations////////
    // $(document).scroll(function(){
    //   $('.event_four').addClass("fadeInRight animated");
    // })
  
    // $(document).scroll(function(){
    //   $('.happy_text_four').addClass("fadeIn animated");
    // })


