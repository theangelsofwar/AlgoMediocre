---
title: "Dynamic Programming"
date: "2020-05-04"
cover: /images/uptick.jpeg
category: ""
tags:
  - DynamicProgramming
  - FunctionalProgramming
---


### Dynamic Program

## Longest Increasing Subsequence

# Strategic Defense Initiative

Bad news, buddy. Crazy Boris had a bit too much vodka last night and when he woke up this morning, instead of the snooze button
on his alarm clock, he ... well, let me put it this way: we've got tons of nuclear missles flying this way. Unfortunately, all that we have is a chart of the altitudes at which the missles are flying, arranged by the order of arrivals. Go for it, buddy.
Good luck.

P.S. Hilly and Bill say hi.

To make things worse, you remeber that SDI has a fatal flaw due to the budget cuts. When SDI sends out missles to intercept the targets, every missle has to fly higher than the previous one. In other words, once you hit a target, the next target can only be among the ones that are flying at higher altitudes than the one you just hit.
For example, if the missles are flying toward you at heights of 1, 6, 2, 3, and 5 (arriving in that order), you can try to intercept the first two, but then you won’t be able to get the ones flying at 2, 3, 5 because they are lower than 6. Your job is to hit as many targets as possible. So you have to quickly write a program to find the best sequence of targets that the flawed SDI program is going to destroy.
Russian war tactics are fairly strange; their generals are stickers for mathematical precision. Their missles will always be fired in a sequence such that there will only be one solution to the problem posed above.
Secretary of Defense
-  @param [...altitudes]

- Array of Altitudes: partially sorted array
- One you go up and intercept targets, cannot go back down in altitudes

Input
The input begins with a single positive integer on a line by itself indicating the number of the cases following, each of them as described below. This line is followed by a blank line, and there is also a blank line between two consecutive inputs.
The input to your program will consist of a sequence of integer altitudes, each on a separate line.
Output
For each test case, the output must follow the description below. The outputs of two consecutive cases will be separated by a blank line.
Output from your program should contain the total number of targets you can hit, followed by the altitudes of those targets, one per line, in the order of their arrivals.
Sample Input
1
1 6 2 3 5
Sample Output
Max hits: 4
1
2
3
5



Induction Hypothesis:
1. Hypothesis(H0): Write down formula describing solution as a mixture of subproblems
2. What is the base case- aim at getting the desired outcome result
3. Build from non base cases, how did you get to the result - find the middle path. 
  - this can be a mathematical relationship/pattern or series of case statements that could lead to the desired outcome

  -in calculus, to get an optimization we take the first derivative for maxima/minima points
  -in computer science/theory, we use bytes 010101 and data structures


Dynamic Programming will usually still yield polynomial runtime based on dimensions(usage of a 2D grid, 3D grid, N-D grid....)


My reasoning:
Basically, you map out an an axis with time based on the altitudes of the missiles. At t=0 you start with the case of taking the hit on missles[i=0] and adding it to hits

Draw an axis of t=time vs altitude. 
It does not have to be a continuous trajectory. 

As you traverse the array, and encounter a new element...

Given space time tradeoffs, we can memoize the current hits at their existing altitudes in a separate array, and map that array with a value store of an array of [index, value=altitude]

- to get the maximum number of its while launching a missile 

- currently the order of the missle altitude is temporal based,

This is basically longest, discontinuous increasig subsequence but for military. 

```js
//not necessarily an ordered array
//but we can only hit the altitudes in order 
//sort of like a 2D array, but instead of the shortest path, we want the maximum hit path, 

//optimizing-dynamic, additions of stock


/**
@param Enemy Missiles Altitudes Array
@return number of hits 
**/

function missilesAltitudes(missiles) {
  //let result = 1; //take the first element
  let missilePath = []; //this is a stack
  missilePath.push([0, missiles[0]]);
  // misslePath item is going to be: [index, altitudeOfMissle]
  //so the parent altitude is the next highest 
  for(let t = 1; t < missiles.length; t++) {
    let altitude = missiles[i]; //altitude at time t=i after the launch of the target
    if(missilePath[result-1][1]<altitude) {
      missilePath.push([i, altitude]); //we can take the current trajectory
      // result++;
    }

    let j = 0;
    let current = misslePath[j];
    let currentMissle = current[1];
    while(currentMissle[0]<t) {
      j++;
      current = misslePath[j];
      currentMissle = current[1];
    }
      //do a cost benefits analysis of adding altitude

  }
  return misslePath.length;
}
```




Interval does not need to be continuous
- this is the same as longest increasing discontinuous subsequence



Idea: Create a Language Translator from different programming languages... highlight the differences that cannot be converted - eg transpile to readable other high level