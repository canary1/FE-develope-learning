// JavaScript Document
var eles=['iPhone 6s',
				'华硕笔记本',
				'立白洗衣液',
				'儿童图书套装',
				'书包',
				'肯德基全家桶',
				'自然堂水乳',
				'谢谢参与！',
				'50元充值卡'];

var timer=null;

window.onload=function(){
	var oTitle=document.getElementById('title');
	var oPlay=document.getElementById('play');
	var oStop=document.getElementById('stop');
	var flag=0;
	
	//开始抽奖
	oPlay.onclick=funPlay;
	oStop.onclick=funStop;	
	//鼠标事件
	document.onkeyup=function(ev){
		var oEvent=ev||window.event;
		if(oEvent.keyCode==13){
			if(flag==0){
				funPlay();
				flag=1;	
			}	
			else{
				funStop();
				flag=0;	
			}
		}	
	}	
};
function funPlay(){
	var oTitle=document.getElementById('title');
	var oPlay=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.random(); //生成随机数
		var num=Math.floor(random*eles.length);	//随机数只能是0-1之间的
		oTitle.innerHTML=eles[num];
	},100);	
	oPlay.style.background='#ccc';
}
function funStop(){
	var oPlay=document.getElementById('play');
	oPlay.style.background='#00c';
	clearInterval(timer);	
}