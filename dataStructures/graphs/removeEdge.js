class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(
            v => v!= vertex2
        )
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(
            v => v!= vertex1
        )
    }
}
let g = new Graph()

g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("aspen")
g.addVertex("Dallas","Tokyo")
g.addVertex("Dallas","Aspen")