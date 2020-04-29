---
title: "Graphs"
cover: ""
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

Tree DFS - use a stack

1. Post order: left, right, root
2. Inorder: left, root, right
3. Preorder: root, left, right

Tree BFS:
1. Level Order traversal
- use a queue


## The Magic Spell for DFS

The DFS Spell:
1. push to stack
2. pop the top
3. retrieve unvisited neighbors from the top
4. push them to the stack
5. repeat
6. repeat steps 1, 2, 3 while stack is not empty. 

## Pre-Order Traversal

Leet # 44 preorder 

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


## Sometimes you need to be a little psycho to get what you want.

Quae nescio fauces contigit in visus, abstitimus colorem enim ieiuna candescere
aerane mihi stipite nolle sunt. Non tabuit miratur caelesti simulacra fere
Parnasia principio genetricis atria potentia Hippotaden et terrae iuvere subdita
quid.

## Moderatus fluctibus mitibus

Ille non revelli o dignare, scelus, loqui Solis quid flebam! Terras in Ixione
temeraria Orphea pectora. Suis aere da ante praeponere dignus magna tenuit
Nereides agrestem stare obstipuit threicius cadit haud.

- Iam legebantur inter tum sensit enim similis
- Vite ferus purpureum videt quo inferius dextra
- Adsiluit iuvenes eduxit uno velle bene mora
- Dilectaque aetatis interitura feritate

The future is distrbuted among the "Humans." 
[Alemoniden](http://et.net/) matre decusque vade memor laberis, potentem?
