/*
Question 2: Promises
Given the script file callbacks.js, write a script that does the following:
- Create a method resolvedPromise that is similar to delayedSuccess and resolves a
message after a timeout of 500ms.
- Create a method rejectedPromise that is similar to delayedException and rejects an
error message after a timeout of 500ms.
- Call both promises separately and handle the resolved and reject results and then output
to the console
*/


const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve({ message: "delayed success!" }), 500);
  });

const rejectPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject({ error: "delayed exception!" }), 500);
  });

resolvedPromise().then((msg) => console.log(msg));
rejectPromise().catch((msg) => console.error(msg));
