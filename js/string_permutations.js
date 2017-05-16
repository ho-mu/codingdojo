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
			//pops off the first letter and shirts it to the end
			chars.push(chars.shift());
			next.push(chars[0]);
			//slices everything up to that character (this would slice at index 0) | returns what is left
			mutate(chars.slice(1),next);
			next.pop();
		}
	}
	mutate(word);
	return results;
}

console.log(perm("Ray"))