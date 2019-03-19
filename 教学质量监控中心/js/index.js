//轮播图
var all=document.getElementsByClassName("bgimg");
var buttons=document.getElementsByClassName('but');
var i=0;
function nextpeo() {
    for(var j=0;j<all.length;j++){
        all[j].style.zIndex="-2";
        all[j].style.opacity="0";
        buttons[j].className="but";
    }
    all[i].style.zIndex="-1";
    all[i].style.opacity="1";
    buttons[i].className="but on";
    if(i == all.length-1)
        i=0;
    else
        i++;
}
var time=null;
function animated(){
    setTimeout(function () {
        nextpeo();
        time=setInterval(function(){
            nextpeo();
        },5000);

    },0);
}
animated();
