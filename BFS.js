
//Breath-first search

function BFS(graph,root){
    var nodeLen = {};
   
    //Set the distance of each node to infinity
    for (let i = 0; i < graph.length ; i++) {
        nodeLen[i] = Infinity;
    }
    
     //Set the distance of root node to root node to 0
    nodeLen[root] = 0;
    
    //Get the trace of node which has been traversed
    var queue = [root];
    //Get the trace of current node
    var current;

    while (queue.length != 0) {
        current = queue.shift();

        var currentNode = graph[current]; //Get the node which has been added to current node
        var nId = []; //Array of nodes which is connected to the current node
        var id = currentNode.indexOf(1);
        while (id != -1) {
            nId.push(id);
            id = currentNode.indexOf(1, id + 1);
        }
        
        //Update the value of distance
        for(let j = 0; j < nId.length; j++){
            if (nodeLen[nId[j]] == Infinity) {
                nodeLen[nId[j]] = nodeLen[current] + 1;
                queue.push(nId[j]);
            }
        }

    }

    return nodeLen;
};

var bfsAdjacentMatrix = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]

console.log(BFS(bfsAdjacentMatrix,2));
