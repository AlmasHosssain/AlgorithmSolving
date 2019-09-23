
const Stack = function(){
    this.index = 0;
    this.storage ={};

    //Push the iteam into Stack
    this.push = (value) =>{
      this.storage[this.index] = value;
      this.index++;
    }

    //Pop the item from the Stack
    this.pop = () =>{
        if (this.index == 0) {
            return undefined;
        }

        this.index--;
        let result = this.storage[this.index];
        delete this.storage[this.index];
        return result;
    }

    //Size of the iteam
    this.size = () =>{
        return this.index;
    }
    
    //Peek the top iteam of the list
    this.peek = () =>{
        let lastIteam = this.storage[this.index-1];
        return lastIteam;
    }
   

}

var obj = new Stack();
obj.push(1);
obj.push(2);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.peek());
obj.push("Almas Hossain Antar");
console.log(obj.size());
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.peek());