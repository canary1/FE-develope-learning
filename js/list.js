// JavaScript Document
window.onload=function(){
	var box=document.getElementById('divselect'),
	    title=box.getElementsByTagName('cite')[0],
	    menu=box.getElementsByTagName('ul')[0],
	    as=box.getElementsByTagName('a'),
        index=-1;
   
    // 点击三角时
    title.onclick=function(event){
      // 执行脚本
	  var oEvent=event||window.event;
	  
	  menu.style.display='block';
	  stopBubble(oEvent);
    }  
    
   // 滑过滑过、离开、点击每个选项时
   for(var i=0;i<as.length;i++){
		as[i].onmouseover=function(){
			this.style.background='#ccc';	
		}  
		as[i].onmouseout=function(){
			this.style.background='';	
		} 
		as[i].onclick=function(e){
			var oEvent=e||window.event;
			
			title.innerHTML='';
			title.innerHTML=this.innerHTML;
			menu.style.display='none';
			stopBubble(oEvent);
		}
	}
      // 执行脚本
	document.onkeyup=function(ev){
		var oEvent=ev||window.event;
		
		for(var i=0;i<as.length;i++){
			as[i].style.background='none';	
		}
		if(oEvent.keyCode==40){
			index++;
			if(index>=as.length){
				index=0;	
			}	
			as[index].style.background='#ccc';
		}
		if(oEvent.keyCode==38){
			index--;
			if(index<0){
				index=as.length-1;	
			}	
			as[index].style.background='#ccc';
		}
		if(oEvent.keyCode==13){
			title.innerHTML=as[index].innerHTML;
			menu.style.display='none';
			stopBubble(oEvent);	
		}
		
	}
   // 点击页面空白处时
   document.onclick=function(e){
	   var oEvent=e||window.event;
	   
		menu.style.display='none';
		stopBubble(oEvent);
	}
 }
