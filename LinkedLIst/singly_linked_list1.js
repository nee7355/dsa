class Node{
   constructor(data){

      this.data = data
      this.next = null
   }
}

class LinkedList{
   constructor(){
      this.head = null;
   }
     
      addFirst(value){
       const newNode = new Node(value);
       if(!this.head){
         this.head = newNode;
      }else{
           newNode.next = this.head 
           this.head = newNode;
           }
   }

   addLast(value){
      const newNode = new Node(value);
      if(this.head===null){
          this.head = newNode;
    }else{

       let current = this.head;
       while(current.next){
          current = current.next        
     }
     current.next = newNode;
  }
}

}
const list = new LinkedList();
list.addFirst(20);
list.addFirst(30);
list.addFirst(40);
list.addFirst(50);
list.addLast(60);
// list.addLast(20);

console.log(list);











