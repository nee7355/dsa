/* Reverse a Linked List
Given the head of a linked list, reverse the list and return the new head. */

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkdeList {
    constructor(){
        this.head = null;
    }

    addData(data){
      const node = new Node(data);
      if(this.head===null) {
        this.head = node;
        return;
      }
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }

    size(){
        if(this.head===null) return 0;

        let size = 0;
        let current = this.head;
        while(current){
            current=current.next;
            size++;
        }

        return size;
    }

    /* Reverse a Linked List
    Given the head of a linked list, reverse the list and return the new head. 
    input - 1 2 3 4 5
    output - 5 4 3 2 1 
    */

    reverseList (node = this.head){
         let prev = null;
         let current = node;
         let next = null;

         while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
         }

         node = prev;

         return node;
         
    }
   /*  Rotate a Linked List
    Given the head of a singly linked list and an integer k, rotate the list to the left by k positions and return the updated head. */

    rotateLinkedList(node = this.head){

      if(!this.head || k===0) return this.head;
      // step 1: find  length 
      let length = 1;
      let tail = this.head;
      while(tail.nex){
        length++;
      }
      // step 2: Normalize k
      k = k % length;
      if(k===0) return this.head;
       
      //step 3: Traverse to (k-1)th node
      let current = this.head;
      for (let i = 1;i<k; i++){
        current = current.next;
      }

      //Step 4: Break the list
      let newHead = current.next;
      current.next = null;

      //step 5: Attach old head at the end
      this.head = newHead;

      return this.head;
    }

}

const list = new LinkdeList();
list.addData(10)
list.addData(20)
list.addData(30)
list.addData(40)
list.addData(50);

console.log(list);
console.log(list.reverseList());