
class Node{
    constructor(data,left=null,right=null){
        this.data = data,
        this.left = left,
        this.right = right
    }
}

class BST{
    constructor(){
        this.root = null
    }

    //Add a data on the tree
    add(data){
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        }else{
            const searchTree = (node) =>{
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if(node !== null){
                        return searchTree(node.left)
                    }
                }else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    //Find the minimum value
    findMin(){
        let current = this.root
       while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    
    //Find the maximum value
    findMax(){
        let current = this.root;
        while (current.right !== null) {
            current = current.right
        } 
        return current.data;
    }
    
    //Find the specific data
    find(data){
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            }else{
                current = current.right
            }

            if (current === null) {
                return null
            }
        }
        return current;
    }
    
    //Find the data is present in the tree or not?
    isPresent(data){
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    
    //Remove the data from the tree
    removeData(data){
        const removeNode = (node,data)=>{
            if (node == null) {
                return null;
            }
            if (data == node.data) {

                //Node has no child
                if (node.left == null && node.right == null) {
                    return null
                }

                //Node has right Child
                if (node.left == null) {
                    return node.right;
                }

                //Node has left Child
                if (node.right == null) {
                    return node.left;
                }

                //Node has two child
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;

                node.right = removeNode(node.right,tempNode.data);
                return node;
            }else if (data < node.data) {
                node.left = removeNode(node.left,data);
                return node;
            }else{
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        this.root = removeNode(this.root,data);
    }
}

let obj = new BST();
obj.add(4);
obj.add(6);
obj.add(7);
obj.add(12);
obj.add(3);
obj.add(22);
obj.add(9);
obj.removeData(7);
console.log(obj.findMax());
console.log(obj.findMin());
console.log(obj.isPresent(7));
console.log(obj.isPresent(12));

