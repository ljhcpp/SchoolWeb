

//背景轮播
var all=document.getElementsByClassName("bgimg");
var i=0;
function nextpeo() {
    for(var j=0;j<all.length;j++){
        all[j].style.zIndex="-2";
        all[j].style.opacity="0";
    }
    all[i].style.zIndex="-1";
    all[i].style.opacity="1";

    if(i == all.length-1)
        i=0;
    else
        i++;

}
setTimeout(function () {
    nextpeo();
    var aa=setInterval(nextpeo,7000);

},0)


// //轮播图轮播
// var shortcut=$('.shortcut_l');
// var cut = $('.cut-limg');
// var cutspeed = 100;
// var wid=cut .innerWidth();
// cut.append(cut.html());
// function cutscrollUp(){
//     var lefts=cut.position().left;
//     if(- lefts >= 1700){
//         cut.css('left','0px');
//     }else {
//         lefts--;
//         cut.css('left',lefts+'px');
//     }
// }
// var cutMyMar=setInterval(cutscrollUp,cutspeed)
// shortcut.mouseover(function(){clearInterval(cutMyMar)});
// shortcut.mouseout(function(){cutMyMar=setInterval(cutscrollUp,cutspeed)})

// <!--新闻滚动-->
function timesdate() {
    var arr=[];
    var alltime=$('.alltime');
    var time=$('.time');
    for (var j=0, c=0;c<alltime.length;j++,c++){
        var one=$(alltime[c]).text().substring(0,7)
        var two=$(alltime[c]).text().substring(8,10);
        arr[j]=one;
        j++;
        arr[j]=two;
    }
    console.log(arr);

    for (var h=0,k=0;h<arr.length;h++){
        if(h%2==0){
            $(alltime[k]).html(arr[h]);
        }else{
            $(time[k]).html(arr[h]);
            k++;
        }

    }
}
timesdate();



//定义全局变量
var moveX = 0; //X轴方向上移动的距离
var moveY = 0; //Y轴方向上移动的距离
var stepX = 3; //图片X轴移动的速度
var stepY = 3; //图片Y轴移动的速度
var directionX = 0; //设置图片在X轴方向上的移动方向   0:向右  1:向左
var directionY = 0; //设置图片在Y轴方向上的移动方向   0:向下  1:向上

function changePos() {
    var img = document.getElementById("float"); //获得图片所在层的ID
    var height = document.documentElement.clientHeight; //浏览器的高度
    var width = document.documentElement.clientWidth; //浏览器的宽度
    var imgHeight = document.getElementById("floatImg").height; //飘浮图片的高度
    var imgWidth = document.getElementById("floatImg").width; //瓢浮图片的宽度
    //设置飘浮图片距离浏览器左侧位置
    img.style.left = parseInt(moveX + document.documentElement.scrollLeft) + "px";
    //设置飘浮图片距离浏览器右侧位置
    img.style.top = parseInt(moveY + document.documentElement.scrollTop) + "px";

    //设置图片在Y轴上的移动规律
    if(directionY == 0) {
        //飘浮图片在Y轴方向上向下移动
        moveY += stepY;
    } else {
        //飘浮图片在Y轴方向上向上移动
        moveY -= stepY;
    }
    if(moveY < 0) {
        //如果飘浮图片飘浮到顶端的时候，设置图片在Y轴方向上向下移动
        directionY = 0;
        moveY = 0;
    }
    if(moveY > (height - imgHeight)) {
        //如果飘浮图片飘浮到浏览器底端的时候，设置图片在Y轴方向上向上移动
        directionY = 1;
        moveY = (height - imgHeight);
    }

    //设置图片在X轴上的移动规律
    if(directionX == 0) {
        moveX += stepX;
    } else {
        moveX -= stepX;
    }
    if(moveX < 0) {
        //如果飘浮图片飘浮到浏览器左侧的时候，设置图片在X轴方向上向右移动
        directionX = 0;
        moveX = 0;
    }
    if(moveX > (width - imgWidth)) {
        //如果飘浮图片飘浮到浏览器右侧的时候，设置图片在X轴方向上向左移动
        directionX = 1;
        moveX = (width - imgWidth);
    }
}
setInterval("changePos()", 50);
