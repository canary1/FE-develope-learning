// JavaScript Document
$(document).ready(function() {
    waterFall();
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
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
            $.each( datas.data, function( index, value ){
                var $oPin = $('<div>').addClass('pin').appendTo( $( "#main" ) );
                var $oBox = $('<div>').addClass('box').appendTo( $oPin );
                $('<img>').attr('src','./images/' + $( value).attr( 'src') ).appendTo($oBox);
            });
            waterFall();
        };
	});
});
function waterFall(){
	var $aBox=$("#main>div");
	var boxWidth=$aBox.eq(0).outerWidth();  //在这里使用jQuery的eq方法获取box的第一个元素，使用outerWidth来获取包括padding、border在内的所有宽度，而width只能获取实际设置的width的值
	var winWidth=$(window).width();  //获取窗口的宽度
	var cols=Math.floor(winWidth/boxWidth);
	
	//设置main的宽度及居中显示
	$("#main").width(boxWidth*cols).css("margin","0 auto");
	//设置图片的自适应显示
	var hArr=[];
	$aBox.each(function(index,value){
		var h = $aBox.eq( index ).outerHeight();
        if( index < cols ){
            hArr[ index ] = h; //第一行中的num个块框

        }else{
            var minH = Math.min.apply( null, hArr );//数组pinHArr中的最小值minH
            var minIndex = $.inArray( minH, hArr );  //获取数组中指定值的索引
            $( value ).css({
                'position': 'absolute',
                'top': minH,
                'left': $aBox.eq( minIndex ).position().left  //或使用minIndex*boxWidth
            });
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            hArr[ minIndex ] += $aBox.eq( index ).outerHeight() ;//更新添加了块框后的列高
        }
	});
	
}
function checkScrollSlide(){
	var $lastBox=$("#main>div").last();
	var boxTop=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var winTop=$(window).height()+ $(window).scrollTop();
	
	return (boxTop<winTop)?true:false;	
}