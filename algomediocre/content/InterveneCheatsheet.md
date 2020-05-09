---
title: "Intervene The Interview"
date: "2020-05-07"
category: "Intervene Cheat Sheet"
cover: images/unclesam.jpg
  - javascript
  - systemDesign
  - interview
  - algorithms

---

## Intervene

BFS

Use a queue

DFS

Use a stack

Dynamic Programming: 

Greedy/backtracking: Take or leave

Paths:

Djikstra - priority Queue BFS

Multiple Threading:

semaphore 

Strings: Rolling Stones Hash: Rabin Karp

Polynomial H(k+1) = H(k) - s[0]*P^(k-1)*P + s[k+1]*P^0
given window k and string s
P polynomial

P must be a Prime number = 97





System Design Topics:

requirements
capacity
high level design
components design - Why React
database design - SQL or NoSQL, sketch relations
API design
Messaging Queues
Map Reduce
Long Poll and Push Models
Scaling with Load Balancing
Partition(Shard) data
Replication
Consistency, Latency
Caching
distributed caching
networking

EX 1. TinyURL/Pastebin

Coming up with good encoding or better pre-build keys
eg MD5

collision handling
double hashing- for the same URL, we can use a simplified?
distributed caching or a CDN

Load Balance requests
 consider API throttling, eliminate unused cache


EX2. Instagram Newsfeed

Data partitioning is important
Pull vs Push(via long polling)

apply based on number of followers
separate servers for view and posts for better stability
use timestamp when using the database for photoId
MongoDB auto-generated
For large users you have to use Round Robin Load Balance, this eliminates single points of failure, however, could lead to partial data loss


EX3. Dropbox or Google Drive(Storage, IPFS)

Client and Server
Split files into chunks
Save metadata into chunk
See Merkle and Patricia Hash Trees on Ethereum
Local metadata database(redis cache, memcache, Object Value a document store) - using a CDN distributed based on IP address
Queues(RabbitMQ, Kafka messaging queue) - load handling 
we have the queues interfaced with the load balancers when distributed requests as not to overwhelm the server and cause network fail

Data deduplication- rid of too many multiples

EX 4. Facebook Messenger/ MySpace/IM/DM

poll vs push model with long polling
push notifications 
Dedicated chat servers per user - different ports. 
"look ahead to the future" 
use a sequence number to solve this problem
active status


EX 5. Twitter

prebuild feed
handle celebrities different- eg verified
caching
monitoring


EX 6. Youtube or Netlflix

split files into chunks(time and quality) using MapReduce
Distribution of content
Thumbnail generator/distribution
Store metadata separately(likes, views, comments etc)
CDN

EX 7. Typehead Suggestion(Autocomplete)

Trie data structure, search a data dictionary
Frequency mapping stores nodes with suggestions
Propagate suggestions independently from queries(map reduce)
Client implementation(React) should delay - async/await, promises
delay the request because "user is typing...."
this is just User Interface Effect for smooth transition
Client has a local history

EX 8. API Rate Limiter

DDoS Attack -Direct Domain of Service
Client identifier
Sliding window with counters
HTTP 429


EX 9. Web Crawler

BFS - Use a queue


EX 10. Facebook's Newsfeed

Different feed components stored separately
and then joined
extracting based on friends and merged by date 
merge part of a merge sort(2nd half)

EX 11. Yelp

Quad-Tree -because of the compass, North, South, East and West

EX 12. Uber

Dynamic Quad-Tree
HashMap


EX 13. Ticketmaster/Fandango/Atom Tickets

Relational DB Design
Concurrency handling

EX 14. Vine

EX 15. System Design Tik Tok 


