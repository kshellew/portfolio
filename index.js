$(document).ready(function(){
    $('.menu').click(function() {
          $(this).toggleClass('menu-clicked');
          $('li').toggleClass('hidden');
        });
  });