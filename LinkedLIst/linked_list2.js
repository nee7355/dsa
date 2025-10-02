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

    size(head=this.head){
        if(head===null) return 0;

        let size = 0;
        let current = head;
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

    // Program for Nth node from the end of a Linked List
    // Given a Linked List of M nodes and a number N, find the value at the Nth node from the end of the Linked List. If there is no Nth node from the end, print -1.

    /* there is two method to  findout  nth node from end
     1. One pass method;
     2. Two pass method;
    */
// two pass method
    nthNodeFromEnd(n){
      if(this.head === null) return null;
      const size = this.size();

      if(n>size) return null;
      
      let current = this.head ;
      let idx = 0;
      while(idx<size-n){
        current = current.next;
        idx++;
      }
      return current.data;
    }

    nthNodeFromEnd2(n){
      if(this.head===null) return null;

      let first = this.head;
      let second = this.head;

      for(let i=0;i<n; i++){
        if (first===null) return null;
        first = first.next;
      }
      while(first !== null){
           first = first.next;
           second = second.next;
      }

      return second.data;
    }

    // Delete Last Occurrence

    deleteLastOccurence(key){
      if(!this.head) return;

      let prev = null;
      let current = this.head;

      let lastPrev = null;
      let lastNode = null;
      
      while(current){
        if(current.data===key){
          lastPrev = prev;
          lastNode = current;
        }
        prev = current;
        current = current.next;
      }

      if(!lastNode) return;
      if(!lastPrev){
        this.head = this.head.next;
      }else{
        lastPrev.next = lastNode.next;
      }
    }

    printList(){
      if(!this.head) return;

      let list = '';
      let current  = this.head;
      while(current){
        list += current.data + ' > '
        current  = current.next;

        if(current === this.head) break;
      }

      console.log(list.slice(0, -3));
    }

    // Delete Middle

    deleteMiddle(){
      if(!this.head) return;
      let size = this.size();
      let mid = Math.floor(size/2);

      let idx = 0;
      let current = this.head;
      while(current && idx<mid-1){
        current = current.next;
        idx++;
      }
      current.next = current.next.next;
    }
    // Merge a linked list into another linked list at alternate positions
    mergeAlternatePos(head1, head2){
        if(!head1) return head2;
        if(head2 === null) return head1;
        let head1Current =head1;
        let head2Current = head2;
        
        while(head1Current&& head2Current){

          let head1Next = head1Current.next;
          let head2Next = head2Current.next;

          head1Current.next = head2Current;
          if(head1Next===null) break;
            head2Current.next = head1Next;
            head1Current = head1Next;
            head2Current = head2Next; 
        }

        return head1;
    }
    // Delete Alternate Nodes in a Linked List
    deleteAlternate(head = this.head){
      if(!head || !head.next) return head;
      let curr = head;
      while(curr && curr.next){
        curr.next = curr.next.next;
        curr = curr.next;
      }
    }
    // Rotate a Linked List
    rotateLinkedList2(head = this.head, k = this.size()){
        if(!head || k === 0){
          return head;
        }
        let length = this.size();
        let tail = head;
        while(tail.next){
          tail = tail.next;
        }


        k = k%length;
        if(k===0) return head;

        let current =  head;
        let count = 1;
        while(count<length-k && current){
          current = current.next;
          count++;
        }

        let newHead = current.next;
        current.next = null;

        tail.next = head;

        return newHead;

    }

    // circular list
    cirCularLinkedList( head = this.head){
      if(!head) return;
      let curr = head;
      while(curr.next){
        curr = curr.next;
      }
      curr.next = head;
     
    }
    //Check if a Linked List is Circular
    isCircular(head  = this.head){
        if(!head ) return false;
        let current = head.next;
        while(current && current !== head){
          current = current.next;
        }
        return current === head;
    }

    // Swap Kth nodes from ends
    swapKth(k){
      if(!this.head || k<=0) return this.head;
  
      const length = this.size();
      if(k>length) return this.head;
      if(2*k-1===length) return this.head; // same node no swap

      // find kth from start
      let prevStart = null, kthFromStart = this.head;
      for(let i = 1; i<k; i++){
        prevStart = kthFromStart;
        kthFromStart = kthFromStart.next;
      }

      //find kth from end (length-1)
      let prevEnd = null;
      let kthFromEnd = this.head;
      for(let i = 0; i<length-k+1; i++){
        prevEnd = kthFromEnd;
        kthFromEnd = kthFromEnd.next;
      }

      //ifprev  start exist link it to kthfromEnd
      if(prevStart) prevStart.next  = kthFromEnd;
      if(prevEnd) prevEnd.next = kthFromStart;

      //swap next pointer
      let  temp = kthFromStart.next;
      kthFromStart.next = kthFromEnd.next;
      kthFromEnd.next = temp;

      //update head  if needed
      if(k===1) this.head = kthFromEnd;
      if(k===length) this.head = this.head = kthFromStart;

      return this.head;
    }

    // Intersection Point in Y-Shaped Linked Lists
 
    // Remove Duplicates from Sorted Linked List

    removeDublicateFromSorted(head = this.head){
      if(!head) return ;
      let curr = head;
      while(curr && curr.next){
        if(curr.data== curr.next.data){
          curr.next = curr.next.next;
        }else{
          curr = curr.next;

        }
      }
    }
// Find Nth Node from End

    findNth(n){
      const head = this.head
      if(!this.head) return
      const length = this.size();
      if(n > length || n <= 0) return null;
      let current = head;
      for(let i = 0; i<length - n; i++){
        current = current.next;
      }
 
      return current.data;
    }

    deleteKthNode(k){
      
      if(!this.head) return -1;
      const length = this.size();
      if(k > length || k <= 0) return -1;
      
      if(k===1) {
        this.head = this.head.next;
        return;
      }
      let curr = this.head;
      for(let i = 1; i<k-1; i++){
           curr = curr.next;
      }
      if(curr && curr.next){
        curr.next = curr.next.next;
      }
    }

    // Insert in a Sorted List

    insertInSorted(data){
      const node = new Node(data);
      const head = this.head;
      if(!head) {
          this.head = node;
          return ;
      } 
      if(data< this.head.data){
        node.next = this.head;
        return;
      }
      let current = head;
      while(current.next && current.next.data<data){
         current = current.next;
      }
     
      node.next = current.next;
      current.next = node;
      
    }

    

}

const list = new LinkdeList();
list.addData(10)
list.addData(20)
list.addData(30)
list.addData(40)
list.addData(50);
// list.addData(10)

// const list2 = new  LinkdeList();
// list2.addData(60);
// list2.addData(70);
// list2.addData(80);

// console.log(list.reverseList());

// console.log(list.nthNodeFromEnd2(6))
// list.deleteLastOccurence(10);
// list.deleteMiddle();
// list.mergeAlternatePos(list.head, list2.head);
// list.deleteAlternate();
// console.log(list.rotateLinkedList2());
// list.cirCularLinkedList()
// console.log(list.isCircular())
// list.swapKth(2);
// list.removeDublicateFromSorted();
// console.log(list.findNth(3));
// list.deleteKthNode(2);
list.insertInSorted(13);
list.printList();
