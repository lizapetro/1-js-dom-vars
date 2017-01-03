function initializeClock(date,format){
	var now=date || new Date();
	format=format || ['hours','minutes','seconds']
	function createDate(now){
		var result='';
		if (format.indexOf('day',0)>-1){
			result=result+'Day:'+now.getDate()+' '
		};
		if (format.indexOf('month',0)>-1){
			result=result+'Month:'+Number(now.getMonth()+1)+' '
		};
		if (format.indexOf('year',0)>-1){
			result=result+'Year:'+now.getFullYear()+' '
		};
		if (format.indexOf('hours',0)>-1){
			result=result+'Hours:'+now.getHours()+' '
		};
		if (format.indexOf('minutes',0)>-1){
			result=result+'Minutes:'+now.getMinutes()+' '
		};
		if (format.indexOf('seconds',0)>-1){
			result=result+'Seconds:'+now.getSeconds()+' '
		};
		return result;
	}
	setInterval(function(){
		document.body.innerHTML=createDate(now);
		now.setTime(now.getTime()+1000);
	},1000);
}

initializeClock();
