
var array = [23,1,2,3,13,45,23,89,450,23,456,12,3,7,7,77];

const BinarySearch = (array,element) =>{
    let high = array.length - 1;
    let low = 0;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((high+low)/2);
        if (array[mid] === element) {
            return array[mid];
        } else if (element < array[mid]) {
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return - 1;
};

let sortedOrder = array.sort((a,b)=>{
    return a - b;
})
console.log(sortedOrder);

let result = BinarySearch(sortedOrder,450);
console.log(result);
