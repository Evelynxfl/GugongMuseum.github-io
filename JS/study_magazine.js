window.onload=function(){
	var b1 = document.getElementsByClassName("b1");
	var box= document.getElementsByClassName("box");
	var item= document.getElementById("item");
	var contant = document.getElementsByClassName("contant")[0]; 
    var p = document.getElementsByClassName("p")[0]; 
    var silderWrap = document.getElementsByClassName("silderWrap")[0]; 
	var silder= document.getElementsByClassName("silder")[0];
	var text= document.getElementsByClassName("t");
	showbox(b1,box);
	lunbo(item);
	// lunbo2(text);
	gundongtiao(contant,p,silder,silderWrap);
}
function showbox(b1,box){
	for(var i=0; i<box.length;i++){
		b1[i].index=i;
		b1[i].onclick=function(){
			for(var i=0;i<b1.length;i++){
				box[i].style.display ="none";
			}
			box[this.index].style.display="block";
		}
	}
}
function lunbo(item){
	var i=0;
	setInterval(function(){
		i++;
		item.style.left = -i*1258+"px";
		if(i>=1){
			i=-1;
		}
	},3000);
}
// function lunbo2(text){
// 	setInterval(function(){
// 		for(var j=0; j<text.length;j++){
// 			// text[j].index=j;
// 			for(var j=0;j<text.length;j++){
// 				text[j].style.display ="none";
// 			}
// 			text[j].style.display="block";
// 		}
//     },3000);
// }
function lunbo(item){
	var i=0;
	setInterval(function(){
		i++;
		item.style.left = -i*1258+"px";
		if(i>=1){
			i=-1;
		}
	},3000);
}
function gundongtiao(contant,p,silder,silderWrap){
	var scale = contant.clientHeight / p.clientHeight; 
    var h1 = silderWrap.clientHeight * scale; 
    if (h1 < 50) { 
      h1 = 50; 
    }else if (scale >= 1) { 
      silderWrap.style.display = "none"; 
    }  
    silder.style.height = h1 +"px"; 
	var y = 0; 
    contant.onmousewheel = function(e){ 
	  event.preventDefault();	
      var event1 = event || e 
      if (event1.wheelDelta < 0) { 
        y += 10; 
      }else if (event1.wheelDelta > 0) {  
        y -= 10; 
      } 
      if (y <= 0) { 
        y = 0; 
      } 
      if(y >= silderWrap.clientHeight - silder.clientHeight){ 
        y = silderWrap.clientHeight - silder.clientHeight; 
	  } 
      silder.style.top = y +"px"; 
	  scale = contant.clientHeight / p.clientHeight; 
	  p.style.top = - y / scale +"px"; 
	  console.log("ee");
    } 
}