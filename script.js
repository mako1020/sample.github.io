$(function() {
    var btn = $('.flow-top').find('.flow-left2,.fas');
    btn.hover(
        function() {
            var sel = $(this).parent('.flow-top');
            sel.find('.flow-left2 p').css('text-decoration','underline');
        },
        function() {
            var sel = $(this).parent('.flow-top');
            sel.find('.flow-left2 p').css('text-decoration','none');
        }
    );

   btn.on("click", function() {
       var sel = $(this).parent('.flow-top');
       $('.flow-top').not(sel).next().slideUp(300);
       sel.next().slideToggle(300);
       $('.flow-top').not(sel).find('.fas').addClass('fa-angle-down');
       $('.flow-top').not(sel).find('.fas').removeClass('fa-angle-up');
       sel.find('.fas').toggleClass('fa-angle-down');
       sel.find('.fas').toggleClass('fa-angle-up');
       sel.find('.flow-left2 p').addClass('underline');
   });

   $('.question-top').hover(
       function() {
           $(this).find('.question-left p').css('text-decoration','underline');
       },
       function() {
        $(this).find('.question-left p').css('text-decoration','none');
       }
   );

   var answer = $('.question-top');
   answer.on("click", function() {
       $(this).next().slideToggle(300);
       $(this).find('.fas').toggleClass('fa-chevron-down');
       $(this).find('.fas').toggleClass('fa-chevron-up');
   });

   $(window).on("scroll", function() {
       if($(this).scrollTop() > 60) {
           $('#scroll').fadeIn(300);
       } else {
           $('#scroll').fadeOut(300);
       }
   })
});
