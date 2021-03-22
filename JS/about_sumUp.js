window.onload = function(){
    /*获取HTML中的对象*/
    var parent = document.getElementById("parent");
    var img_ul = document.getElementById("img_ul");
    var litCir_ul = document.getElementById("litCir_ul");
    var buttons = document.getElementById("buttons");
    var cLis =litCir_ul.children;

    var len = img_ul.children.length;     //图片张数
    var width = parent.offsetWidth;       //每张图片的宽度
    var rate = 15;                        //一张图片的切换速度，单位为px
    var times = 1;                        //切换速度的倍率
    var gap = 2000;                       //自动切换间隙，单位为毫秒
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
// 以上为轮播图

// 蒙版效果

            var boxArr = getEleByCN("box");
            var imgArr = getEleByCN("img1");
            var maskArr = getEleByCN("mask");

            var wArr = getImgWidth(imgArr);
            var hArr = getImgHeight(imgArr);

            setSize(boxArr,maskArr,wArr,hArr);

            for(var i=0;i<boxArr.length;i++){
                showMask(boxArr[i],maskArr[i]);
                hideMask(boxArr[i],maskArr[i]);
            }
        }
        function showMask(parent,child){
            parent.onmouseover = function(){
                child.style.display = "block";
            }
        }
        function hideMask(parent,child){
            parent.onmouseout = function(){
                child.style.display = "none";
            }
        }


        function setSize(bArr,mArr,wArr,hArr){
            for(var i=0;i<bArr.length;i++){
                bArr[i].style.cssText = "width:" + wArr[i] + "px;height:" + hArr[i] + "px;";
                mArr[i].style.cssText = "width:" + wArr[i] + "px;height:" + hArr[i] + "px;background:rgba(0,0,0,0.15)"; 
            }
        }



        function getImgWidth(imgArr){
            var wArr = [];
            for(var i=0;i<imgArr.length;i++){
                wArr.push(imgArr[i].width);
            }
            return wArr;
        }

        function getImgHeight(imgArr){
            var hArr = [];
            for(var i=0;i<imgArr.length;i++){
                hArr.push(imgArr[i].height);
            }
            return hArr;
        }

        function getEleByCN(classname){
            return document.getElementsByClassName(classname);
        }











