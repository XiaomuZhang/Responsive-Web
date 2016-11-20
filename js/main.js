/*自定义 的js脚本*/
'use strict';

$(function() {
    /*轮播图*/
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#carousel-section').find('.item').each(function(index, item) {
            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            if (isSmallScreen){
                $item.html('<img src="'+ imgSrc + '" alt="" />');
            } else{
                //小图换大图，清空img标签
                $item.empty();
                $item.css('backgroundImage', 'url("' + imgSrc + '")');
            }
        });
    }
    $(window).on('resize', resize).trigger('resize');

    /*初始化tooltips插件*/
    $('[data-toggle="tooltip"]').tooltip();

    /*计算选项卡ul的宽度，在小屏幕下滑动*/
    var $ulElement = $('.nav-tabs');
    var ulWidth = 30;
    $ulElement.children('li').each(function(index, item) {
        ulWidth += item.clientWidth;
    });
    //判断当前ul宽度是否超出屏幕,如果超出，横向滚动
    if (ulWidth > $(window).width()) {
        $ulElement.css('width', ulWidth).parent().css('overflow-x', 'scroll');
    }else{
        $ulElement.css('width', '100%');
    }

    /*点击新闻标签，切换标题*/
    var $newsTitle = $('.news').find('.news-title');
    $('.nav-stacked').find('a').each(function(index, item){

        $(item).on('click', function() {
            console.log('ccc');
            var title = $(this).data('title');
            $newsTitle.text(title);
        });
    });

    var startX, endX;
    var offset = 50;
    /*触摸事件滑动轮播图*/
    $('.carousel').on('touchstart', function(event){
        startX = event.originalEvent.touches[0].clientX;
       // console.log(startX);

    } );
    $('.carousel').on('touchmove', function(event) {
        //手指滑动时不断记录手指在屏幕上的X方向位置
        endX = event.originalEvent.touches[0].clientX;

    });

    //手指离开屏幕后触发
    $('.carousel').on('touchend', function(event) {
        var distance = Math.abs(endX - startX);
        if (distance > offset) {
            $(this).carousel(endX > startX ? 'prev' :'next');
        }
    });
});