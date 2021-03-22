$(function () {
	gaiBian($('.shouCang1'));
	gaiBian($('.shouCang2'));
	gaiBian($('.shouCang3'));
	gaiBian($('.shouCang4'));
	gaiBian($('.shouCang5'));
	gaiBian($('.shouCang6'));
	gaiBian($('.shouCang7'));
	gaiBian($('.shouCang8'));
	gaiBian($('.shouCang9'));

	gaiBian1($('.faSong1'));
	gaiBian1($('.faSong2'));
	gaiBian1($('.faSong3'));
	gaiBian1($('.faSong4'));
	gaiBian1($('.faSong5'));
	gaiBian1($('.faSong6'));
	gaiBian1($('.faSong7'));
	gaiBian1($('.faSong8'));
	gaiBian1($('.faSong9'));

	gaiBian2($('.xiaZai1'));
	gaiBian2($('.xiaZai2'));
	gaiBian2($('.xiaZai3'));
	gaiBian2($('.xiaZai4'));
	gaiBian2($('.xiaZai5'));
	gaiBian2($('.xiaZai6'));
	gaiBian2($('.xiaZai7'));
	gaiBian2($('.xiaZai8'));
	gaiBian2($('.xiaZai9'));
	function gaiBian(duiXiang) {
		var toggle=true;
		duiXiang.click(function () {
			if (toggle) {
				duiXiang.attr("src","./images/images1/收藏后.png")
				alert("收藏成功！");
				toggle=false;
			}else{
				duiXiang.attr("src","./images/images1/收藏.png")
				toggle=true;
			}
		});
	}
	function gaiBian1(duiXiang) {
		var toggle=true;
		duiXiang.click(function () {
			if (toggle) {
				duiXiang.attr("src","./images/images1/收藏后.png")
				alert("分享成功！");
				toggle=false;
			}else{
				duiXiang.attr("src","./images/images1/收藏.png")
				toggle=true;
			}
		});
	}
	function gaiBian2(duiXiang) {
		var toggle=true;
		duiXiang.click(function () {
			if (toggle) {
				duiXiang.attr("src","./images/images1/收藏后.png")
				alert("下载成功！");
				toggle=false;
			}else{
				duiXiang.attr("src","./images/images1/收藏.png")
				toggle=true;
			}
		});
	}
	var toggle=true;
	$('.gouXuanTu').click(function (argument) {
		if (toggle) {
				$('.gouXuanTu').attr("top","-20px")
				toggle=false;
			}else{
				$('.gouXuanTu').attr("top","0")
				toggle=true;
			}
	})

	window.selectFocus=function (that) {
		$(that).attr("size",5);
	};
	window.selectClick=function (that) {
		$(that).parent().removeAttr('size');
		$(that).parent().blur();
		$(that).parent().children("[selected='selected']").removeAttr('selected');
		$(taht).attr("selecter","");
	}
})
window.onload=function () {
	var box = document.getElementsByClassName("gouXuanTu")[0];
	var flag = true;
	box.onclick = function(){
		if(flag){
			box.style.cssText="top:-20px;";
		}else{
			box.style.cssText="top:0px;";
		}
		flag = !flag;
	}
	
}
