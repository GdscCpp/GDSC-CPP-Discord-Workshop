/* session 1/conditionalsAndLoops.js */

/* Conditionals */
if (1 == 1) {
  console.log("1!");
} else {
  console.log("Something is fishy here...");
}

let option = "Taco Bell";
switch (option) {
  case "Wendy's":
    console.log("Chicken Ranch Wrap");
    break;
  case "Del Taco":
    console.log("Epic Cali Bacon Burrito");
    break;
  case "Taco Bell":
    console.log("Chicken Chalupa");
    break;
  default:
    console.log("Don't know what I want to eat");
    break;
}

/* Loops */
while (1 != 2) {
  console.log("Don't run this program if while 1");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
