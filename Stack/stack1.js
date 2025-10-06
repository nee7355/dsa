/* 
total operation in the stack
stack always LIFO
    LIFO =  Last in first out
operation of the  stack
push
pop
peek
size
isEmpty
*/


class Stack{
    constructor(maxsize = 100){
         this.items = {};
         this.top = -1 ;
         this.maxsize = maxsize;
    }

    push(element){
        if(this.top>=this.maxsize-1){
            console.log("stack Overflow");
            return;
        }
        this.top++;
        this.items[this.top] = element;
    }

    pop(){
        if(this.isEmpaty()){
            console.log("Stack is Overflow");
            return null;
        }
        const poppedValue  = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return poppedValue;
    }

    peek(){
        if(this.isEmpaty()) return null;

        return this.items[this.top];
    }

    isEmpaty(){
        return this.top === -1
    }

    size(){
        return this.top+1
    }

    printStack(){
        if(this.isEmpaty){
            console.log("Stack is  empty");
        }

        for(let i = 0; i<=this.top; i++){
            console.log(this.items[i]);
        }
    }
}
/* **************************2nd time implementation********************** */
class Stack2{
    constructor(maxsize = 100){
        this.items = {};
        this.top = -1;
        this.maxsize = maxsize;
    }

    // push  the element on the top 
    push(element){
        if((this.top>this.maxsize)) {
            console.log("No more  space");
            return;
        }

        this.top++;
        this.items[this.top] = element;
    }
    pop(){
        if(this.isEmpaty()) return null;
        const poppedValue = this.items[this.top];
        delete this.items[this.top];
        this.top--;
    }
    peek(){

        if(this.isEmpaty()) return null;
        return this.items[this.top];
    }
    size(){

        return this.top + 1;
    }
    isEmpaty(){
        return this.top === -1;
    }

}
const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.push(4);
stack2.push(5);

// stack2.pop();
// console.log(stack2.peek())
// console.log(stack2.size())
console.log(stack2.isEmpaty())

stack2.printStack();