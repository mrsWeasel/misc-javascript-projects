const graph = {
    1 : ['2', '3'],
    2 : ['1', '4', '5'],
    3 : ['1', '5'],
    4 : ['2', '5', '6'],
    5 : ['2', '3', '4', '6'],
    6 : ['4', '5'],
}

const visited = {
    1 : [0, 0],
    2 : [0, 0, 0],
    3 : [0, 0],
    4 : [0, 0, 0],
    5 : [0, 0, 0, 0],
    6 : [0, 0],
}

const allPaths = []

findAdjacents = node => {
    return graph[node]
}

const findAllPaths = (node, end, stack = undefined) => {

    if (!stack) stack = [node]
    
    if (node === end) {
        allPaths.push([...stack])
        stack.pop()
    }

    const adj = findAdjacents(node)
   
    for (i = 0; i <= adj.length; i++) {
        // skip if item has been traversed in current path already
        if (visited[node][i]) continue

        visited[node][i] = 1

        // skip if item is in stack already
        if (stack.indexOf(adj[i]) !== -1) continue
        
        if (i < adj.length) {
            stack.push(adj[i])
        } else {
             // if there are no adjacent items left, remove node from stack
            visited[node] = new Array(adj.length).fill(0)
            stack.pop()
        }

        if (stack.length > 0) findAllPaths(stack[stack.length - 1], end, stack)
    }
}

findAllPaths('1', '6')
console.log(allPaths)