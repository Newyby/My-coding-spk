const connectComponentCount = (graph) => {
  const visited = new Set()
  let count = 0;
  for(let node in graph){
    console.log(visited)
    if(explore(graph, node, visited) === true){
      count += 1;
    }
  }
  return count;
}

const explore = (graph, current, visited) => {
if (visited.has(String(current))) return false;

visited.add(String(current))
for(let neighbour of graph[current]){
  explore(graph, neighbour, visited)
}
return false;
}




const largestComponent = (graph) => {
  const visited = new Set()
  let longest = 0;
  for (let node in graph) {
    console.log(visited)
    const size = exploreSize(graph,node, visited)
    if (size > longest) longest = size
  }
  return longest;
}

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  
  visited.add(node)
  let size = 1;
  for (let neighbour of graph[node]) {
   size += explore(graph, neighbour, visited)
  }
  return size;
}
//better your graph is in json,you //can export it
connectComponentCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
  
})

connectComponentCount({
0: [8, 1, 5],
1: [0],
5: [0,8],
8: [0,5],
2: [3,4],
3: [2,4],
4: [3,2]

})


const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set([nodeA])
  
const queue = [ [nodeA, 0] ]

while (queue.length > 0) {
const[node, distance] = queue.shift()

if(node === nodeB) return distance

for(let neighbour of graph[node]){
  if(!visited.has(neighbour)){
    
  visited.add(neighbour)
queue.push(neighbour,  distance + 1)
}
}
}
return -1
};

const buildGraph = (edges) => {
  const graph = []
  for(let edge of edges){
    const [a, b] = edge
    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)

  }
  return graph;
}

//
const islandCount = (grid) => {
  const visited = new Set()
  let count = 0
  for(let r = 0; r < grid.length; r+= 1){
  for (let c = 0; c < grid[0].length; c += 1 ) {
   if(explore(grid, r, c, visited) === true){
     count += 1
   }
  } 
  }
  
  return count;
}


const explore = (grid, r, c, visited) => {
  const rowInbound = 0 <= r && r < grid.length;
  const columnInbound = 0 <= c && c < grid.length;
if(!rowInbound || !columnInbound) return false 

if (grid[r][c] === 'W') return false
const pos = r + ',' + c
if(visited.has(pos)) return false
visited.add(pos)

explore(grid, r - 1, c, visited)
explore(grid, r + 1, c, visited)
explore(grid, r, c - 1,  visited)
explore(grid, r, c + 1,  visited)


return true

}

//
const minimumIsland = (grid) => {
  const visited = new Set()
  
  let minSize = Infinity
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = explore(grid, r, c, visited)
      if (size > 0 && size < minSize) {
      minSize = size
      }
    }
  }
  
  return minSize;
}


const exploreSize = (grid, r, c, visited) => {
  const rowInbound = 0 <= r && r < grid.length;
  const columnInbound = 0 <= c && c < grid.length;
  if (!rowInbound || !columnInbound) return 0
  
  if (grid[r][c] === 'W') return 0
  const pos = r + ',' + c
  if (visited.has(pos)) return 0
  visited.add(pos)
  
size +=  explore(grid, r - 1, c, visited)
size +=  explore(grid, r + 1, c, visited)
size +=  explore(grid, r, c - 1, visited)
size +=  explore(grid, r, c + 1, visited)
  
  
  return size
  
}