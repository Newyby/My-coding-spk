/**const deptFirstPrint = (graph, source) => {
  const stack = [source]
  while(stack.length > 0){
  const current = stack.pop();
  console.log (current)
  for(let neighbour of graph[current]){
    stack.push(neighbour)
  }
  }
}

**/
/**

const deptFirstPrint = (graph, source) => {
  console.log (source)
  for(let neighbour of graph[source]){
  //console.log (neighbour)
  deptFirstPrint (graph,neighbour)
} 
}
 deptFirstPrint(graph, 'a');
**/
/**
const breatFirstPrint = (graph, source) => {
  const queue = [source]
  while(queue.length > 0){
  const current = queue.shift();
  console.log (current)
  for(let neighbour of graph[current]){
    queue.push(neighbour)
  }
  }
}

**/
/**
const hasPath = (graph, src, dest) => {
  if(src === dest)return true
  for (let neighbour of graph[src]) {
    //console.log (neighbour)
   if(hasPath(graph, neighbour, dest) === true){
     return true
   }
  }
  return false
}

**/
/**

const hasPath = (graph, src, dst) => {
  const queue = [src]
  while (queue.length > 0) {
    const current = queue.shift();
  if(current === dst)return true
    for (let neighbour of graph[current]) {
      queue.push(neighbour)
    }
  }
  return false;
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
  
}
**/
//hasPath(graph, 'a', dest);
//breatFirstPrint(graph, 'a');


const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
  console.log(JSON.stringify (graph))
}

const hasPath = (graph, src, dest, visited ) => {
  if(src === dest)return true;
  if(visited.has(src)) return false
  visited.add(src)
  for(let neighbour of graph[src]){
   if(hasPath(graph, neighbour, dest, visited) === true){
   return true 
   }
  }
  re  
}

const buildGraph = (edges) => {
  const graph = {}
  for(let edge of edges){
    const[a,b] = edge
    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)


  }
  return graph
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']

]

undirectedPath(edges, 'j', 'm')