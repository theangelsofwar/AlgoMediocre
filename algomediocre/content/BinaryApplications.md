---
title: "Applying Binary Search Hybrids on Leet Code"
date: "2020-05-05"
category: "FrontEnd"
cover:
tags:
  - binary
---

# Binary Search 
Traditionally used to find particular element in Array, List, Matrix

Preconditions: Sorted already(directional)


# How to Apply Binary Search Hybrids on Leet Code

1. Order-agnostic binary search
2. searching indefinite list
3. search sorted matrix


Q1. Given a sorted array of numbers, find out if a given number key is present in the array.
- We do not know if it is ascending or descending

- Duplicates are possible

Example-1: Input: [1, 2, 3, 4, 5, 6, 7], key = 5, Output: 4
Example-2: Input: [10, 6, 4], key = 10, Output: 0



## Q2. Search an Infinite List

Given an infinite sorted array (or an array with unknown size), find out if a given number key is present in the array.
Write a function to return the index of the key if it is present in the array, otherwise return -1.

Think of a continuous stream of inputs

Example: Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
Output: 6., Explanation: The key is present at index ‘6’ in the array.

Create searchable bounds, starting point, shifting end points

Use an end as the new "mid"


```js
  
```

