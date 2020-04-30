---
title: "Graphs"
cover: /images/venice1.jpg
category: "graphs"
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

```js

```

## Sometimes you need to be a little psycho to get what you want.



The future is distrbuted among the "Humans." 
[YveVestalTitan](https://angiechangpagne.com) 