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
// 焦点轮播
function allbutton(){

    for (var bb = 0; bb < buttons.length; bb++) {

        buttons[bb].className="but";
        buttons[bb].onclick=function(){
            for(var cc=0;cc < buttons.length; cc++){
                buttons[cc].className="but";
            }
            this.className="but on";
            clearInterval(time);
            var myIndex=parseInt(this.getAttribute("index"));
            i=myIndex;
            animated();
        }

    }
    buttons[0].className="but on";

}
allbutton();



//校园风景轮播
var shortcut=$('.alpho');
var cut = $('.phos');
var cutspeed = 70;
var cutlength=$('.pho');
var wid=150*cutlength.length;
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
shortcut.mouseout(function(){cutMyMar=setInterval(cutscrollUp,cutspeed)});


// 顶部文字轮播
var alltext=document.getElementsByClassName("tacks");
var text=0;
function texts() {
    for(var j=0;j<alltext.length;j++){
        alltext[j].style.zIndex="-2";
        alltext[j].style.opacity="0";
    }
    alltext[text].style.zIndex="-1";
    alltext[text].style.opacity="1";
    if(text == alltext.length-1)
        text=0;
    else
        text++;


}
var alltexttime=null;
function alltextanimated(){
    setTimeout(function () {
        texts();
        alltexttime=setInterval(function(){
            texts();
        },5000);

    },0);
}
alltextanimated();
