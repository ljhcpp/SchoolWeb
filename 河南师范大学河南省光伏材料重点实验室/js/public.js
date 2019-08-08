function getThatTime(Time){//获取当前时间
	var year = Time.getFullYear();
	var month = Time.getMonth()+1;
	var day = Time.getDate();
	var week = Time.getDay();
	switch (week) {
    case 0:
        week = "星期日";
        break;
    case 1:
        week = "星期一";
         break;
    case 2:
        week = "星期二";
         break;
    case 3:
        week = "星期三";
         break;
    case 4:
        week = "星期四";
         break;
    case 5:
        week = "星期五";
         break;
    case 6:
        week = "星期六";
	} 
	return {year,month,day,week};
}
$(document).ready(function(){
	//改变顶部时间
	var Time = new Date();
	var time = getThatTime(Time);
	console.log(time);
	$('.year').text(time.year);
	$('.month').text(time.month);
	$('.day').text(time.day);
	$('.week').text(time.week);
})
