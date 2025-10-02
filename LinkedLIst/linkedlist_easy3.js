// Move Last Element to Front
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkdeList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        if(!data) return;
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
    addLast(data){
        if(!data) return;
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
    // size  of the  list
    size(head = this.head){
        if(!head) return;
        let curr = head;
        let size  = 0;
        while(curr){
            curr = curr.next;
            size++;
        }
        return size;
    }
    // Move Last Element to Front of a Linked List
    moveLastAtFirst(head = this.head){
        if(!head && !head.next) return;
        let prev = null;
        let current = head;
        while(current && current.next){
            prev = current;
            current = current.next;
        }
       
        prev.next = null;
        current.next = this.head;
        this.head = current;    
    }

    printList(head = this.head){
        if(!head) return;
        let list = '';
        let curr  =  head;
        const visited = new Set();
       
        while(curr){
            if(visited.has(curr)){
                list += curr.data + " > ";
                break;
            }

            list += curr.data + " > ";
            visited.add(curr);
            curr = curr.next;
        }

          console.log(list.slice(0, -3));
    }


    // Middle of a Linked List

    linkedMid(head = this.head){
        if(!head) return;
        const length = this.size();
        const mid = Math.floor(length/2);
        let idx = 0;
        let current = head;
        while(idx<mid){
            current = current.next;
            idx++;
        }
        console.log(current.data);
    }
    listMidSlowFastTechniqe(head = this.head){
        if(!head) return;
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow===fast){
                return true 
            }
        }
        return false;
    }

    // Detect Loop in linked list
    detectLoop(head = this.head){
        if(!head) return;
        let slow = head,  fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow===fast){
                return true;
            }
            
        }
        return false;
    }

    //Rotate a Linked List
    rotateLinkedList(k=this.size()){
        if(!this.head) return this.head;

        let length = this.size();
        // if(!k) {k = this.size()};


        if(length===k){
           k = k;
        }else{
           k = k%length;
        }
        if (k === 0) return;
        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }
        tail.next  = this.head;


        let newTail = this.head;
        for(let i=1; i<length-k; i++){
            newTail = newTail.next;
        }

        let newHead = newTail.next;
        newTail.next = null;
        this.head = newHead;
    }

    rotateList (head = this.head){
        if(!head|| !head.next) return;

        let prev = null;
        let curr = this.head;;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    // Pairwise swap elements of a linked list
    pairWiseSwap(head = this.head){
        if(!head || !head.next) return head;

        let prev = null;
        let curr = head;
        head = head.next
        while(curr && curr.next){
            let next = curr.next;
            let nextPair = next.next;
            next.next = curr;
            curr.next = nextPair;

            if(prev){
            prev.next = next;
            }
            prev = curr;
            curr = nextPair;
            }
            this.head  = head;
    }

    splitLinkedList(head = this.head){
        if(!head ||  !head.next) return ;

        let slow = head;
        let fast = head;
        let prev = null;

        let length = this.size();
        let mid  = Math.floor(length/2)
        for(let i = 1;  i<mid; i++){
            prev = slow;
            slow  =  slow.next;
        }

        prev.next = null;
        let head1 = head;
        let head2 =  slow;
        if(prev) prev.next = null;

        return [head1, head2]
    }
}

const list = new LinkdeList();

list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addLast(60);
list.addLast(70);

// list.moveLastAtFirst();
// console.log(list.size())
// list.linkedMid();
// list.listMidSlowFastTechniqe();
// list.rotateLinkedList();
// list.rotateList();
// list.pairWiseSwap();
console.log(list.splitLinkedList());
list.printList();
