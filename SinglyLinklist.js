class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

class SLL{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
    push(val){
        var node = new Node(val)
        if(!this.head){
            this.head=node
            this.tail=this.head
        }else{
            this.tail.next=node
            this.tail=node
            
        }
        this.length++;
        return this
    }
    traverse(opr,time){
        var current= this.head
        while(current){
            console.log(current.val)
            current=current.next
        }
        console.log(`******** ${time} ${opr} ******\n`)
    }
    pop(){
        if(!this.head) return undefined
        var current=this.head
        var newTail=current
        while(current.next){
            newTail=current
            current=current.next
        }
        this.tail=newTail
        this.tail.next=null
        this.length--;
        if(this.length===0){
            this.head==null
            this.tail=null
        }
        return current  
    }

    shift(){
        if(!this.head) return undefined
        var currenthead= this.head
        this.head=currenthead.next;
        this.length--
        return currenthead
    }

}

var sll= new SLL()
sll.push("hiiiii")
sll.push("kityyy")
sll.push("how")
sll.push("is")
sll.push("leo")
sll.push("!")
sll.traverse('operation',0)
sll.pop()
sll.traverse('Pop',1)
sll.shift()
sll.shift()
sll.traverse('shift',2)
