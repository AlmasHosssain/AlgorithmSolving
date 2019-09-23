
const LinkedList = function(){
    var length = 0;
    var head = null;

    var Node = function(element){
        this.element = element;
        this.next = null;
    }

    this.size = () =>{
        return length;
    }

    this.head = () =>{
        return head;
    };
    
    //Add an iteam at the end of the list 
    this.add = function(element){
        const node = new Node(element);
        if (head === null) {
            head = node;
        }else{
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };
    
    //Remove an iteam 
    this.remove = function(element){
        let currentNode = head;
        let previousNode;

        if (currentNode.element === element ) {
            head = currentNode.next;
        }else{
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }

    this.isEmpty = () =>{
        return length === 0;
    }
    
    //Find the index of specipic data
    this.indexOf = (element) =>{
        let currentNode = head;
        let index = -1;
        while (currentNode) {
                index++;
                if (currentNode.element === element) {
                    return index;
                }else{
                    currentNode = currentNode.next;
                }
        }
        return -1;
    }
    
    //Find the element of specipic index
    this.elementAt = (index) =>{
        let currentNode = head;
        let count = 0;
        while (count<index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };
    
    //Add a node after a given node
    this.addAt = (index,element) =>{
        var node = new Node(element);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if(index>length){
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        }else{
            while (currentIndex<index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    };
    
    //Remove a node after the specipic location
    this.removeAt = (index) =>{
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index < 0 || index >= length ) {
            return null;
        }
        if (index === 0) {
            head = currentNode.next;
        }else{
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }

} 

var obj = new LinkedList();
obj.add("Almas");
obj.add("Hossain");
obj.add("Antar");
obj.add("ICT");
obj.add("JavaScript");
console.log(obj.size());
console.log(obj.removeAt(3));
console.log(obj.elementAt(3));
console.log(obj.size());
console.log(obj.indexOf("Antar"))
