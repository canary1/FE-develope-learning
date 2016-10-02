// JavaScript Document
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag=true;//假设目前所有运动都达到了目标值
		for(var attr in json){
			//取当前的属性值
			var cur=0;
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj,attr))*100); //四舍五入为最接近的整数，解决计算机无法准确存储小数的问题
			}
			else{
				cur=parseInt(getStyle(obj,attr));
			}
			//计算缓冲运动速度
			var speed=(json[attr]-cur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			//当达到目标值的时候停止运动
			if(cur!=json[attr]){
				flag=false;
			}
			//否则继续运动
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';  //针对IE浏览器
				obj.style.opacity=(cur+speed)/100;  //针对火狐等其他浏览器
			}
			else{
				obj.style[attr]=cur+speed+'px';
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
				
		}
	},50);	
}
//使用getStyle函数解决offset系列获取边框的问题
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];	//适用于IE浏览器
	}	
	else{
		return getComputedStyle(obj,false)[attr];	//适用于FF等浏览器
	}
}