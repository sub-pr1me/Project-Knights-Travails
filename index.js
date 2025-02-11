function knightMoves(a, b) {
    if (a[0] < 0 || a[0] > 7 || b[0] < 0 || b[0] > 7 ||
        a[1] < 0 || a[1] > 7 || b[1] < 0 || b[1] > 7) return 'Invalid input!';
    let paths = [];    
    const adjList = () => {
        let list = [];
        for (let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
                let vertex = [[i, j]];
                list.push(vertex);
            };
        };
        for (let i=0; i<list.length; i++) {
            if (list[i][0][0]+2 >= 0 && list[i][0][0]+2 <= 7 && list[i][0][1]+1 >= 0 && list[i][0][1]+1 <= 7) {
                list[i].push([list[i][0][0]+2, list[i][0][1]+1]);
            };
            if (list[i][0][0]+1 >= 0 && list[i][0][0]+1 <= 7 && list[i][0][1]+2 >= 0 && list[i][0][1]+2 <= 7) {
                list[i].push([list[i][0][0]+1, list[i][0][1]+2]);
            };
            if (list[i][0][0]-1 >= 0 && list[i][0][0]-1 <= 7 && list[i][0][1]+2 >= 0 && list[i][0][1]+2 <= 7) {
                list[i].push([list[i][0][0]-1, list[i][0][1]+2]);
            };
            if (list[i][0][0]-2 >= 0 && list[i][0][0]-2 <= 7 && list[i][0][1]+1 >= 0 && list[i][0][1]+1 <= 7) {
                list[i].push([list[i][0][0]-2, list[i][0][1]+1]);
            };
            if (list[i][0][0]-2 >= 0 && list[i][0][0]-2 <= 7 && list[i][0][1]-1 >= 0 && list[i][0][1]-1 <= 7) {
                list[i].push([list[i][0][0]-2, list[i][0][1]-1]);
            };
            if (list[i][0][0]-1 >= 0 && list[i][0][0]-1 <= 7 && list[i][0][1]-2 >= 0 && list[i][0][1]-2 <= 7) {
                list[i].push([list[i][0][0]-1, list[i][0][1]-2]);
            };
            if (list[i][0][0]+1 >= 0 && list[i][0][0]+1 <= 7 && list[i][0][1]-2 >= 0 && list[i][0][1]-2 <= 7) {
                list[i].push([list[i][0][0]+1, list[i][0][1]-2]);
            };
            if (list[i][0][0]+2 >= 0 && list[i][0][0]+2 <= 7 && list[i][0][1]-1 >= 0 && list[i][0][1]-1 <= 7) {
                list[i].push([list[i][0][0]+2, list[i][0][1]-1]);
            };
        };        
        return list;
    };
    let list = adjList();
    //////////////////////////////////////////////////////////////////////////
    const areEqual = (arr1, arr2) => {
        for (let i=0; i<arr1.length; i++) {
            if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) return false;
        };
        return true;
    };
    const includes = (arr1, arr2) => {
        for (let item of arr1) {
            if (areEqual(item,arr2)) return true;
        };
        return false;
    };
    const firstElement = (arr) => {
        return arr[0]
    };
    const lastElement = (arr) => {
        return arr[arr.length-1]
    };
    const getEdges = (node) => {
        let edges = [];
        for (let i=0; i<list.length; i++) {
            if (areEqual(list[i][0], node)) {
                for (let j=1; j<list[i].length; j++) {
                    edges.push(list[i][j]);
                };
            };
        };
        return edges;
    };






    console.log('RETURN:');
    return paths;
};

let a = [0, 0];
let b = [3, 3];
console.log(knightMoves(a, b));