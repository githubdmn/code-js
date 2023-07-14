### Table of Contents 

| No. | Questions |
| --- | --------- |
|   | |
| 1 | [What is `libuv`?](#what-is-libuv)|  
| 2 | [What are threads in NodeJS?](#what-are-threads-in-nodejs)|  
| 3 | [What are processes in nodejs?](#what-are-processes-in-nodejs)|
| 4 | [What is nodejs `child_process`?](#what-is-nodejs-child_process)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|
|  | [](#)|


### 1. 
### What is `libuv`?

`libuv` is a multi-platform C library that provides asynchronous event-driven
programming support for building high-performance and scalable network applications.
It's used as a core component in NodeJS runtime to handle I/O operations,
  such as network I/O,
  file system operations, 
  and timers
Non-blockingly and efficently

`libuv` serves as the underlying engine for handling I/O and event-driven 
programming in Node.js. It enables Node.js to efficiently manage asynchronous 
operations, handle large numbers of concurrent connections, and achieve high 
performance.

1. `Event Loop`:
  `libuv` implements an event loop that efficiently manages and dispatches events.
  It allows the applications to handle multiple I/O operations concurrently without
  blocking the executution of othre tasks.

2. `Asynchronous I/O`:
  `libuv` provides an abstraction layer for asynchronous I/O operations, 
  allowing developers to perform I/O operations without blocking the main
  program flow. It uses techniques like non-blocking I/O and asynchronous 
  callbacks to achieve high performance and scalability.
  
3. `Timers and Events`:
 `libuv` offers timer and event handling functionality. It allows developers 
 to schedule timers, set intervals, and listen to various types of events, 
 including network events, file system events, and process events.

4. `Thread Pool`:
  `libuv` includes a thread pool that can be used to perform computationally 
  expensive or blocking operations. It allows certain operations to be 
  offloaded to worker threads, freeing up the event loop for other tasks.

Understanding `libuv` is valuable for Node.js developers as it helps in 
comprehending the inner workings of the Node.js `event loop`, non-blocking I/O, 
and the efficient handling of I/O operations in a multi-platform environment. 
However, for most Node.js developers, interacting with `libuv` directly is not
necessary, as it is abstracted by the Node.js runtime and can be accessed 
through the Node.js APIs.

**[ Back to Top ⬆ ](#table-of-contents)**

### 2. 
### What are threads in NodeJS?

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

1. `Main Thread`: 
  The main thread in Node.js, often referred to as the event loop, is responsible 
  for handling I/O operations, processing JavaScript code, and executing callbacks.
  It operates on a single thread, and the execution of JavaScript is non-blocking, 
  meaning that I/O operations and other asynchronous tasks do not block the execution
  of other code.

2. `Worker Threads`: 
  Worker threads in Node.js allow you to create additional threads for performing 
  CPU-intensive or blocking operations. Each worker thread operates in a separate
  thread, independent of the main event loop thread. Worker threads can execute
  JavaScript code in parallel, leveraging the power of multi-core CPUs.

3. `Use Cases`: 
  Worker threads are useful in scenarios where you have computationally intensive
  tasks that can benefit from parallel execution. This includes tasks like data
  processing, image manipulation, complex calculations, cryptographic operations,
  or any task that could otherwise block the event loop and impact the responsiveness
  of the application.

4. `Communication`: 
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

### 3.
### What are processes in nodejs?

In Node.js, a process refers to an instance of a computer program that is
being executed. 
It is an independent entity with its own memory space, execution environment,
and system resources. 
Node.js provides features to create, manage, and interact with processes.

Here are some key aspects related to processes in Node.js:

1. `Process Object`: 
    Node.js exposes a global process object that provides information and control over
    the current Node.js process. It contains properties and methods to access details 
    such as process ID, command-line arguments, environment variables, exit codes,
    and more.

2. `Process Lifecycle`: 
    A Node.js process has a lifecycle that includes different phases, 
    such as initialization, event loop execution, handling I/O operations,
    executing JavaScript code, and termination. 
    It starts when the Node.js application is launched and continues until it is 
    explicitly terminated or encounters an error.

3. `Process Communicatio`n: 
    Node.js processes can communicate with each other through various mechanisms,  
    including `inter-process communication `(IPC), such as using the `child_process` module, 
    message passing, shared memory, or using external systems like databases or message queues.

4. `Cluster Module`: 
    The Node.js cluster module allows for the creation of `child processes` that 
    share the same server port, enabling the application to utilize multiple CPU 
    cores for handling incoming network requests. This helps improve the overall 
    performance and scalability of the Node.js application.

5. `Process Management`: 
    Node.js provides features for managing processes, such as spawning 
    `child processes`, executing shell commands, and managing standard 
    input/output streams. 
    The `child_process` module in Node.js allows for the creation and 
    control of `child processes`, enabling interaction with external 
    programs or scripts.

6. `Process Signals`: 
  Node.js processes can listen for and respond to signals sent by the operating system.
  Signals, such as `SIGINT` (Ctrl+C), `SIGTERM`, or `SIGUSR1`, can be caught and 
  handled in Node.js applications to perform specific actions, such as clean 
  shutdown or restarting the application.

Processes in Node.js are fundamental for running and managing applications, 
allowing for concurrency, scalability, and efficient utilization of system resources. 
They enable the execution of multiple instances of the Node.js runtime, 
either as standalone applications or as part of a cluster, 
to handle concurrent requests and perform parallel processing tasks.

By leveraging Node.js process management capabilities and features like the 
`child_process` module, developers can extend the functionality of their 
applications, interact with external programs, 
and orchestrate complex workflows involving multiple processes.

**[ Back to Top ⬆ ](#table-of-contents)**

### 4.
### What is nodejs `child_process`?

In Node.js, the `child_process` module is a built-in module that provides functionality 
for creating and interacting with child processes. It allows Node.js applications 
to execute commands or spawn additional processes, enabling communication and 
interaction with external programs or scripts.

The `child_process` module provides several methods and features to work with child processes:

1. `child_process.spawn()`: 
  This method is used to spawn a new child process. It allows you to execute 
  commands or run scripts in a separate process. It returns a `ChildProcess` object 
  that represents the spawned process and provides event-based communication with 
  the `child process`.

2. `child_process.exec()`: 
  This method runs a shell command in a `child process`. It provides a simpler 
  interface compared to `spawn()`, as it uses a shell to execute the command and 
  buffers the resulting output. It is useful for running simple commands and 
  getting the output as a callback.

3. `child_process.execFile()`: 
  Similar to `exec()`, this method runs an executable file in a `child process`. 
  It is useful for running executable files directly, rather than relying 
  on a shell.

4. `child_process.fork()`: 
  This method creates a new Node.js process by forking the current process. 
  It is specifically designed for creating `child processes` that run Node.js 
  modules. The `child process `created using `fork()` has its own V8 instance and 
  can communicate with the parent process through `inter-process communication `(IPC).

5. `Inter-Process Communication (IPC)`: 
  The child_process module supports communication 
  between the parent process and child processes. It allows passing messages, 
  sending data, and establishing event-based communication channels between the 
  parent and child processes.

The `child_process` module is commonly used in scenarios where you need to execute 
external programs, run scripts or commands, perform parallel processing, or 
orchestrate complex workflows involving multiple processes. It provides a way to 
interact with the operating system, execute system commands, and control the 
execution and communication of `child processes`.

Here's an example of using `child_process.spawn()` to execute a command and 
capture its output:

```
const { spawn } = require('child_process');

const child = spawn('ls', ['-l']);

child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

child.stderr.on('data', (error) => {
  console.error(`Error: ${error}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
```

In the example, the `spawn()` method is used to spawn a child process and execute 
the `ls -l` command. The `stdout` and `stderr` streams of the child process are 
listened to capture the output and error messages. The `close event` is used to 
handle when the `child process` exits.

The `child_process` module provides a powerful and flexible way to work with 
`child processes` in Node.js, enabling integration with external tools, 
executing system commands, and orchestrating concurrent processing tasks.

**[ Back to Top ⬆ ](#table-of-contents)**

### 5.
### How are errors handled in asynchronous code?

Handling errors in asynchronous code requires careful consideration to ensure 
errors are properly captured, propagated, and handled. Here are some approaches 
and best practices for error handling in asynchronous code:

1. `Error-First Callbacks`: 
  In traditional Node.js-style callbacks, the first argument of the callback 
  function is reserved for the error object. If an error occurs during the 
  asynchronous operation, it is passed as the first argument to the callback. 
  Developers can check the error object and handle the error accordingly.
  ```
    fs.readFile('file.txt', (err, data) => {
      if (err) {
        // Handle the error
        console.error(err);
        return;
      }
      // Process the data
      console.log(data);
    });

  ```

2. `Promises`:
  Promises provide a more structured and elegant way of handling asynchronous 
  operations. Promises have a `.then()` method to handle successful results and a 
  `.catch()` method to handle errors. When an error occurs, the promise is rejected, 
  and the error is propagated down the promise chain to the nearest `.catch()`.
  ```
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the data
    console.log(data);
  })
  .catch(err => {
    // Handle the error
    console.error(err);
  });
  ```
3. `async/await`:
  The `async` and `await` keywords provide a more synchronous-looking syntax for 
  handling asynchronous code. Error handling in `async/await` is achieved using 
  `try-catch` blocks, where the await expression is wrapped in a try block, and 
  any errors are caught in the catch block.
  ```
    async function getData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        // Process the data
        console.log(data);
      } catch (err) {
        // Handle the error
        console.error(err);
      }
    }
  ```
4. `Unhandled Promise Rejections`:
  It is important to handle or catch all promise rejections to avoid unhandled 
  promise rejection warnings in your application. You can use `.catch()` or 
  `try-catch` to handle unhandled rejections globally.
  ```
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Promise Rejection:', err);
  });
  ```

5. `Error Propagation`:
  When working with multiple layers of asynchronous code, it's essential to 
  properly propagate errors from one layer to the next. This ensures that errors 
  are not silently ignored and can be appropriately handled at higher levels 
  of the application.

6. `Logging`: 
  Logging errors is crucial for debugging and troubleshooting. Use logging 
  mechanisms, such as the console object or dedicated logging libraries, 
  to log errors and relevant information for easier diagnosis and debugging.

**[ Back to Top ⬆ ](#table-of-contents)**

### 6.
### What is `process.nextTick()` used for?

**[ Back to Top ⬆ ](#table-of-contents)**

### 7. 
### What is `event-driven` programming?

Event-driven programming is a programming paradigm that focuses on handling and 
responding to events or changes in a system. It revolves around the concept of 
events, which represent specific occurrences or states that can trigger actions 
or behaviors in the program.

1. `Events`: 
  Events are actions or occurrences that take place within a system. Examples of 
  events include user interactions (clicking a button, pressing a key), network 
  events (receiving data, establishing a connection), system events 
  (timer expiration, file changes), and custom events defined by the application.

2. `Event Handlers`: 
  Event handlers are functions or code blocks that are associated with specific 
  events. They define the behavior or actions to be executed when the corresponding 
  event occurs. Event handlers are registered to listen for events and are triggered 
  automatically when the event occurs.

3. `Event Loop`: 
  The event loop is a central component that continuously listens for events and 
  dispatches them to their corresponding event handlers. It ensures that events 
  are processed in a sequential and non-blocking manner, allowing the program to 
  remain responsive and handle multiple events concurrently.

4. `Event Emitters`: 
  Event emitters are objects that generate events. They provide the mechanism 
  for triggering events and notifying registered event handlers when an event 
  occurs. Event emitters are an essential part of event-driven programming 
  frameworks and libraries.

The `event-driven` programming paradigm is widely used in systems where 
responsiveness, concurrency, and event-based interactions are crucial. 
It is particularly prevalent in graphical user interfaces (GUIs), web development, 
network programming, and real-time applications.

Node.js, for example, is built on an `event-driven` architecture. It utilizes an 
`event loop` and `event-driven` APIs, allowing developers to build scalable and 
highly concurrent applications. `Event-driven` programming in Node.js enables 
efficient handling of I/O operations, such as network requests or file operations, 
without blocking the execution of other code.

By leveraging `event-driven` programming, developers can create systems that 
respond to various events and user interactions in a flexible and reactive manner. 
It promotes loose coupling, modular design, and separation of concerns, as different 
parts of the application can independently listen for and handle events.

**[ Back to Top ⬆ ](#table-of-contents)**

### 8.
### What is `EventEmitter` in NodeJS?

In Node.js, the `EventEmitter` class is a built-in class that provides `event-driven` 
functionality. It serves as the foundation for `event-driven` programming in Node.js 
and allows objects to emit events and handle them through event listeners.

The `EventEmitter` class is a core part of the Node.js events module and provides 
methods to emit events, register event listeners, and manage event subscriptions.

1. `Event Emission`: 
  Objects that inherit from the `EventEmitter` class can emit named events using 
  the `emit()` method. When an event is emitted, all registered event listeners 
  listening for that specific event are invoked.

2. `Event Listeners`: 
  Event listeners are functions or code blocks that are registered to handle 
  specific events. They are attached to an `event emitter` using the `on()` or 
  `addListener()` methods. When an event is emitted, the associated event 
  listeners are executed.

3. `Event Names`: 
  Events in the `EventEmitter` are identified by their names, which are typically 
  strings. Event names are used to register event listeners and emit events.

4. `Multiple Event Listeners`: 
  An `event emitter` can have multiple event listeners attached to the same event. 
  When an event is emitted, all the associated event listeners are invoked 
  sequentially in the order they were registered.
  ```
  const EventEmitter = require('events');

  // Create a new EventEmitter instance
  const emitter = new EventEmitter();

  // Register an event listener for the 'greet' event
  emitter.on('greet', () => {
    console.log('Hello, world!');
  });

  // Emit the 'greet' event
  emitter.emit('greet');
  ```
In the example above, a new `EventEmitter` instance is created using the `EventEmitter` 
class. An event listener is registered for the `'greet' event` using the` on()` method. 
When the `'greet'` event is emitted using the `emit()` method, the associated event
listener is executed, resulting in the output `'Hello, world!'`.

`EventEmitter` is a powerful mechanism in Node.js for building `event-driven` 
applications, handling asynchronous operations, and enabling communication between 
different parts of the codebase. It is widely used in various areas of Node.js 
development, such as networking, streaming, and handling I/O operations.

**[ Back to Top ⬆ ](#table-of-contents)**

### 9.
### Does NodeJS support multi-core computing? How to utilize more than one CPU core?

Node.js supports multi-core computing and provides mechanisms to utilize more 
than one CPU core for improved performance and scalability. By default, Node.js 
runs on a single thread, but you can leverage the following techniques to take 
advantage of multiple CPU cores:

**[ Back to Top ⬆ ](#table-of-contents)**

Describe what a stream is in NodeJS.

**[ Back to Top ⬆ ](#table-of-contents)**

How many types of streams exist in NodeJS?

**[ Back to Top ⬆ ](#table-of-contents)**

What kind of events can be fired by a stream?

**[ Back to Top ⬆ ](#table-of-contents)**

What is piping in NodeJS?

**[ Back to Top ⬆ ](#table-of-contents)**

What is the purpose of `Buffer` class in NodeJS?

**[ Back to Top ⬆ ](#table-of-contents)**

What's the difference between `readFile()` and `createReadStream()` in NodeJS?

**[ Back to Top ⬆ ](#table-of-contents)**

What are basic operational errors in NodeJS?

**[ Back to Top ⬆ ](#table-of-contents)**

What are callbacks? What is the first argument of a callback funciton?

**[ Back to Top ⬆ ](#table-of-contents)**

What is promise and async/await?

**[ Back to Top ⬆ ](#table-of-contents)**

What is callback hell and how can it be fixed?

**[ Back to Top ⬆ ](#table-of-contents)**

What's the difference between NPM and NodeJS core modules?

**[ Back to Top ⬆ ](#table-of-contents)**

What is `package.json` and `package-lock.json`?

**[ Back to Top ⬆ ](#table-of-contents)**

What are exit codes in NodeJS?

**[ Back to Top ⬆ ](#table-of-contents)**

What's the difference between `setTimeout()` and `setInterval()`?

**[ Back to Top ⬆ ](#table-of-contents)**

Explain HTTP.

**[ Back to Top ⬆ ](#table-of-contents)**

What are HTTP methods?

**[ Back to Top ⬆ ](#table-of-contents)**

Which HTTP methods are idempotent?

**[ Back to Top ⬆ ](#table-of-contents)**

Caching strategies.

**[ Back to Top ⬆ ](#table-of-contents)**

Explain CI/CD

**[ Back to Top ⬆ ](#table-of-contents)**

JS iterator

**[ Back to Top ⬆ ](#table-of-contents)**

High order functions

**[ Back to Top ⬆ ](#table-of-contents)**

Hoisting

**[ Back to Top ⬆ ](#table-of-contents)**

SQL normalization and denormalization

**[ Back to Top ⬆ ](#table-of-contents)**

SQL indexing

**[ Back to Top ⬆ ](#table-of-contents)**

SQL Triggers

**[ Back to Top ⬆ ](#table-of-contents)**

SQL Distinct and JOIN

**[ Back to Top ⬆ ](#table-of-contents)**


**[ Back to Top ⬆ ](#table-of-contents)**
