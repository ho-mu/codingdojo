function build(str,base=""){
	if(str.length==0){
		console.log(base);
		return;
	}
	for(var i=0; i< str.length; i++){
		var newBase = base + str[i];
		var newStr = str.substring(0,i) + str.substring(i+1, str.length);
		build(newStr, newBase);
	}
}

build("ABCD")