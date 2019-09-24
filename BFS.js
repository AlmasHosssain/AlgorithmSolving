
//Breath-first search

function BFS(graph,root){
    var nodeLen = {};
   
    for (let i = 0; i < graph.length ; i++) {
        nodeLen[i] = Infinity;
    }
    nodeLen[root] = 0;

    var queue = [root];
    var current;

    while (queue.length != 0) {
        current = queue.shift();

        var currentNode = graph[current];
        var nId = [];
        var id = currentNode.indexOf(1);
        while (id != -1) {
            nId.push(id);
            id = currentNode.indexOf(1, id + 1);
        }
        
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
