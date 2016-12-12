//数组去重
function unique(arr){
	var result=[];
	var isRepeated;

	for(var i=0;i<arr.length;i++){
		isRepeated=false;
		for(var j=0;j<result.length;j++){
			if(arr[i]==result[j]){
				isRepeated=true;
				break;
			}
		}
		if(!isRepeated){
			result.push(arr[i]);
		}
	}
	return result;
}