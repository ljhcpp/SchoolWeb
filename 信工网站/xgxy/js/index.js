

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


//轮播图轮播
var shortcut=$('.shortcut_l');
var cut = $('.cut-limg');
var cutspeed = 100;
var wid=cut .innerWidth();
cut.append(cut.html());
function cutscrollUp(){
    var lefts=cut.position().left;
    if(- lefts >= wid){
        cut.css('left','0px');
    }else {
        lefts--;
        cut.css('left',lefts+'px');
    }
}
var cutMyMar=setInterval(cutscrollUp,cutspeed)
shortcut.mouseover(function(){clearInterval(cutMyMar)});
shortcut.mouseout(function(){cutMyMar=setInterval(cutscrollUp,cutspeed)})

// <!--新闻滚动-->

var demo=$('.notice-area');
var area = $('.areas');
console.log(area.position().top);
var speed = 100;
var hei=area.innerHeight();
area.append(area.html());
function scrollUp(){
    var top=area.position().top;
    if(- top >= hei){
        area.css('top','0px');
    }else {
        top--;
        area.css('top',top+'px');
    }
}
var MyMar=setInterval(scrollUp,speed)
demo.mouseover(function(){clearInterval(MyMar)});
demo.mouseout(function(){MyMar=setInterval(scrollUp,speed)})

