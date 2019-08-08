//页面加载完毕
$(document).ready(function(){
	//图片轮播
	var subjectHeaderWheelPlanting = $(".subjectHeaderWheelPlanting");
	var subjectHeaderImg = $(".subjectHeaderImg");
	len = subjectHeaderImg.length;	
	first = 0;
	subjectHeaderImg.hide().eq(0).show(); //隐藏lunboImg 然后显示第一个
	auto();
	//变化函数
	function change(i) {
		subjectHeaderImg.eq(first).fadeOut(1000);
		first = i;
		subjectHeaderImg.eq(first).fadeIn(1000);
	}
	function auto() {
		timer = setInterval(function() {
			var x = first;
			x++;
			x %= len;
			change(x);
		}, 6000)
	}
})