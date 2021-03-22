$(function(){
  var num=0;
  var btnLeft=$(".prev");
  var btnRight=$(".next");
  var Id=$(".head");
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
  },3000);
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
    oLi.eq(num).fadeIn(1500).siblings(num).fadeOut(1500);
    oCurSpan.eq(num).addClass('active').siblings(num).removeClass('active');
  }
  lunbo();
});

window.onload=function(){
	var lis=document.getElementsByClassName("img1");
	var contains=document.getElementsByClassName("contain");
	var img=document.getElementsByClassName("img");
  var t=document.getElementsByClassName("t");
  var daohang=document.getElementsByClassName("header")[0];
  var nav=document.getElementById("nav1");
  var returnTop=document.getElementById("return");
	show1(contains,lis);
	show2(img,t);
	show3(nav,daohang,returnTop);
}
function show1(contains,lis){
	for(var i=0;i<contains.length;i++){
		lis[i].index = i;
		lis[i].onmouseover=function(){
			lis[this.index].style.opacity="0.95";
		}
		lis[i].onmouseout=function(){
			lis[this.index].style.opacity="1";
		}
		lis[i].onclick=function(){
			for(var i=0;i<contains.length;i++){
				contains[i].style.display="none";
			}
			contains[this.index].style.display="block";
	    }
	}
}
function show2(img,t){
	for(var i=0;i<img.length;i++){
		img[i].index = i;
		t[i].index = i;
		img[i].onmouseenter=function(){
			t[this.index].style.marginTop="195px";
		}
		t[i].onmouseleave=function(){
			t[this.index].style.marginTop="-185px";
		}
	}
}
function show3(nav,daohang,returnTop){
  var H=daohang.offsetHeight;
  window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop;
    // var Y=document.documentElement.scrollTop;
    if(scrollTop>H){
      nav.style.cssText="position:fixed;top=0;display:block;margin:-48px auto;";
    }
    if(scrollTop<H){
      nav.style.cssText="display:none;";
    }
    if(scrollTop>0){
      returnTop.style.display="block";
    }
    if(scrollTop==0){
      returnTop.style.display="none";
    }
    returnTop.onclick=function(){
      document.documentElement.scrollTop=0;
    }
  }
}
