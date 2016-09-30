// JavaScript Document
function getByClass(className,parent){
	var oParent=parent?document.getElementById(parent):document;
	var eles=[];
	var elements=oParent.getElementsByTagName('*');
	
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==className){
			eles.push(elements[i]);	
		}	
	}
	return eles;
}
window.onload=function(){
	var login=document.getElementById('loginPanel');
	var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
	var close=document.getElementById('ui_boxyClose');
	var loginState=document.getElementById('loginState');
	var loginStatePanel=document.getElementById('loginStatePanel');
	var aLi=loginStatePanel.getElementsByTagName('li');
	var loginText=document.getElementById('login2qq_state_txt');
	var loginStateShow=document.getElementById('loginStateShow');
	
	//拖拽效果
	oTitle.onmousedown=fnDown;
	//关闭登录框
	close.onclick=function(){
		login.style.display='none';	
	}
	//状态切换
	loginState.onclick=function(ev){
		var ev=ev||window.event;
		loginStatePanel.style.display='block';	
		stopBubble(ev);
	};
	//鼠标滑过、离开或点击状态列表时
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			this.style.background='#567';	
		}	
		aLi[i].onmouseout=function(){
			this.style.background='';	
		}
		aLi[i].onclick=function(ev){
			var id=this.id;
			var ev=ev||window.event;
			var stateSelectText=getByClass('stateSelect_text',id)[0].innerHTML;
			
			loginText.innerHTML=stateSelectText;
			loginStateShow.className='';
			loginStateShow.className='login-state-show '+id;
			loginStatePanel.style.display='none';
			stopBubble(ev);	
		}
	}
	document.onclick=function(){
		loginStatePanel.style.display='none';
	}
	
	
};
function fnDown(ev){
	var login=document.getElementById('loginPanel');
	var oEvent=ev||window.event;
	var disX=oEvent.clientX-login.offsetLeft;
	var disY=oEvent.clientY-login.offsetTop;
	document.onmousemove=function(ev){
		var oEvent=ev||window.event;
		var x=oEvent.clientX;
		var y=oEvent.clientY;
		var l=x-disX;
		var t=y-disY;
		var winW=document.documentElement.clientWidth||document.body.clientWidth;
		var winH=document.documentElement.clientHeight||document.body.clientHeight;
		var maxW=winW-login.offsetWidth-10;
		var maxH=winH-login.offsetHeight-10;
		if(t<0){
			t=10;	
		}
		else if(t>winH-login.offsetHeight){
			t=maxH;	
		}
		if(l<0){
			l=10;	
		}
		else if(l>winW-login.offsetWidth){
			l=maxW;	
		}
		login.style.top=t+'px';
		login.style.left=l+'px';
			
	};
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;	
	};
};