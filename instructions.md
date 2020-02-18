Full Stack: State from Server

    npm run start

----------------------
Challenge #1: Getting started

Getting started is DIFFERENT than previous activities. This is because we have
a full-stack application. This has both back-end code (written in Node.js
variant of JavaScript -- although this could have just as well have been
written in Python, or any other language) and a front-end (written in React)

You must get both the React server AND the Node.js server running at once --
typically this is done in separate terminals or separate tabs.

1. The server.js is node.js code for running a server that keeps track of
messages. In real life, this would be a full Django or Express project, but for
this activity, it's just a very simple server script with no dependencies. To
run it, type the following:

    node server.js

2. The client/ directory contains the react code. In a separate terminal (or
tab), copy the node_modules directory from a previous activity into this
directory, and then get started by running:

    npm run start

You will know everything is working when the messages contained in server.js
being displayed. You should visit localhost:3000 to see everything (while the
server will be running in the "background" at localhost:3001).

Now, look at the source code for App.js, and answer the following question:

1. Can you identify where it retrieves data from the server?
2. Can you identify where it sends data to the server?
3. How does the "Loading" message work?


----------------------
Challenge #2: Make it display loading when sending data

We want it to show Loading when you send a message to the server and are
waiting for the update with the new data.

Hint #1: This only requires 1 addition.


----------------------
Challenge #3: Learn the stars API

Learn through experimentation how the Stars API works:

1. In your browser, try going to http://localhost:3001/get-stars/ -- this is the
"stars" API from our server

2. Now, try going to http://localhost:3001/toggle-star/3

3. In your browser, go again to http://localhost:3001/get-stars/ -- see how one
star got "toggled"?


----------------------
Challenge #4: Move the stars to the backend

Replace the existing state manipulation regarding stars with fetch calls to
this backend.

Hint: You will still be storing stars in state, but the "toggleStars" logic
will be replaced with something much shorter.


----------------------
Advanced Challenge: Research Real-time applications

Right now, you have to refresh to see new messages appear. How might you make
this a real-time chat application? For this advanced challenge, just do the
research into what technologies you'd have to add.

Hint #1: This is not an easy task.
Hint #2: Look up "WebSockets" -- this allows for a two-way TCP stream to be
opened up between the browser and the server.




