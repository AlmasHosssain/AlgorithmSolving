
const PriorityQueue = function(){
    
    Collection = [];
    this.print= () =>{
        console.log(Collection);
    }
    this.enqueue = (element) =>{
        if (this.isEmpty()) {
            Collection.push(element)
        }else{
            let added = false;
            for (let i = 0; i< Collection.length; i++) {
                if (element[1] < Collection[i][1]) {
                    Collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                Collection.push(element);
            }
        }
    };

    this.dequeue = () =>{
        let value = Collection.shift();
        return value[0];
    }
    this.size = () =>{
        return Collection.length;
    }
    this.font = () =>{
        return Collection[0];
    }
    this.isEmpty = () =>{
        return (Collection.length == 0);
    }

}

let obj = new PriorityQueue();
obj.enqueue(["Hossain",1]);
obj.enqueue(["Almas",2]);
obj.enqueue(["Ayesha",2])
obj.enqueue(["Antar",3]);
obj.print();
obj.dequeue();
console.log(obj.font());
obj.size();
obj.print();

