//页面加载完毕
$(document).ready(function () {
	//图片轮播
	// var subjectHeaderWheelPlanting = $(".subjectHeaderWheelPlanting");
	// var subjectHeaderImg = $(".subjectHeaderImg");
	// len = subjectHeaderImg.length;
	// first = 0;
	// subjectHeaderImg.hide().eq(0).show(); //隐藏lunboImg 然后显示第一个
	// auto();
	// //变化函数
	// function change(i) {
	// 	subjectHeaderImg.eq(first).fadeOut(1000);
	// 	first = i;
	// 	subjectHeaderImg.eq(first).fadeIn(1000);
	// }
	// function auto() {
	// 	timer = setInterval(function () {
	// 		var x = first;
	// 		x++;
	// 		x %= len;
	// 		change(x);
	// 	}, 6000)
	// }

	// 新轮播
	
	var bannerul=$('.bannerul');

	$('.bannerul').append($($('.bannerli')[0]).clone());
	
	var index=0;
	var len= $('.bannerli').length;
	
	var times=setInterval(()=>{
		index++;
		index%=len;
		Toppho(index);
		
	},5000)
	
	
	function Toppho(num){ 
		var Nowtop=bannerul.position().top;
		Nowtop%=2000;
		
		var Nowpro=setInterval(() => {
			if(num==0){
				clearInterval(Nowpro);
				bannerul.css("top", Nowtop+"px")
			}else if(num==5){
	
				Nowtop-=100;
				bannerul.animate({ top : Nowtop + "px"} ,100)
				if(Nowtop <= -num*400){
					clearInterval(Nowpro);
					bannerul.css("top", Nowtop+"px");
					if(num==5){
						bannerul.animate({ top : 0 + "px"} ,0)
						bannerul.css("top", 0+"px");
						index=0;
					}
					$('.hd ul li').removeClass();
					$('.hd ul li').eq(index).addClass('on');
				}
			}else{
				Nowtop-=100;
				bannerul.animate({ top : Nowtop + "px"} ,100)
				if(Nowtop <= -num*400){
					clearInterval(Nowpro);
					bannerul.css("top", Nowtop+"px");
					$('.hd ul li').removeClass();
					$('.hd ul li').eq(index).addClass('on');
				}
			}   
		}, 100);
	}


	//校园风景轮播
	var shortcut = $('.alpho');
	var cut = $('.phos');
	var cutspeed = 70;
	var cutlength = $('.pho');
	var wid = 150 * cutlength.length;
	cut.append(cut.html());
	function cutscrollUp() {
		var lefts = cut.position().left;
		if (- lefts >= wid) {
			cut.css('left', '0px');
		} else {
			lefts--;
			cut.css('left', lefts + 'px');
		}
	}
	var cutMyMar = setInterval(cutscrollUp, cutspeed)
	shortcut.mouseover(function () { clearInterval(cutMyMar) });
	shortcut.mouseout(function () { cutMyMar = setInterval(cutscrollUp, cutspeed) });
})