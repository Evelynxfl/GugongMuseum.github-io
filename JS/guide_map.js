$(document).ready(function() {
//绑定元素点击事件
$(".map_left_cell2").click(function() {
	//判断对象是显示还是隐藏
	if($(this).children(".map_left_cell3").is(":hidden")){
		//表示隐藏
		if(!$(this).children(".map_left_cell3").is(":animated")) {
			// $(this).children(".map_left_nav3").css('color:pink'); 
			//如果当前没有进行动画，则添加新动画
			$(this).children(".map_left_cell3").animate({
					height: 'show'
				}, 800)
				//siblings遍历div1的元素
				.end().siblings().find(".map_left_cell3").hide(800);
		}
	} else {
		//表示显示
		if(!$(this).children(".map_left_cell3").is(":animated")) {
			// $(this).children(".btn1").css({'transform':'rotate(360deg)'});  
			$(this).children(".map_left_cell3").animate({
					height: 'hide'
				}, 800)
				.end().siblings().find(".map_left_cell3").hide(800);
		}
	}
});

//阻止事件冒泡，子元素不再继承父元素的点击事件
$('.map_left_cell2').click(function(e){
	e.stopPropagation();
});

//点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
$(".map_left_nav3").click(function() {
	//设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
	$(this).addClass("removes").siblings().removeClass("removes");
	//遍历获取所有父菜单元素
	  $(".map_left_nav3").each(function(){
	  		//判断当前的父菜单是否是隐藏状态
	  		if($(this).is(":hidden")){
	  			//如果是隐藏状态则移除其样式
	  			$(this).children(".map_left_nav3").removeClass("removes");
		  		}
		  });
	});
});

window.onload=function(){
	var imgH,
        imgW,
        img = document.getElementById('pic'),
        big=document.getElementById('big');
    big.onclick =  function(){
        imgH=img.height;
        imgW=img.width;
        boxH=box.height; 
        boxW=box.width; 
        img.height = 1188*1.4;
        img.width = 870*1.2;
       }
    small.onclick=function(){
    	imgH=img.height;
        imgW=img.width;
        boxH=box.height; 
        boxW=box.width; 
        img.height = 1188;
        img.width = 870;
    }

  
 
}

 