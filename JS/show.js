$(function() {
   //代码初始化
   var size=$(".img li").size();
    for (var i = 1; i <= size; i++) {
      var li="<li></li>";
      $(".num").append(li);
    };
    //手动控制轮播效果
    $(".img li").eq(0).show();
    $(".num li").eq(0).addClass("active");
    $(".num li").mouseover(function() {
      $(this).addClass("active").siblings().removeClass("active");
      var index = $(this).index();
      i=index;
      $(".img li").eq(index).fadeIn(1800).siblings().fadeOut(1800);
    })
    //自动
    var i = 0;
    var t = setInterval(move, 1800);
    //核心向左的函数
    function moveLeft() {
      i--;
      if (i == -1) {
         i = size-1;
      }
      $(".num li").eq(i).addClass("active").siblings().removeClass("active");
      $(".img li").eq(i).fadeIn(1800).siblings().fadeOut(1800);
    }
    //核心向右的函数
    function move() {
      i++;
      if (i == size) {
        i = 0;
      }
      $(".num li").eq(i).addClass("active").siblings().removeClass("active");
      $(".img li").eq(i).fadeIn(1800).siblings().fadeOut(1800);
    }
    //定时器的开始与结束
    $(".out").hover(function() {
      clearInterval(t);
    }, function() {
      t = setInterval(move, 1800)
    })

    window.onbeforeunload=function(){
      document.documentElement.scrollTop=0;
      document.body.scrollTop=0;
    }

    var flag=true;
    var go_top=document.getElementById('go_top');
    $(window).scroll(function(){
      var s=$(window).scrollTop();
      if(s>620&&s<30000){
        if(flag){
          go_top.style.display="block";
        }
      }
       if(s<620){
        if(flag){
          go_top.style.display="none";
      }
    }
  })
})


window.onload=function(){
	var spe1=document.getElementById('special1');
	var spe3=document.getElementById('special3');
	var box=document.getElementById('spe_box_all');
	spe1.onclick=function(){
		box.style.marginLeft='0';
	}
	spe3.onclick=function(){
		box.style.marginLeft='-232px';
	}

	var buttomArr=document.getElementsByClassName('out_buttom_cell');
	var boxArr=document.getElementsByClassName('out_box_cell');
	for(var i=0;i<buttomArr.length;i++){
		buttomArr[0].onclick=function(){
				for(var j=0;j<boxArr.length;j++){
					boxArr[j].style.display='none';
					buttomArr[j].style.background='none';
				}
				boxArr[0].style.display='block';
				buttomArr[0].style.cssText='background-image: url(images/images2/out_bottom_cell.png)';
		}
		buttomArr[1].onclick=function(){
				for(var j=0;j<boxArr.length;j++){
					boxArr[j].style.display='none';
					buttomArr[j].style.background='none';
				}
				boxArr[1].style.display='block';
				buttomArr[1].style.cssText='background-image: url(images/images2/out_bottom_cell.png)';
		}
		buttomArr[2].onclick=function(){
				for(var j=0;j<boxArr.length;j++){
					boxArr[j].style.display='none';
					buttomArr[j].style.background='none';
				}
				boxArr[2].style.display='block';
				buttomArr[2].style.cssText='background-image: url(images/images2/out_bottom_cell.png)';
		}
	}	
}