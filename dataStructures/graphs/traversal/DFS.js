class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v != vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v != vertex1
        )
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result =[]
        const visited ={}
        const adjacencyList= this.adjacencyList
        (function dfs(vertex){
            if(!vertex) return null
            visited[vertex]=true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour)
                }
            });
        })(start)
        return result
    }
}
let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertexg.addEdge("A","B")
g.addVertexg.addEdge("A","C")
g.addVertexg.addEdge("B","D")
g.addVertexg.addEdge("C","E")
g.addVertexg.addEdge("D","E")
g.addVertexg.addEdge("D","F")
g.addVertexg.addEdge("E","F")


        //     A
        //   /    \
        // B        C
        // |        |
        // D--------E
        //   \     /
        //      F 