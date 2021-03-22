window.onload = function(){
    /*获取HTML中的对象*/
    var parent = document.getElementById("w3_pic");
    var img_ul = document.getElementById("img_ul");
    var litCir_ul = document.getElementById("litCir_ul");
    var buttons = document.getElementById("buttons");
    var cLis =litCir_ul.children;

    var len = img_ul.children.length;     //图片张数
    var width = parent.offsetWidth;       //每张图片的宽度
    var rate = 30;                        //一张图片的切换速度，单位为px
    var times = 1;                        //切换速度的倍率
    var gap = 5000;                       //自动切换间隙，单位为毫秒
    var timer = null;                     //初始化一个定时器
    var picN = 0;                         //当前显示的图片下标
    var cirN = 0;                         //当前显示图片的小圆点下标
    var now;
    var then = Date.now();
    var temp;

    /*克隆第一个li到列表末*/
    img_ul.appendChild(img_ul.children[0].cloneNode(true));
    
    for (var i=0; i<len; i++){
        var a_li = document.createElement("li");
        a_li.className = 'quiet';
        litCir_ul.appendChild(a_li);
    }
    litCir_ul.children[0].className = "active";

    function autoRoll(){
        now = Date.now();
        var t = now - then;
        if(t >= gap){
            if(Roll(-(picN+1)*width)){
                picN++;
                cirN++;
                then = Date.now();
            }
            for(var i=0; i<len; i++){
                cLis[i].className = "quiet";
            }
            if(cirN == len){
                cirN = 0;
            }
            cLis[cirN].className = "active";
            if(picN>=len){
                img_ul.style.left = 0;
                picN = 0;
            }
        }
        timer = requestAnimationFrame(autoRoll); 
    }
    autoRoll();

    parent.onmouseover = function(){
        cancelAnimationFrame(timer);
        buttons.style.display = 'block';

    }
    parent.onmouseout = function(){
        timer = requestAnimationFrame(autoRoll);
        buttons.style.display = 'none';
    }

    for(var i=0; i<len; i++){
        cLis[i].index = i;
        cLis[i].onmouseover = function(){
            var flag = 0;
            var rollN = this.index;
            for(var j=0; j<len; j++){
                cLis[j].className = "quiet";
            }
            this.className = "active";
            temp = cirN;                           //当前active点
            picN = cirN = this.index;
            console.log('this.index:'+this.index);
            times = Math.abs(this.index - temp);  //距离上个小圆点的距离
            if(times == 0){
                return;
            }
            console.log('times:'+times);
            rate = rate*times;                    //根据距离改变切换速率
            
            function rollTo(){
                cancelAnimationFrame(img_ul.timer);
                if(Roll(-rollN * width)){
                    flag++;
                    if(flag == times){
                        cancelAnimationFrame(img_ul.timer);
                        rate = 15;
                        return;
                    }
                }
                img_ul.timer = requestAnimationFrame(rollTo);
            }
            rollTo();
        }
    }

    /*上一张*/
    buttons.children[0].onclick = previous;
    /*下一张*/
    buttons.children[1].onclick = next;

    function next(){
        cancelAnimationFrame(img_ul.timer);
        if(Roll(-(picN+1)*width)){
            cancelAnimationFrame(img_ul.timer);
            picN++;
            cirN++;
            for(var i=0; i<len; i++){
                cLis[i].className = "quiet";
            }
            if(cirN == len){
                cirN = 0;
            }
            cLis[cirN].className = "active";
            if(picN>=len){
                img_ul.style.left = 0;
                picN = 0;
            }
            return;
        }
        img_ul.timer = requestAnimationFrame(next);
    }

    function previous(){
        if(picN<=0){
            img_ul.style.left = -len*width + "px";
            picN = len;
        }
        cancelAnimationFrame(img_ul.timer);
        if(Roll(-(picN-1)*width)){
            cancelAnimationFrame(img_ul.timer);
            picN--;
            cirN--;
            for(var i=0; i<len; i++){
                cLis[i].className = "quiet";
            }
            if(cirN < 0){
                cirN = len-1;
            }
            cLis[cirN].className = "active";
            return;
        }
        img_ul.timer = requestAnimationFrame(previous);
    }

    function Roll(distance){
        var speed = img_ul.offsetLeft < distance ? rate:(0-rate);
            img_ul.style.left = img_ul.offsetLeft + speed + "px";
            var leave = distance - img_ul.offsetLeft;
            if(Math.abs(leave)<=Math.abs(speed)){
                img_ul.style.left = distance+"px";
                return 1;                             //切换完一张图片
            }
        return 0;
    }
	
	var flag1 = true;
	var txt1 = document.getElementById("w1_text1");
	var txt2 = document.getElementById("w1_text2");
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var C_button = document.getElementById("C_button");
	C_button.onclick = function(){
		if(flag1){
			txt1.style.display = "none";
			txt2.style.display = "block";
			button1.style.display = "none";
			button2.style.display = "block";
			flag1 = false;
			return flag1;
			console.log(flag1)
			
		}
		if(!flag1){
			txt1.style.display = "block";
			txt2.style.display = "none";
			button1.style.display = "block";
			button2.style.display = "none";
			flag1 = true;
			return flag1;
			console.log(flag1)
		}
	}
	
	
	var date = document.getElementsByClassName("date");
	var txtDate = document.getElementsByClassName("txtDate");
	var flag = 0;  //当前页
	var up = document.getElementById("pressUp");
	var down = document.getElementById("pressDown");
	for(var i=1;i<date.length;i++){
		date[i].style.display = "none";
	}
	for(var i=1;i<date.length;i++){
		txtDate[i].style.display = "none";
	}
	up.onclick = function(){
		if(flag == 0){
			date[flag].style.display = "none";
			date[flag+3].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag+3].style.display = "block";
			flag = 3;
			return flag;
		}
		if(flag == 3){
			date[flag].style.display = "none";
			date[flag-1].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag-1].style.display = "block";
			flag-=1;
			return flag;
		}
		if(flag == 2){
			date[flag].style.display = "none";
			date[flag-1].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag-1].style.display = "block";
			flag-=1;
			return flag;
		}
		if(flag == 1){
			date[flag].style.display = "none";
			date[flag-1].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag-1].style.display = "block";
			flag=0;
			return flag;
		}
	}
	down.onclick = function(){
		if(flag == 0){
			date[flag].style.display = "none";
			date[flag+1].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag+1].style.display = "block";
			flag = 1;
			return flag;
		}
		if(flag == 1){
			date[flag].style.display = "none";
			date[flag+1].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag+1].style.display = "block";
			flag+=1;
			return flag;
		}
		if(flag == 2){
			date[flag].style.display = "none";
			date[flag+1].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag+1].style.display = "block";
			flag+=1;
			return flag;
		}
		if(flag == 3){
			date[flag].style.display = "none";
			date[flag-3].style.display = "block";
			txtDate[flag].style.display = "none";
			txtDate[flag-3].style.display = "block";
			flag=0;
			return flag;
		}
	}
	
}