console.log("Json Week2 Homework");

//Movies Exercise
//Fetch And Create badmovies Array
//Create array of bad movies since 2000

fetch(
  `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`
)
  .then((response) => response.json())
  .then((movies) => {
    const badMovies = movies
      .filter((el) => el.rating <= 5)
      .filter((el) => el.year >= 2000);
    console.log("Bad Movies:", badMovies);
  })
  .catch((er) => console.log(er));

// Create function with one Prameter resolveAfter
// Calling this function will return a promise that resolves after
// the resolveAfter seconds has passed.

async function solutionToProblem(resolveAfter) {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
  });
}

solutionToProblem(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});

//Rewrite Functions setTimeoutPromise & getCurrentLocation to promises

function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
}
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//   FETCHING AND WAITING
//   Wait 3 seconds
function delayTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done & Fetched");
      resolve();
    }, 3000);
  });
}
// the async/await method
async function delayTimeFetch() {
  await delayTime();

  const dataApi = await fetch(`https://yesno.wtf/api`);
  const data = await dataApi.json();
  console.log(data);
}
delayTimeFetch();

// 3 steps using promises and .then

function promiseMethod() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(`https://yesno.wtf/api`));
    }, 3000);
  });
}
promiseMethod()
  .then((resp) => resp.json())
  .then((data) => console.log(data));

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

async function translateOneByOne() {
  await moveElement(redBox, { x: 20, y: 300 });
  console.log("Red Box Move");
  await moveElement(blueBox, { x: 400, y: 300 });
  console.log("Blue Box Move");

  await moveElement(greenBox, { x: 400, y: 20 });
  console.log("Green Box Move");
}
translateOneByOne();
function translateAllAtOnce() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
translateAllAtOnce().then((data) => {
  moveElement(redBox, { x: 20, y: 300 });
  moveElement(blueBox, { x: 400, y: 300 });
  moveElement(greenBox, { x: 400, y: 20 });
  console.log("All Boxes are Moved at Once");
});
