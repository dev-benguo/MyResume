$(function() {
    $('.section-common').perfectScrollbar({
        wheelSpeed: 0.9
    });

    $('.main-menu-list').on('click', 'li a', function() {
        $('.main-menu-list li a').removeClass('active');
        var $this = $(this);
        $this.addClass('active');
        if($this.data('show') == 'section_home') {
            $this.parents('.main-menu').removeClass('section-active');
            $('.section-common.section-home').removeClass('section-active');
        } else {
            $this.parents('.main-menu').addClass('section-active');
            $('.section-common.section-home').addClass('section-active');
        }
        $('.section-common').removeClass('active');
        $('#' + $this.data('show') + ' .section-common').addClass('active');
    });

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});

    var map = new AMap.Map("mapContainer", {
        resizeEnable: true
    });
    AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: "029", //城市
            map: map,
            panel: "mapPanel"
        });
        //关键字查询
        placeSearch.search('西安高新区环普产业园1期');
    });
});