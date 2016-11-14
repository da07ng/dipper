/* 官网侧边导航组件交互sidebar.js
 * By: nani heyuan@baidu.com
 * Version: 1.0
 * Date: 7-25
 *
 */
/* 点击事件 */
//
//function setSelected() {
//	var $selecteds = $('#sidebar .selected');
//	if( $selecteds.parent().siblings('.title').length !== 0 ) {
//		$selecteds.parent().siblings('.title').css({
//			'border-left' : '3px solid #333 ',
//			'background'  : '#f3f3f3 url("images/morearrow-up.png")',
//			'background-repeat' : "no-repeat",
//			'background-position' : "200px center"
//		})
//	}else {
//		$selecteds.find('a').css({
//			'border-left' : '3px solid #333',
//			'background'  : '#f3f3f3 '
//		})
//	}
//}
//setSelected();

function man_nav(argument) {
	$('#sidebar .title').click(function(event)
	{
		event.preventDefault();
		$(this).css('border-left','3px solid #333');
		if( $('#sidebar .selected').parent('.submore').length == 0 ) {
			$('#sidebar .selected').find('a').css({
				'border-left' : '3px solid #0098dd',
				'background'  : '#f9f9f9'
			})
		}
		var $subMore  = $(this).parent().siblings('li').find('.submore');
		for(var i = 0; i < $subMore.length; i++) {
			$subMore.slideUp(200);
			$( $subMore[i] ).siblings('.title').css({
				'border-left' : '3px solid #0098dd',
				'background'  : '#f9f9f9 url("images/morearrow.png")',
				'background-repeat' : "no-repeat",
				'background-position' : "200px center"
			});
		}
		$(this).parent().find('.submore').slideToggle(200);
		dom = $(this).parent().find('.submore');
		me = $(this);

		setTimeout(function(){

			if(dom.css("display") == "none"){
				me.css({
					'border-left' : '3px solid #333 ',
					'background'  : '#f3f3f3 url("images/morearrow.png")',
					'background-repeat' : "no-repeat",
					'background-position' : "200px center"
				});
				return;
			}else{
				me.css({
					'border-left' : '3px solid #333 ',
					'background'  : '#f3f3f3 url("images/morearrow-up.png")',
					'background-repeat' : "no-repeat",
					'background-position' : "200px center"
				});
			}
		},220);
	})

};
man_nav();

/**************解析QueryString gaojie***************/
function _getQueryStringByKey(key) {
	return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
}
;
var title = _getQueryStringByKey('title');
var type = _getQueryStringByKey('type');
title = (title == null || title == '') ? 'summarize' : title;
type = (type == null || type == '') ? 'js' : type;
$("#apiframe").attr('src', type + '/' + title + '.html');

/**************设置nav选中状态 gaojie***************/
var nav_a = $(".nav-list a");
var nav_blur = function () {
	$('.submore').show();
	var selectedlink = $.grep(nav_a, function (a) {
		$(a).parent('li').removeClass('selected');
		$(a).removeAttr('style');
		return $(a).attr('href').indexOf(title) > -1;
	});
	$(selectedlink[0]).parent('li').addClass('selected');
	if ($(selectedlink[0]).parent('li').parent('.submore').length > 0) {
		$(selectedlink[0]).parent('li').parent('.submore').show();
		$(selectedlink[0]).parent('li').parent('.submore').parent('li').find('.title').css({
			'border-left': '3px solid #333 ',
			'background': '#f3f3f3 url("images/morearrow-up.png")',
			'background-repeat': "no-repeat",
			'background-position': "200px center"
		});
	}
	else {
		$(selectedlink[0]).parent('li').parent('.submore').hide();
		$(selectedlink[0]).parent('li').parent('.submore').parent('li').find('.title').css({
			'border-left': '3px solid #333 ',
			'background': '#f3f3f3 url("images/morearrow.png")',
			'background-repeat': "no-repeat",
			'background-position': "200px center"
		});
		$(selectedlink[0]).css('border-left', '3px solid #333');
	}
};
nav_blur();