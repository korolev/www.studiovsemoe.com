$(document).ready(function() {

  // ++++++++++++++++++++++++++++

  $('.main-menu-container a').click(function() {
    $('.main-menu-container a').removeClass('tabbed-a');
    $('.main-menu-container a').parent().removeClass('tabbed');
    $('.main-menu-container a').css({
      'background': 'url(images/separator.png) no-repeat',
      'background-position': 'right'
    });
    return false;
  });

  $('body').not('.main-menu-container a').click(function() {
    $('.hidden-menu').hide();
    $('.main-menu-container a').removeClass('tabbed-a');
    $('.main-menu-container a').parent().removeClass('tabbed');
    $('.main-menu-container a').css({
      'background': 'url(images/separator.png) no-repeat',
      'background-position': 'right'
    });

  });

  // ++++++++++++++++++++++++++++

  $('.main-menu-container a.cat-1').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });


  $('.main-menu-container a.cat-2').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });


  $('.main-menu-container a.cat-3').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });


  $('.main-menu-container a.cat-4').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });

  $('.main-menu-container a.cat-5').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });

  $('.main-menu-container a.cat-6').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });

  $('.main-menu-container a.cat-7').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });

  $('.main-menu-container a.cat-8').click(function() {
    $('.hidden-menu').show();
    $('.hidden-menu .row').hide();
    $('.hidden-menu .category-2').show();
    $(this).addClass('tabbed-a');
    $(this).parent().addClass('tabbed').prev('div').find('a').css({
      'background': 'transparent no-repeat',
      'background-size': '100% 100%'
    });
    return false;
  });

  // ++++++++++++++++++++++++++++

  $('.user-info-btn div').click(function() {
    $('.user-info').toggle().removeClass('hidden-md hidden-sm hidden-xs').css({
      'padding': '0 10px',
      'height': '30px'
    });
  });

  $('.city-list > li').click(function() {
    $(this).find('ul').toggle();
    return false;
  });

  $('body').not('.city-list > li').click(function() {
    $('.city-list > li').find('ul').hide();
  });

  //+++++++++++++++++++++++++++++++++++++++++++
  //Меняем слайды хедера (переключаем надписи внизу и общий фон хедера).

  $('.slider-info .slider-header').addClass('active');
  $('.slider-info .slide-text').addClass('active');

  $('.header .next-btn').click(function() {
    $('.slider-info .slider-header').removeClass('active').css({
      'opacity': '0'
    }).animate({
      'opacity': '1'
    }, 500);
    $('.slider-info .slide-text').removeClass('active').css({
      'opacity': '0'
    }).animate({
      'opacity': '1'
    }, 500);
  });

  $('.header .prev-btn').click(function() {
    $('.slider-info .slider-header').removeClass('active').css({
      'opacity': '0'
    }).animate({
      'opacity': '1'
    }, 500);
    $('.slider-info .slide-text').removeClass('active').css({
      'opacity': '0'
    }).animate({
      'opacity': '1'
    }, 500);
  });

  var nextButtonClick = function() {
    console.log('HI');
    $('body').trigger('mouseup');
    $('#change-header').trigger('click');
    setTimeout(function() {
      nextButtonClick();
    }, 8000);
  }

  setTimeout(function() {
    console.log('HI2');
    nextButtonClick();
  }, 10000);

  $("body").on('mouseup', function(e) {

    //++++++++++++++
    if ($('.header').hasClass('active1')) {

      // setInterval(function()
      //  {
      //    $('.header').removeClass().addClass('main-page header container-fluid active2');
      //    $('.header .slider-info').hide();
      //    $('.header .slider-info.item2').show();
      // }, 4000);


      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active2');
        $('.header .slider-info').hide();
        $('.header .slider-info.item2').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active10');
        $('.header .slider-info').hide();
        $('.header .slider-info.item10').show();
        return false;
      });
    };
    //++++++++++++++
    if ($('.header').hasClass('active2')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active3');
        $('.header .slider-info').hide();
        $('.header .slider-info.item3').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active1');
        $('.header .slider-info').hide();
        $('.header .slider-info.item1').show();
        return false;
      });
    };
    //++++++++++++++
    if ($('.header').hasClass('active3')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active4');
        $('.header .slider-info').hide();
        $('.header .slider-info.item4').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active2');
        $('.header .slider-info').hide();
        $('.header .slider-info.item2').show();
        return false;
      });
    };
    //++++++++++++++
    if ($('.header').hasClass('active4')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active5');
        $('.header .slider-info').hide();
        $('.header .slider-info.item5').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active3');
        $('.header .slider-info').hide();
        $('.header .slider-info.item3').show();
        return false;
      });
    };
    //++++++++++++++
    if ($('.header').hasClass('active5')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active6');
        $('.header .slider-info').hide();
        $('.header .slider-info.item6').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active4');
        $('.header .slider-info').hide();
        $('.header .slider-info.item4').show();
        return false;
      });
    };
    //++++++++++++++
    if ($('.header').hasClass('active6')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active7');
        $('.header .slider-info').hide();
        $('.header .slider-info.item7').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active5');
        $('.header .slider-info').hide();
        $('.header .slider-info.item5').show();
        return false;
      });
    };
    //++++++++++++
    if ($('.header').hasClass('active7')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active8');
        $('.header .slider-info').hide();
        $('.header .slider-info.item8').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active6');
        $('.header .slider-info').hide();
        $('.header .slider-info.item6').show();
        return false;
      });
    };
    //++++++++++++
    if ($('.header').hasClass('active8')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active9');
        $('.header .slider-info').hide();
        $('.header .slider-info.item9').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active7');
        $('.header .slider-info').hide();
        $('.header .slider-info.item7').show();
        return false;
      });
    };
    //++++++++++++
    if ($('.header').hasClass('active9')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active10');
        $('.header .slider-info').hide();
        $('.header .slider-info.item10').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active8');
        $('.header .slider-info').hide();
        $('.header .slider-info.item8').show();
        return false;
      });
    };
    //++++++++++++
    if ($('.header').hasClass('active10')) {

      $('.header .next-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active1');
        $('.header .slider-info').hide();
        $('.header .slider-info.item1').show();
        return false;
      });

      $('.header .prev-btn').click(function() {
        $('.header').removeClass().addClass('main-page header container-fluid active9');
        $('.header .slider-info').hide();
        $('.header .slider-info.item9').show();
        return false;
      });
    };

  });


  //++++++++++++++++++++++++++
  //Показываем скрытую кнопку PREV слайдера новостей.
  // $('.news-slider-prev-btn').addClass('btn-hide');
  //  $('.slider-prev-btn-red').hide();


  // Работает с категориями новостей

  $('.news-categories > div a').click(function() {

    $('.news-item1').hide();

    $('.news-categories > div').removeClass('active');
    $(this).parent().addClass('active')

    if ($(this).parent().hasClass('all-news')) {
      $('.slider-news').hide();
      $('.slider-news.all').show();
    }

    if ($(this).parent().hasClass('web-site')) {
      $('.slider-news').hide();
      $('.slider-news.web-site1').show();

    }

    if ($(this).parent().hasClass('mob-app')) {
      $('.slider-news').hide();
      $('.slider-news.mob-app1').show();
    }

    if ($(this).parent().hasClass('soft')) {
      $('.slider-news').hide();
      $('.slider-news.soft1').show();
    }

    if ($(this).parent().hasClass('micro-con')) {
      $('.slider-news').hide();
      $('.micro-con1').show();
      $('.micro-con1 > div').css('position', 'relative !important');
    }

    $('.slider-news').css('height', '227px');
    $('.slider-news').slick('reinit');

    setTimeout(function() {
      $('.news-item1').show();
    }, 1);

    return false;
  });

  // Работает с категориями новостей END



  //+-------------------------------------------------------------
  // setInterval(function()
  //   {
  //     $('#change-header').click();
  //  }, 4000);

  //--------------------------------------------------------------

});
