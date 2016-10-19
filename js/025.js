// JavaScript Document
window.onload=function(){
	waterFall('main','box');
	//页面尾部加载的数据原理是从后台读取，这里为了方便在前台使用json格式传入数据
	var datas={"data":[{"src":"50.jpg"},
						{"src":"51.jpg"},
						{"src":"52.jpg"},
						{"src":"53.jpg"},
						{"src":"54.jpg"},
						{"src":"55.jpg"},
						{"src":"56.jpg"},
						{"src":"57.jpg"},
						{"src":"58.jpg"},
						{"src":"59.jpg"},
						{"src":"60.jpg"},
						{"src":"61.jpg"},
						{"src":"62.jpg"},
						{"src":"63.jpg"},
						{"src":"64.jpg"},
						{"src":"65.jpg"},
						{"src":"66.jpg"},
						{"src":"67.jpg"},
						{"src":"68.jpg"},
						{"src":"69.jpg"},
						{"src":"70.jpg"},
						{"src":"71.jpg"},
						{"src":"72.jpg"},
						{"src":"73.jpg"},
						{"src":"74.jpg"},
						{"src":"75.jpg"},
						{"src":"76.jpg"},
						{"src":"77.jpg"},
						{"src":"78.jpg"},
						{"src":"79.jpg"},
						{"src":"80.jpg"},
						{"src":"81.jpg"},
						{"src":"82.jpg"},
						{"src":"83.jpg"},
						{"src":"84.jpg"},
						{"src":"85.jpg"},
						{"src":"86.jpg"},
						{"src":"87.jpg"},
						{"src":"88.jpg"},
						{"src":"89.jpg"},
						{"src":"90.jpg"},
						{"src":"91.jpg"},
						{"src":"92.jpg"},
						{"src":"93.jpg"},
						{"src":"94.jpg"},
						{"src":"95.jpg"},
						{"src":"96.jpg"},
						{"src":"97.jpg"},]};
	//拖动滚动条实现实时加载的功能
	window.onscroll=function(){
		if(checkScrollSlide){
			var oParent=document.getElementById('main');
			//将数据块加载到页面尾部
			for(var i in datas.data){
				//扩展创建元素
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src='images/'+datas.data[i].src;
				oPic.appendChild(oImg);
			}
			waterFall('main','box');
		}
	};

};
//定义一个函数用于取出所有的box并对其进行样式的设置
function waterFall(parent,className){
	var oParent=document.getElementById(parent);
	var aBox=getByClass(oParent,className);
	//计算页面显示的列数
	var boxWidth=aBox[0].offsetWidth //瀑布流为等宽不等高，所以可以通过获取第一个盒子的宽度来获取所有盒子的宽度
	var winWidth=document.documentElement.clientWidth||document.body.clientWidth;  //获取窗口的宽度
	var cols=Math.floor(winWidth/boxWidth); //计算窗口中的列数
	
	oParent.style.cssText='width:'+boxWidth*cols+'px;margin:0 auto';  //设置main的宽度并使其居中
	//实现图片的自动排序
	var hArr=[];
	
	for(var i=0;i<aBox.length;i++){
		if(i<cols){
			hArr.push(aBox[i].offsetHeight);
		}	
		else{
			var minH=Math.min.apply(null,hArr);  //Math.min()方法只能用于求一串数字中的最小值，而不能用于求数组中的最小值，而apply方法可以求数组中的最小值
			var index=getIndex(hArr,minH);
			
			aBox[i].style.position='absolute';//设置绝对位移
            aBox[i].style.top=minH+'px';  //设置顶部边距
            aBox[i].style.left=aBox[index].offsetLeft+'px';  //设置左边距
			hArr[index]+=aBox[i].offsetHeight;  //改变加了图片的那一列的值：加上新加了的图片的高度
		}
	}
}


//定义一个函数用于根据父元素及其下面的类名获取元素
function getByClass(parent,clsName){
	var eles=parent.getElementsByTagName('*');
	var result=[];
	
	for(var i=0;i<eles.length;i++){
		if(eles[i].className==clsName){
			result.push(eles[i]);
		}	
	}
	return result;	
}
//定义一个函数用于获取指定数组中指定值的索引
function getIndex(arr,val){
    for(var i in arr){
        if(arr[i]==val){
            return i;
        }
    }
}
//定义一个函数用于检测是否具备了加载图片的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');  //获取main元素
	var aBox=getByClass(oParent,'box');  //调用getByClass函数
	var lastBoxH=aBox[aBox.length-1].offsetTop+Math.floor((aBox[aBox.length-1].offsetHeight)/2);   //计算最后一个图片距离顶部的高度
	var scrollH=document.documentElement.scrollTop||document.body.scrollTop+document.documentElement.clientHeight||document.body.clientHeight;  //计算页面滚动的距离
	
	return lastBoxH<scrollH?true:false;  //当最后一个图片距离顶部的高度小于页面滚动距离的时候返回true，即具备加载图片的条件，反之返回false
}
