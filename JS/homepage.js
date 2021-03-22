$(function () {
	var num=0;
	var btnLeft=$(".btnLeft");
	var btnRight=$(".btnRight");
  	var Id=$("#block1");
  	var oUl=Id.find("ul");
  	var oLi=oUl.find("li");
  	var oLiLen=oLi.length;
  	var curHtml="<div class='cur'></div>"; 
  	Id.append(curHtml);
  	var oCur=$(".cur");
  	// 动态添加小圆点
  	for(var i=0;i<oLiLen;i++){
    	var curA="<span></span>"
    	oCur.append(curA);
	}
  	var oCurSpan=oCur.find("span");
  	var oCurS=oCur.find("span:first");
  	oCurS.addClass('active')
  	// 自动轮播
  	var t=setInterval(function(){
    	num++;
    	lunbo();
  	},4000);
  	// 左箭头按钮
  	btnLeft.on("click",function(){
    	num--;
    	lunbo();
  	})  
   	//右箭头按钮 
  	btnRight.on("click",function(){
    	num++;
    	lunbo();
  	})
  	function lunbo(){
    	if(num==oLiLen){
      	num=0;
    	}
    	oLi.eq(num).fadeIn(2000).siblings().fadeOut(2000);
    	oCurSpan.eq(num).addClass('active').siblings().removeClass('active');
  	}
  	lunbo();

	$("#container li").each(function(){
		$(this).on('mouseenter',function(e){
		   	var e=e||window.event;
		   	var angle=direct(e,this)
		   	mouseEvent(angle,this,'in')
	   	})
	   	$(this).on('mouseleave',function(e){
		   	var e=e||window.event;
		   	var angle=direct(e,this)
		   	mouseEvent(angle,this,'off')
	   	})
   	})
   	function direct(e,o){
	 	var w=o.offsetWidth;
	 	var h=o.offsetHeight;
	 	var top= o.offsetTop;
	 	//包含滚动条滚动的部分
	 	var left= o.offsetLeft;
	 	var scrollTOP=document.body.scrollTop||document.documentElement.scrollTop;
	 	var scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
	 	var offTop=top-  scrollTOP;
	 	var offLeft= left- scrollLeft;
		var ex= (e.pageX-scrollLeft)|| e.clientX;
	 	var ey=(e.pageY-scrollTOP)|| e.clientY;
	 	var x=(ex-offLeft-w/2)*(w>h?(h/w):1);
	 	var y=(ey-offTop-h/2)*(h>w?(w/h):1);
	 	var angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4 //atan2返回的是弧度 atan2(y,x)
	 	var directName=["上","右","下","左"];
	 	return directName[angle];  //返回方向  0 1 2 3对应 上 右 下 左
   	}
   	function mouseEvent(angle,o,d){ //方向  元素  鼠标进入/离开
	   	var w=o.offsetWidth;
	  	var h=o.offsetHeight;
	   	if(d=='in'){
		   	switch(angle){
			   	case '上':
				   	$(o).find("p").css({left:0,top:-h+"px"}).stop(true).animate({left:0,top:0},300)
					setTimeout(function(){
						$(o).find("p a").css({left:'50%',top:-h+"px"}).stop(true).animate({left:'50%',top:'20px'},300)},200)
				   	break;
			   	case '右':
				   	$(o).find("p").css({left:w+"px",top:0}).stop(true).animate({left:0,top:0},300)
				   	setTimeout(function(){
						$(o).find("p a").css({left:w+"px",top:'20px'}).stop(true).animate({left:'50%',top:'20px'},300)},200)
				   	break;
			   	case '下':
				   	$(o).find("p").css({left:0,top:h+"px"}).stop(true).animate({left:0,top:0},300)
				   	setTimeout(function(){
						$(o).find("p a").css({left:'50%',top:h+"px"}).stop(true).animate({left:'50%',top:'20px'},300)},200)
				   	break;
			   	case '左':
				   	$(o).find("p").css({left:-w+"px",top:0}).stop(true).animate({left:0,top:0},300)
				   	setTimeout(function(){
						$(o).find("p a").css({left:-w+"px",top:'20px'}).stop(true).animate({left:'50%',top:'20px'},300)},200)
				   	break;
		   	}
	   	}else if(d=='off'){
		   	switch(angle){
			   	case '上':
					$(o).find("p a").stop(true).animate({left:'50%',top:-h+"px"},300)
				   		setTimeout(function(){
					   		$(o).find("p").stop(true).animate({left:0,top:-h+"px"},300)},200)
				   	break;
			   	case '右':
				   	$(o).find("p a").stop(true).animate({left:w+"px",top:'20px'},300)
				   		setTimeout(function(){
					   		$(o).find("p").stop(true).animate({left:w+"px",top:0},300)},200)
				   	break;
			   	case '下':
				   $(o).find("p a").stop(true).animate({left:'50%',top:h+"px"},300)
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:0,top:h+"px"},300)},200)
				   break;
			   	case '左':
				   $(o).find("p a").stop(true).animate({left:-w+"px",top:'20px'},300)
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:-w+"px",top:0},300)},200)
				   break;
		   }
	   }
   }

})