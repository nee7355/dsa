class Node{
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
}

//Insert Nodes
const tree = new BinaryTree();
const node = new Node();
tree.root = new Node(10);
tree.root.left = new Node(20);
tree.root.right = new Node(30)
tree.root.left.left = new Node(5);
tree.root.left.right = new Node(20);
tree.root.left.left.left = new Node(40);
// console.log(tree);

// tree traversal
// Inorder left > root > right

function Inorder(node){
    if(node===null) return;
    
    Inorder(node.left);
    console.log(node.dat);
    Inorder(node.right);
}

//preorder root > left > right

function preorder(node){
    if(node===null) return;
    console.log(node.data);
    preorder(node.left);
    preorder(node.right);

}

// postorder  left> right > node 
function postorder(node){
    if(node===null){
        return null;
    }
    postorder(node.left);
    postorder(node.right);
    console.log(node.data)
}

