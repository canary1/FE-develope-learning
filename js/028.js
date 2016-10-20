// JavaScript Document
window.onload=function(){
	var oContent=document.getElementById('content');
	var oSearch=document.getElementById('search');
	var oTip=document.getElementById('tips');
	var aLi=oTip.getElementsByTagName('li');
	var tips={"tip":[{"inner":"浙江"},
					{"inner":"手机"},
					{"inner":"手机号码"},
					{"inner":"手机销售"},
					{"inner":"小米手机"},
					{"inner":"食物"},
					{"inner":"最佳食物"},
					{"inner":"饿了么食物"},
					{"inner":"浙江电信"},
					{"inner":"浙江移动"},
					{"inner":"浙江电视"},
					{"inner":"浙江杭州"},
					{"inner":"歌声"},
					{"inner":"中国新歌声"},
					{"inner":"美妙歌声"},
					{"inner":"张靓颖"},
					{"inner":"张靓颖的母亲"}
			]};
	var flag=0;
	
	oContent.onkeyup=function(ev){
		var oEvent=ev||window.event;
		console.log(oEvent.keyCode);
		//按下键的时候先判断是否存在子元素，如果存在先清空在执行后面的操作
		if(oTip.hasChildNodes()){
			oTip.innerHTML='';
		}
		//设置动态提示框的位置
		oTip.style.position="absolute";
		oTip.style.top=oContent.offsetTop+ oContent.offsetHeight+5+'px';
		oTip.style.left=oContent.offsetLeft-5+'px';
		oTip.style.display='block';//设置动态提示框显示
		
		//设置输入框内容输入后返回的值
		for(var i in tips.tip){
			var t=tips.tip[i];
			var value=oContent.value;
			var inner=tips.tip[i].inner;
			if(inner.indexOf(value)!=-1){
				//创建并扩展li标签
				var oLi=document.createElement('li');
				oLi.className='li';
				oTip.appendChild(oLi);
				//创建并扩展li标签
				var oA=document.createElement('a');
				oA.href='#';
				oA.innerHTML= t.inner;
				oA.className='a';
				oLi.appendChild(oA);
				//aLi[0].style.background='#999';
			}
		}
		
		if(oEvent.keyCode==40){
			//aLi[0].style.background='#fff';
			if(flag<aLi.length){
				aLi[flag].style.background='#999';
				flag++;
			}
			else{
				flag=0;	
			}
			
		}
		if(oEvent.keyCode==38){
			if(flag>0){
				aLi[flag].style.background='#999';
				flag--;	
			}	
			else{
				flag=aLi.length-1;	
			}
		}
	}
	
};