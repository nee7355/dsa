class Noode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    // insert a new node into the tree
    insert(data){
        const newNode = new Node(data);

        if(this.root === null){
            this.root  =  newNode;
            return;
        }

         //Recursive helper  function

         const insertNode = (node, newNode)=>{
            if(newNode.data < node.data){
                if(node.left===null)  node.right = newNode;
                else insertNode(node.left, newNode);
            }else{
                if(node.right===null) node.right = newNode;
                else  insertNode(node.right, newNode);
            }
         }
         insertNode(this.root, newNode);
    }

    

}