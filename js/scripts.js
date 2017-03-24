// Side Navigation/Modals
function openNav() {
    $('#sideNav').css('left', '0').css('right', 'auto');
    document.getElementById("sideNav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    $('.header').animate({left: '300px'}, "500");
}
function openNavRight() {
    $('#sideNav').css('left', 'auto').css('right', '0');
    document.getElementById("sideNav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "-300px";
    $('.header').animate({left: '-300px'}, "500");
}
function closeNav() {
    $('.darken').fadeOut();
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $('.header').animate({left: '0px'});
    $('body, html').css('overflowY', 'auto').css('height', 'auto');
    $('.sideMenu').fadeIn();
    $('.searchResults').hide();
    $('.searchSite').val("");
}

// When Ready
$(document).ready(function() {

  var width = $(window).width();
  var random = Math.floor(Math.random() * $('.promo .sb-column').length);

  if ((width <= 768)) {
  }

  $("article p").text(function(index, currentText) {
    return currentText.substr(0, 190) + '...';
  });

  // Sliders
  $('.slider').slick({
		dots: true,
		speed: 600,
    arrows: false,
		lazyLoad: 'ondemand'
  });

  $(".searchSite").keyup(function() {
      if (this.value == "pro" || this.value == "Pro") {
          $(".searchResults").fadeIn();
          $('.sideMenu').hide();
      }
      else {
        $(".searchResults").hide();
        $('.sideMenu').fadeIn();
      }
  });

});
