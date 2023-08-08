/* session 1/functionsAndModules.js */

//synchronous functions
function main(args) {
  console.log(args);
}

//async functions, ex api calls, file system etc
async function wait(time) {
  await setTimeout(function () {
    return "Thanks for waiting";
  }, 5000);
}

//arrow functions / anonymous functions
() => {
  console.log("Incognito Mode");
};

//visible from other .js files
module.exports = { main, wait };

/* example from another file

const funcs = require("./functionsAndModules.js")
funcs.main()

*/
