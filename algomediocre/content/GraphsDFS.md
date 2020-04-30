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

## Sometimes you need to push hader to get what you want.



The future Internet, distrbuted among the "Humans." 

[YveVestalTitan] (https://angiechangpagne.com) 