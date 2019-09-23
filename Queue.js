
const Queue = function(){
    this.Colection = [];

    this.print = () =>{
        console.log(this.Colection);
    }
    this.enqueue =(element)=>{
        this.Colection.push(element);
    }
    this.dequeue = () =>{
       let dqu = this.Colection.shift();
       return dqu;
    }
    this.font = () =>{
        return this.Colection[0];
    }
    this.isEmpty = () =>{
        return (Colection.length == 0);
    }
}

let obj = new Queue();
obj.enqueue("a");
obj.enqueue("b");
obj.enqueue("c");
obj.enqueue("d");
obj.print();
obj.dequeue();
//console.log(obj.dequeue());
console.log(obj.font());
obj.print();