/* 21/09/2025 tree exercise */

/* Create a Binary Tree with 5 nodes and print it using:
Inorder traversal
Preorder traversal
Postorder traversal */

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
   
    insertNode(data){
        
        const newNode = new Node(data);
        if(this.root===null){
            this.root = newNode;
            return;
        }
        let queue = [this.root];
        while(queue.length>0){
            let current = queue.shift();
            if(!current.left){
                current.left = newNode;
                break;
            }else{
                queue.push(current.left);
            }

            if(!current.right){
                current.right = newNode;
                break;
            }else{
                queue.push(current.right);
            }
        }

    }

    

    // inorder traversal
    inOrder(node = this.root){
        if(!node) return;

        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

    // post order traversal
    preorder(node = this.root){
        if(!node) return;
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    // post order traversal
    postOrder(node = this.root){
        if(!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }
    // height of  the treee
    depthOfTree(node = this.root){
       if(!node) return 0;
       const leftHeight = this.depthOfTree(node.left);
       const rightHeight = this.depthOfTree(node.right);

       return 1 + Math.max(leftHeight, rightHeight);
    }
    // total numberr of nodes
    countNodes(node = this.root){
        if(!node) return 0;

        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
    //count the leaf node
    leafNode(node = this.root){
       if(node===null) return 0;

       if(!node.left && !node.right){
           return 1;
       }
        return this.leafNode(node.left) + this.leafNode(node.right);
    }
    // Find the sum of all nodes in the tree.
    sumOfAllNodes(node = this.root){
        if(!node) return 0;
        const leftSum = this.sumOfAllNodes(node.left)
        const right = this.sumOfAllNodes(node.right);

        return node.data + leftSum + right;
    }

    // Search whether a given value exists in the tree or not.
    findNode(node=this.root, value){
        if(!node) return false;
        
        if(node.data===value) return true;
        return this.findNode(node.left, value) || this.findNode(node.right, value)
    }

    // Find the minimum and maximum value in a tree.
    minMax(node = this.root){
        if(!node) return;
        let current = node;
        let max = 0;
        if(current.data<current.left){
            current = current.left
            max = current.left
        }
        
        const leftMax = this.minMax(node.let)
    }
}

const tree = new BinaryTree();

for(let i = 8; i<20; i++){
    tree.insertNode(i);
}

// console.log("inorder traversal")
// tree.inOrder();
// console.log("preorder traversal")
// tree.preorder();
// console.log("posstorder traversal")
// tree.postOrder();

// console.log(tree.depthOfTree());
// console.log("count of the node is - ", tree.countNodes());

// console.log("Total no of leaf Node - ", tree.leafNode());
// console.log("Sum of all nodes = ", tree.sumOfAllNodes());
console.log("is value exists :", tree.findNode(tree.root, 10));

// Find the height (maximum depth) of a tree.
// Count the total number of nodes in a tree.
// Count the number of leaf nodes (nodes with no children).