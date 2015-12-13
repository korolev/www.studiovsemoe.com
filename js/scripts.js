$(document).ready(function () {

    var make_map = function () {
        var isMain = !!$('.main-page').length;
        var btnTpl = '<div class="site_map_btn">' +
                '<div class="site_map_prehead"></div>' +
                '<div class="site_map_head">' +
                '<div class="site_map_pic"></div>' +
                '<div class="site_map_title">Карта сайта</div>' +
                '</div>' +
                '<div class="site_map_body"></div>' +
                '</div>',
            tpl = '<div class="site_map_tpl open">' +
                '<div class="site_map_prehead"></div>' +
                '<div class="site_map_head">' +
                '<div class="site_map_pic"></div>' +
                '<div class="site_map_title">Карта сайта</div>' +
                '<div class="site_map_close"></div> ' +
                '</div>' +
                '<div class="site_map_body"></div>' +
                '</div>';

        var overlay = $('<div id="overlayForMap"></div>'),
            site_map_tpl = $(tpl),
            site_map_btn = $('.site_map_btn'),
            site_map_close = site_map_tpl.find('.site_map_close'),
            site_map_body = site_map_tpl.find('.site_map_body');

        $('body').append(overlay);
        site_map_tpl.insertAfter(overlay);

        var drop_list1 = $('.drop-list1').clone().html(),
            drop_list2 = $('.drop-list2').clone().html();

        if (!isMain) {
            $('.footer-wrapper .row').each(function (k, el) {
                console.log(k, el);
                $(el).prepend(btnTpl);
                site_map_btn = $('.site_map_btn');
            });

            $.get('site_map_body.html', function (r) {
                site_map_body.html($(r).html());
                $('.for_drop-list1').html(drop_list1);
                $('.all_prj_list').html(drop_list2);
                $('#close_map_open_d').click(function () {
                    overlay.hide();
                    site_map_tpl.hide();
                    $('.contact-btn').trigger('click');
                });
            });

            site_map_close.click(function () {
                overlay.hide();
                site_map_tpl.hide();
            });
            site_map_btn.click(function () {
                overlay.show();
                site_map_tpl.show(400);
            });
        }
    };

    setTimeout(function () {
        make_map();
    }, 500);


    var mainImage = new Image();
    mainImage.onload = function () {
        setTimeout(function () {
            $('body').removeAttr('style');
            $('body').trigger('startAnimate');
        }, 800);
    };
    mainImage.src = 'images/header-bg1.jpg';

    // ++++++++++++++++++++++++++++

    $('.main-menu-container a').click(function () {
        $('.main-menu-container a').removeClass('tabbed-a');
        $('.main-menu-container a').parent().removeClass('tabbed');
        $('.main-menu-container a').css({
            'background': 'url(images/separator.png) no-repeat',
            'background-position': 'right'
        });
        return false;
    });

    $('body').not('.main-menu-container a').click(function () {
        $('.hidden-menu').hide();
        $('.main-menu-container a').removeClass('tabbed-a');
        $('.main-menu-container a').parent().removeClass('tabbed');
        $('.main-menu-container a').css({
            'background': 'url(images/separator.png) no-repeat',
            'background-position': 'right'
        });

    });

    // ++++++++++++++++++++++++++++

    $('.main-menu-container a.cat-1').click(function () {
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


    $('.main-menu-container a.cat-2').click(function () {
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


    $('.main-menu-container a.cat-3').click(function () {
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


    $('.main-menu-container a.cat-4').click(function () {
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

    $('.main-menu-container a.cat-5').click(function () {
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

    $('.main-menu-container a.cat-6').click(function () {
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

    $('.main-menu-container a.cat-7').click(function () {
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

    $('.main-menu-container a.cat-8').click(function () {
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

    $('.user-info-btn div').click(function () {
        $('.user-info').toggle().removeClass('hidden-md hidden-sm hidden-xs').css({
            'padding': '0 10px',
            'height': '30px'
        });
    });

    $('.city-list > li').click(function () {
        $(this).find('ul').toggle();
        return false;
    });

    $('body').not('.city-list > li').click(function () {
        $('.city-list > li').find('ul').hide();
    });

    //+++++++++++++++++++++++++++++++++++++++++++
    //Меняем слайды хедера (переключаем надписи внизу и общий фон хедера).

    $('.slider-info .slider-header').addClass('active');
    $('.slider-info .slide-text').addClass('active');

    $('.header .next-btn').click(function () {
        var bg_holder = $('.absolute_img_holder');
        bg_holder.animate({
            'opacity': '0.1'
        }, 0, function () {
            bg_holder.animate({
                'opacity': '1'
            }, 400);
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

    });

    $('.header .prev-btn').click(function () {
        var bg_holder = $('.absolute_img_holder');
        bg_holder.animate({
            'opacity': '0.1'
        }, 0, function () {
            bg_holder.animate({
                'opacity': '1'
            }, 400);
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

    });

    var animateMainTheme = function () {
        var div_tpl = "<div class='bg_part'></div>",
            bg_holder = $('.absolute_img_holder'),
            squireSize = 90,
            bg_w = bg_holder.width(),
            bg_h = bg_holder.height(),
            vBlockCount = bg_h / squireSize,
            hBlockCount = bg_w / squireSize,
            partsMap = {},
            pairsArr = [];

        if (!bg_holder) {
            return false;
        }

        hBlockCount = Math.round(hBlockCount);

        if (hBlockCount * squireSize < bg_w) {
            hBlockCount++;
        }

        var cur_bg = bg_holder.css('backgroundImage'),
            cur_bg_x = (1920 - bg_w) / 2;

        for (var x = 0; x < hBlockCount; x += 1) {
            for (var y = 0; y < vBlockCount; y += 1) {
                var el = $(div_tpl),
                    bgX = cur_bg_x * -1 - (x*squireSize),
                    bgY = 0 - (y*squireSize);

                el.css({
                    width: squireSize,
                    height: squireSize,
                    top: y * squireSize,
                    left: x * squireSize,
                    backgroundImage: cur_bg,
                    backgroundPosition: bgX + 'px ' + bgY + 'px'
                });
                partsMap[x] = partsMap[x] || {};
                partsMap[x][y] = el;
                pairsArr.push({x: x, y: y});
                bg_holder.append(el);
            }
        }

        console.log(cur_bg);
        var next_bg = cur_bg.replace('bg1','bg2');
        console.log(next_bg);
        bg_holder.css({backgroundImage:next_bg});

        var animationSpeed = 50,
            animatePart = function (part) {
                try {
                    //part.css({
                    //    backgroundColor: 'red'
                    //});
                    //part.hide(200);
                    //part.animate({top:600},600);
                    part.animate({marginTop:45,marginLeft:45,width:0,height:0},600);
                } catch (e) {
                    console.log(e);
                }
            };
//TODO выстроить в линию и выбирать из линии, убирая с очереди чтобы понять когда проанимировали все
        var clonePairsArr = pairsArr.slice(0);
        var chosePart = function () {
            var cloneArrLen = clonePairsArr.length;
            if (cloneArrLen) {
                var pairIdx = Math.random() * cloneArrLen | 0,
                    pair = clonePairsArr.splice(pairIdx, 1);
                pair = pair[0];
                animatePart(partsMap[pair.x][pair.y]);
                setTimeout(chosePart, animationSpeed);
            } else {
                console.log('FINISH ANIMATE');
            }
        };

        setTimeout(chosePart, animationSpeed);

        console.log(partsMap);
    };


    var nextButtonClick = function () {
        $('body').trigger('mouseup');
        $('#change-header').trigger('click');
        setTimeout(function () {
            nextButtonClick();
        }, 5000);
    };

    $('body').on('startAnimate', function () {
        console.log('startAnimate', arguments);
        setTimeout(function () {
            //nextButtonClick();
            animateMainTheme();
        }, 3000);
    });

    $("body").on('mouseup', function (e) {
        //++++++++++++++
        var maxSlideNum = 10,
            prevNum = 1,
            nextNum = 1;
        for (var i = 1; i <= maxSlideNum; i++) {
            if ($('.header').hasClass('active' + i)) {

                prevNum = i == 1 ? maxSlideNum : i - 1;
                nextNum = i == maxSlideNum ? 1 : i + 1;
                $('.header .next-btn').click(function () {
                    $('.header').removeClass().addClass('main-page header container-fluid active' + nextNum);
                    $('.header .slider-info').hide();
                    $('.header .slider-info.item' + nextNum).show();
                    return false;
                });

                $('.header .prev-btn').click(function () {
                    $('.header').removeClass().addClass('main-page header container-fluid active' + prevNum);
                    $('.header .slider-info').hide();
                    $('.header .slider-info.item' + prevNum).show();
                    return false;
                });
            }
        }
    });


    //++++++++++++++++++++++++++
    //Показываем скрытую кнопку PREV слайдера новостей.
    // $('.news-slider-prev-btn').addClass('btn-hide');
    //  $('.slider-prev-btn-red').hide();


    // Работает с категориями новостей

    $('.news-categories > div a').click(function () {

        $('.news-item1').hide();

        $('.news-categories > div').removeClass('active');
        $(this).parent().addClass('active');

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

        setTimeout(function () {
            console.log('show!!!');
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
