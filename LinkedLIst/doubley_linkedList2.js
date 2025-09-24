class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleyLinkedList{
    constructor(){
        this.head = null;
    }
    addFirst(data){
        const node  = new Node(data);
        if(this.head === null){
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    addLast(data){
        const newNode = new Node(data);
        if(this.head===null){
            this.head = newNode;
            return;
        }
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }

   /*  Reverse a Doubly Linked List
    Given the head of a Doubly Linked List, reverse the list in-place so that the first node becomes the last, the second node becomes the second last, and so on. Return the new head of the reve */

    reverseList(node= this.head){
        if(node===null) return;
       
        let current = node;
        let temp = null;

        while(current){
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        node = prev;

        if(temp!= null){
            this.head = temp.prev;
        }

        return this.head;
    }

    
}

const list  = new DoubleyLinkedList();

list.addFirst(10)
list.addFirst(20)
list.addFirst(30)
list.addFirst(40)
list.addFirst(50)
list.addLast(60)
list.addLast(70);

console.log(list)