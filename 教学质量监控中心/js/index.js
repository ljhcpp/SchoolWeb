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
    if(i === all.length-1)
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


//轮播图
var link_text=document.getElementsByClassName("link_text");

var arrlink_text=["link_text1","link_text2","link_text3"];
var ha=1;
function nextpeo_link_text() {
    console.log("1111");
    arrlink_text.unshift(arrlink_text[2]);
    arrlink_text.pop();
    for(let j=0;j<link_text.length;j++){
        link_text[j].className="link_text"+ " " +arrlink_text[j];
    }

    if(ha === link_text.length-1)
        ha=0;
    else
        ha++;
}
var time_link_text=null;
function animated_link_text(){
    setTimeout(function () {
        nextpeo_link_text();
        time_link_text=setInterval(function(){
            nextpeo_link_text();
        },5000);

    },0);
}
animated_link_text();


