### Table of Contents 

| No. | Questions |
| --- | --------- |
|   | |
| 1 | [What is `libuv`?](#what-is-libuv)|  
| 2 | [What are threads in NodeJS?](#what-are-threads-in-nodejs)|  


### 1. What is `libuv`?

libuv is a multi-platform C library that provides asynchronous event-driven
programming support for building high-performance and scalable network applicaitons.
It's used as a core component in NodeJS runtime to handle I/O operations,
  such as network I/O,
  file system operations, 
  and timers
Non-blockingly and efficently

`libuv` serves as the underlying engine for handling I/O and event-driven 
programming in Node.js. It enables Node.js to efficiently manage asynchronous 
operations, handle large numbers of concurrent connections, and achieve high 
performance.

1. Event Loop:
  `libuv` implements an event loop that efficiently manages and dispatches events.
  It allows the applications to handle multiple I/O operations concurrently without
  blocking the executution of othre tasks.

2. Asynchronous I/O:
  `libuv` provides an abstraction layer for asynchronous I/O operations, 
  allowing developers to perform I/O operations without blocking the main
  program flow. It uses techniques like non-blocking I/O and asynchronous 
  callbacks to achieve high performance and scalability.
  
3. Timers and Events:
 `libuv` offers timer and event handling functionality. It allows developers 
 to schedule timers, set intervals, and listen to various types of events, 
 including network events, file system events, and process events.

4. Thread Pool:
  `libuv` includes a thread pool that can be used to perform computationally 
  expensive or blocking operations. It allows certain operations to be 
  offloaded to worker threads, freeing up the event loop for other tasks.

Understanding libuv is valuable for Node.js developers as it helps in 
comprehending the inner workings of the Node.js event loop, non-blocking I/O, 
and the efficient handling of I/O operations in a multi-platform environment. 
However, for most Node.js developers, interacting with `libuv` directly is not
necessary, as it is abstracted by the Node.js runtime and can be accessed 
through the Node.js APIs.

**[ Back to Top ⬆ ](#table-of-contents)**

### 2. What are threads in NodeJS?

In Node.js, the JavaScript code runs in a single-threaded event loop. 
This means that by default, Node.js operates on a single thread and 
executes JavaScript code in a non-blocking manner. 
However, Node.js can still utilize multiple threads through the use 
of worker threads.

Worker threads allow you to create and manage additional threads in Node.js, 
providing a way to perform computationally intensive or blocking operations 
without blocking the main event loop. Worker threads are part of the Node.js
core modules and can be used to offload CPU-intensive tasks or perform 
parallel processing.

Here are some key points to understand about threads in Node.js:

1. Main Thread: 
  The main thread in Node.js, often referred to as the event loop, is responsible 
  for handling I/O operations, processing JavaScript code, and executing callbacks.
  It operates on a single thread, and the execution of JavaScript is non-blocking, 
  meaning that I/O operations and other asynchronous tasks do not block the execution
  of other code.

2. Worker Threads: 
  Worker threads in Node.js allow you to create additional threads for performing 
  CPU-intensive or blocking operations. Each worker thread operates in a separate
  thread, independent of the main event loop thread. Worker threads can execute
  JavaScript code in parallel, leveraging the power of multi-core CPUs.

3. Use Cases: 
  Worker threads are useful in scenarios where you have computationally intensive
  tasks that can benefit from parallel execution. This includes tasks like data
  processing, image manipulation, complex calculations, cryptographic operations,
  or any task that could otherwise block the event loop and impact the responsiveness
  of the application.

4. Communication: 
  Worker threads in Node.js can communicate with each other and the main thread
  through message passing. They can send and receive messages using a thread-safe
  communication channel, allowing for coordination and exchange of data between 
  threads.

It's important to note that while worker threads enable parallel execution of 
JavaScript code in Node.js, they should be used judiciously and only for tasks 
that truly benefit from multi-threading. In most cases, the single-threaded nature 
of Node.js and the event-driven architecture are sufficient for handling concurrent 
I/O operations efficiently.

The usage of worker threads in Node.js requires a good understanding of 
multi-threaded programming concepts and careful management of shared resources 
and data synchronization.

To work with worker threads in Node.js, you can use the `worker_threads` module, 
which provides the necessary APIs for creating, managing, and communicating with 
worker threads.

```
const { Worker } = require('worker_threads');

// Create a new worker thread
const worker = new Worker('./worker.js');

// Listen for messages from the worker thread
worker.on('message', message => {
  console.log('Received message from worker:', message);
});

// Send a message to the worker thread
worker.postMessage('Hello from main thread!');
```

The code above creates a new worker thread using the `Worker` constructor and
specifies the JavaScript file (`worker.js`) that will be executed in the worker
thread. Messages can be exchanged between the main thread and the worker thread
using `postMessage` and listening for the `'message'` event.

**[ Back to Top ⬆ ](#table-of-contents)**

How does NodeJS handle child threads?

How are errors handled in asynchronous code?

What is `process.nextTick()` used for?

What is `event-driven` programming?

What is `EventEmitter` in NodeJS?

Does NodeJS support multi-core computing? How to utilize more than one CPU core?

Describe what a stream is in NodeJS.

How many types of streams exist in NodeJS?

What kind of events can be fired by a stream?

What is piping in NodeJS?

What is the purpose of `Buffer` class in NodeJS?

What's the difference between `readFile()` and `createReadStream()` in NodeJS?

What are basic operational errors?

What are callbacks? What is the first argument of a callback funciton?

What is promise and async/await?

What is callback hell and how can it be fixed?

What's the difference between NPM and NodeJS core modules?

What is `packeage.json` and `package-lock.json`?

What are exit codes in NodeJS?

What's the difference between `setTimeout()` and `setInterval()`?




