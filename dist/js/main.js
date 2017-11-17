$(document).ready(function() {
  var teleport, waitForFinalEvent;
  waitForFinalEvent = (function() {
    var timers;
    timers = {};
    return function(callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = 'Don\'t call this twice without a uniqueId';
      }
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();


  $('body').click(function(e) {
    if ($(e.target).closest('.c-search').length === 0) {
      $('.js-search').removeClass('c-search__label--active');
      $('.c-search__input').removeClass('c-search__input--active');
    }
    if ($(e.target).closest('.main-nav-outer, .nav-mob__toggle').length === 0) {
      $('.fader').removeClass('fader--active');
      $('html, body').removeClass('overlayed');
      $('.main-nav-outer').removeClass('main-nav-outer--active');
    }
  });

  if ($.fn.owlCarousel) {
    mainSlider = $('.c-slider.owl-carousel').owlCarousel({
      nav: true,
      dots: true,
      loop: false,
      autoplayHoverPause: true,
      items: 1,
      smartSpeed: 500
    });
  }


  $('#toggleMainMenu').click(function(e) {
    e.preventDefault();
    $('html, body').addClass('overlayed');
    $('.main-nav-outer').addClass('main-nav-outer--active');
    $('.fader').addClass('fader--active');
  });

  $('#toggleButtonClose').click(function(e) {
    e.preventDefault();
    $('.fader').removeClass('fader--active');
    $('html, body').removeClass('overlayed');
    $('.main-nav-outer').removeClass('main-nav-outer--active');

  });


  /*teleport */
  (teleport = function() {
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if ($(document).width() <= 768) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if ($(document).width() <= 580) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
  })();

  $('.js-search').click(function(e) {
    $(this).toggleClass('c-search__label--active');
    $('#search').toggleClass('c-search__input--active');
  })

  setFooterHeight = function() {
    var footerHeight;
    footerHeight = $('.main-footer').outerHeight();
    $('main').css({
      paddingBottom: footerHeight + 'px'
    });
    $('.main-footer').css({
      marginTop: -footerHeight + 'px'
    });
  };
  setFooterHeight();
  
  $(window).resize(function() {
    waitForFinalEvent((function() {
      teleport();
      setFooterHeight();
    }), 200, '');
  });
});
