---
title: "Graphs"
cover: /images/venice1.jpg
category: graphs
date: "2020-04-26"
tags:
  - algorithms
  - data structures
  - leet
  - e-leet
  - scheming
  - graph
  - sharkweek
  - goons
---

## Becoming One of The E-Leet: Graphs, DFS, BFS

DFS:

- permuations, paths
- cycles

BFS:

- shortest path
- check levels
- use a Queue
A Tree: an acyclic connected graph with N nodes, N-1 edges, any two vertices have only 1 path

Tree DFS - use a stack(vertical traversal)

1. Post order: left, right, root
2. Inorder: left, root, right
3. Preorder: root, left, right

Tree BFS:
1. Level Order traversal
- use a queue(horizontal traversal)


## The Magic Spell for DFS

The DFS Spell:
1. push to stack
2. pop the top
3. retrieve unvisited neighbors from the top
4. push them to the stack
5. repeat
6. repeat steps 1, 2, 3 while stack is not empty. 

## Pre-Order Traversal

Leet # 144 preorder 

```js
/**
 * @param root Node of a binary tree data structure
 * @return Array of Nodes in a preorder
*/
const preorderTraversal = (root) => {
  const stack = []; //array of tree Nodes
  s.push(root);

  const result= [];

  while(!s.empty()) {
    const currentNode = s.pop(); // s.pop() but as an "array" 
    //remove visited statues
    if(currentNode !== null) {
      result.push(currentNode.value);
      s.push(currentNode.right); //push back on the neighbors of distance K
      s.push(currentNode.left);
    }
  }
  return result;
}

```

## Number Connected Components in Undirected Graph

Leet #323

Use the Spell for DFS/BFS

Use with adjacency lists

```js
/** 
 * @param n components number
 * @param edges array
 * @param start Node on graph
*/
const numberConnectedComponents = (n, start, edges) => {
  const visited = {}; //visiting statue, mappings for node i to true/false
  const adjList = [start,0];

  const stack = []; //dfs stack
  const result = 0;

  //build an adjacency list/matrix
  for(let i = 0; i < edges.length; i++) {
    const edge = edges[i]; //the edges on the current start node
    const from = edge.first;
    const to = edge.second;

    adjList[from].push_back(to);
    adjList[to].push_back(from);
  }

  //dfs on nodes to look for connected components
  for(let i = 0; i < n; i++) {
    if(!visited[i]) {
      result++;
      stack.push(i); //the node i on collection of nodes n

      while(stack.length) {
        const currentNode = stack.pop();
        visited[currentNode] = true;

        for(neighbor : adjList[currentNode]) {
          if(!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
  return result;
}

```

## Number of Islands

Leet # 200

Number of connected components in an undirected graph but with a twist. 

A 1 initiates a grouping of island

We can mutate the grid

```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  var total = 0;
  
  const processIsland = (i, j) => {
    
    if (j < 0 || j >= n || i < 0 || i >= m || grid[i][j] !== 1){
      return;
    }
    else {
      
      grid[i][j] = 0;

      if (i > 0 && grid[i - 1][j]) {
        processIsland(i - 1, j);
      }
      if (i < m - 1 && grid[i + 1][j]) {
        processIsland(i + 1, j);
      }
      if (j > 0 && grid[i][j - 1]) {
        processIsland(i, j - 1);
      }
      if (j < n - 1 && grid[i][j + 1]) {
        processIsland(i, j + 1);
      }
    
      // processIsland(i+1, j);
      // processIsland(i-1, j);
      // processIsland(i, j+1);
      // processIsland(i, j-1);
    }

  };
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        total++;
        processIsland(i, j);
      }
    }
  }
  
  return total;
};

```


## Friend Circles

Leet #547

Find connected components, track visited on a map, cannot mutate the matrix. 


A combination of DFS and BFS... transitive property
- A --> B directive
- B --> C directive

Then 
- A --> C indirective (1 enclosed "circle")

Use an array to track visited(stack) 

Prompt: There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

- Example 1:  Input: 
  [[1,1,0],
 [1,1,0],
 [0,0,1]] 
  Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle. 
The 2nd student himself is in a friend circle. So return 2.

- Example 2:
Input: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
Note:
N is in range [1,200].
M[i][i] = 1 for all students.
If M[i][j] = 1, then M[j][i] = 1.


This Result for Leet #547 got 93% runtime percentile and 100% memory percentile

```js
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  var visited = []; //mapped as 1D array for directive, else indirective
  
  var stack = []; //dfs
  var resultCircles = 0;
  
  for(let i = 0; i < M.length; i++) {
    // visited[i].push([]); //matrix created dynamically, so not to mutate the matrix
    if(!visited[i]) {
      resultCircles++;
      stack.push(i);
      
      while(stack.length) {
        const current = stack.pop();//remove current
        visited[current] = true;
        
        for(let j = 0; j < M[current].length; j++) {
          if(!visited[j] && M[current][j]) {
            stack.push(j);
          }
        }
      }
    }
  }
  return resultCircles;
};

```


## Binary Tree Level Order Traversal(BFS)

Leet #102
Use a Queue

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
    return [];
  }
  var result = [];
  var queue = [];
  
  queue.push(root);
  // let levels = 0;
  
  while(queue.length) {
    
    let level = queue.length;
    
    let temp = [];
    for(let i = 0; i < level; i++) {
      let currentNode = queue.shift();
      temp.push(currentNode.val);
       //unlink and then add the neighbors from the queue
      if(currentNode.left !==null) {
        queue.push(currentNode.left); 
      }
      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      } 
      
      //next level...avicii
    }
    
    result.push(temp);//add current array on the current level for breadth first searching
  }
  
  return result;
  
};

```


## Sometimes you need to push hader to get what you want.


## A Python Level Order Traversal

Leet #102

Done in a few lines like adidas...

```py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if root is None: return []
        q = [[root]]
        for level in q:
          record = []
          for node in level:
            if node.left: record.append(node.left)
            if node.right: record.append(node.right)
          if record: q.append(record)
        return [[x.val for x in level] for level in q]
```


## 01 Matrix

Leet # 542

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]

```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  //if it is a zero itself, the closest zero is itself, so just fill in 0 

  //only care if it is a 1,
  if(!matrix) {
    return;
  }
  //0 is mapped to false, 1 is mapped to true, we are looking for the inverse
  
  // var result = []; do this in place
  // let dist = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let queue = [];

  for(let i = 0; i < rows/2; i++){
    //i is the y(rows) traverasal -y
    // result.push([]);
    //we can iterate though 1/4 of the entire array and do symmetrical comparisons to fill in the result matrix
    for(let j = 0; j < cols/2; j++) {
      let q2 = []; //we are only working through the 2nd quadrant... //first element is value, second is the coordinates
      q2.push(matrix[i][j]); 
      q2.push([i, j]);
      let q1 = []; //quadrant 1 symmetrical
      q1.push(matrix[i][cols-j-1]); 
      q1.push([i, cols-j-1]);
      let q3 = [];
      q3.push(matrix[rows-i-1][j]); 
      q3.push([rows-i-1, j]);
      let q4 = [];
      q4.push(matrix[rows-i-1][cols-j-1]); 
      q4.push([rows-i-1, cols-j-1]);
      //element value, position coordinates
      //is there a way to have all these elements simultaneously using map reduce to check and get the recursive closest distance
      //store each quadrant on a HashMap, with the keys being their quadrants, and have them overlap in the iterator through expanding 
      // let quadrantsMap = { "q1": [...q1], "q2": [...q2], "q3": [...q3], "q4": [...q4] }; //key value is string quarter of the quadrant(eg, q1 q2, q4, q3) and map the value 0 which is mapped to false, or the radial distance to put on their result position matrix for the closest 0
      //if it has not yet encountered a 1 upon symmetrical radial expansion...
      
      if(q1[0]!==0) {
        queue.push(q1);
      }
      if(q2[0]!==0) { 
        queue.push(q2);
      } 
      if(q3[0]!==0) {
        queue.push(q3);
      } 
      if(q4[0]!==0) {
        queue.push(q4);
      }
      // quadrantsMap["q1"] = q1;
      // quadrantsMap["q2"] = q2; //if el is 0, then it is mapped to false, matrix is unaltered
      // quadrantsMap["q3"] = q3;
      // quadrantsMap["q4"] = q4;
//       //now we have queues
//       let qkeys = Object.keys(quadrantsMap);
//       for(let i = 0; i < qkeys.length; i++) {
//         let p = quadrantsMap.keys[i];
//         if(p!==0){
//           queue.push(p);
//        }
//      }
     
      
      //now we store the mapping
      // result[i][j] = quadrantsMap.q2[0]; //if not in the queue, map original 0
      // result[i][cols-j-1] = quadrantsMap.q1[0];
      // result[rows-i-1][j] = quadrantsMap.q3[0];
      // result[rows-i-1][cols-i-1] = quadrantsMap.q4[0];  
      while(queue.length) {
      let current = queue.pop();
      let currentItem = current[0]; //actual value
      let currentPosition = current[1]; //array position
      let currentI = currentPosition[0];
      let currentJ = currentPosition[1];
      let currentExpanse = 1;
      while((currentI+currentExpanse<rows && matrix[currentI+currentExpanse][currentJ]!== 0) || (currentJ+currentExpanse<cols && matrix[currentI][currentJ+currentExpanse]!== 0) || (currentI-currentExpanse>=0 && matrix[currentI-currentExpanse][currentJ]!== 0) || (currentJ-currentExpanse>=0 && matrix[current][currentJ-currentExpanse]!==0 )) {
            currentExpanse++;
          }
      matrix[currentI][currentJ] = currentExpanse;  
  }
    }
    
  return matrix;
  //use symmetry radial level expanse on each 1 element to optimize BFS
  
};
```



The future Internet, distrbuted among the "Humans." 

[YveVestalTitan] (https://angiechangpagne.com) 