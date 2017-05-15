//singly linked list
function SLL(){
	this.data=null
}

function Node(data){
	this.data=data
	this.next=null
}

SLL.prototype.addback = function(data){
	//create node
	newNode = new Node(data)

	//check if there is a head
	if(!this.head){
		this.head=newNode
	}else{
		curr=this.head
		while(curr.next){
			curr=curr.next
		}
		curr.next=newNode
	}
}

SLL.prototype.addfront = function(data){
	newNode = new Node(data)

	if(!this.head){
		this.head=newNode
	}else{
		var curr=this.head
		this.head=newNode
		newNode.next=curr

	}
}

SLL.prototype.reversell=function(){

	//first push the nodes to an array
	var arrOfNodes = []
	var curr=this.head
	while(curr != null){
		arrOfNodes.push(curr)
		curr=curr.next
	}
	
	this.head=arrOfNodes[arrOfNodes.length-1];
	curr=this.head

	for(var x=arrOfNodes.length-1; x>=1; x--){
		curr.next = arrOfNodes[x-1]
		curr=curr.next
	}
		
}

SLL.prototype.display=function(){
	var currNode = this.head
	while(currNode !=null){
		console.log('-->' + currNode.data);
		currNode=currNode.next
	}
}

var mySLL = new SLL()
mySLL.addback('Nick')
mySLL.addback('Kelly')
mySLL.addback('Holly')
mySLL.addfront('Bob-0')
mySLL.addfront(1)
// 1, Bob-o, Nick, Kelly, Holly
//reversed: Holly, Kelly, Nick, Bob-o, 1
//mySLL.reversell()


//console.log(mySLL)
mySLL.reversell()
console.log(mySLL)
// console.log(mySLL)


//console.log(myNewSLL)