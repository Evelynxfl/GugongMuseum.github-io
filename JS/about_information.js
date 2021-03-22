
function showdiv()  {
 document.getElementById("show").style.display = "block";
 
  document.getElementById('strHref').innerHTML="收起";
  document.getElementById('strHref').href="javascript:hidediv();";
}
function hidediv() {
   document.getElementById('show').style.display='none';
  document.getElementById('strHref').innerHTML="更多图片新闻";
  document.getElementById('strHref').href="javascript:showdiv();";
}






// 蒙版效果
window.onload = function(){
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

// 下面下拉效果

var btn = document.getElementById('btn')
    var spread = document.getElementById('spread')
    var iSpread = false
    /*高度*/
    var height = spread.scrollHeight
    /*总时间*/
    var time = 420;
    /*间隔*/
    var interval = 8.4
    /*速度*/
    var speed = height/(time/interval)
    /*点击事件*/
    btn.onclick = function (e) {
        btn.disabled = 'disabled'
        if(!iSpread){
            var speeds = 0
            var timer = setInterval(function () {
                speeds += speed
                spread.style.height = speeds + 'px'

                if(parseInt(spread.style.height) >=height){
                    clearTimeout(timer)
                    btn.disabled = ''
                }
            },interval)
            this.innerHTML = '收起'
        }else {
            var speeds = height
            this.innerHTML = '更多资讯内容'
            var timer = setInterval(function () {
                speeds -= speed
                spread.style.height = speeds + 'px'
                if(speeds <= 0){
                    clearTimeout(timer)
                    btn.disabled = ''
                }
            },interval)
        }
        iSpread = !iSpread
    }








        
}