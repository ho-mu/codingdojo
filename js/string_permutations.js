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

function perm(word){
	word=word.split('');
	results=[];

	function mutate(chars,next=[]){
		if(chars.length==0){
			results.push(next.toString())
		}
		for(var i=0; i<chars.length; i++){
			chars.push(chars.shift());
			next.push(chars[0]);
			mutate(chars.slice(1));
			next.pop();
		}
	}
	mutate(word);
	return results;
}

console.log(perm("Ray"))