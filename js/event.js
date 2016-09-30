// JavaScript Document
function addEvent(obj,ev,fun){
	if(obj.addEventListener){
		obj.addEventListener(ev,fun,false);	//DOM2级事件处理程序
	}
	else if(obj.attachEvent){
		obj.attachEvent('on'+ev,fun);	//IE事件处理程序
	}
	else{
		obj['on'+ev]=fun;	//DOM0级事件处理程序
	}
}
//为元素删除事件
function removeEvent(obj,ev,fun){
	if(obj.removeEventListener){
		obj.removeEventListener(ev,fun,false);	
	}	
	else if(obj.detachEvent){
		obj.detachEvent('on'+ev,fun);	
	}
	else{
		obj['on'+ev]=null;	
	}
}
//获取事件类型
function getType(ev){
	var oEvent=ev||window.event;
	return oEvent.type;
}
//获取事件的目标元素
function getElement(ev){
	var oEvent=ev||window.event;
	if(oEvent.target){
		return oEvent.target;
	}
	else{
		return oEvent.srcElement;	
	}	
}
//阻止事件冒泡
function stopBubble(ev){
	var oEvent=ev||window.event;
	if(oEvent.stopPropagation){
		oEvent.stopPropagation();	
	}
	else{
		oEvent.cancelBubble=true;	
	}
}
//阻止事件默认行为
function preventDefault(ev){
	var oEvent=ev||window.event;
	if(oEvent.preventDefault){
		oEvent.preventDefault();	
	}
	else{
		oEvent.returnValue=false;	
	}
}
