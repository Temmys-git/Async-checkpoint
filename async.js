// Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

function iterateWithAsyncAwait(array) {
  async function logValue(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000);
    });
  }

  async function iterate() {
    for (let i = 0; i < array.length; i++) {
      await logValue(array[i]);
    }
  }

  iterate();
}   

// Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
function chainedAsyncFunctions() {
  async function logOne() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('One');
        resolve();
      }, 1000);
    });
  }

  async function logTwo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Two');
        resolve();
      }, 1000);
    });
  }

  async function logThree() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Three');
        resolve();
      }, 1000);
    });
  }

  async function runAll() {
    await logOne();
    await logTwo();
    await logThree();
  }

  runAll();
}

// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
async function awaitCall() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred while fetching the data.');
  }
}
