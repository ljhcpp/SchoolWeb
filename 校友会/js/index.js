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


// 小轮播
var allsma=document.getElementsByClassName("focusbgimg");

var small=0;
function smallnextpeo() {
    for(var j=0;j<allsma.length;j++){
        allsma[j].style.zIndex="-1";
        allsma[j].style.opacity="0";
       
    }
    allsma[small].style.zIndex="0";
    allsma[small].style.opacity="1";
   
    
   

    if(small == allsma.length-1)
        small=0;
    else
        small++;
    

}
var smatime=null;
function smaanimated(){
    setTimeout(function () {
        smallnextpeo();
         smatime=setInterval(function(){
            smallnextpeo();
        },5000);
    
    },0);
}
smaanimated();


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

//历任领导轮播
var scenshortcut=$('.scenalpho');
var scencut = $('.scenphos');
var scencutspeed = 70;
var scencutlength=$('.scenpho');
var scenwid=150*scencutlength.length;
scencut.append(scencut.html());
function scencutscrollUp(){
    var scenlefts=scencut.position().left;
    if(- scenlefts >= scenwid){
        scencut.css('left','0px');
    }else {
        scenlefts--;
        scencut.css('left',scenlefts+'px');
    }
}
var scencutMyMar=setInterval(scencutscrollUp,scencutspeed)
scenshortcut.mouseover(function(){clearInterval(scencutMyMar)});
scenshortcut.mouseout(function(){scencutMyMar=setInterval(scencutscrollUp,scencutspeed)})