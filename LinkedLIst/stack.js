/* 
 stack operation
 type of data list
 it is linked to each  other no

 operation on stack 
 push
 pop
 peek
 last in first out 
 lifo

*/
class Stack{
    #list = [];

    constructor(element){
        // this.#list.push(element)
    }

    push(ele){
      return  this.#list.push(ele);
    }
    pop(){
        if(this.#list.length===0) return;
        return this.#list.pop();
    }
    peak(){
        return this.#list[this.#list.length-1]
    }
    isEmpty(){
        return this.#list.length===0;
    }
    size(){
        return  this.#list.length;
    }

    printList(){
        return [...this.#list]
    }
}

const stack = new Stack();

// console.log(stack.push(20));
// console.log(stack.push(30));
// console.log(stack.push(40));
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.printList());