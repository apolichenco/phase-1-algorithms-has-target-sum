function hasTargetSum(array, target) {
  // Write your algorithm here
  let numbersAddedUp = []
    array.map(number => {
    for (let i = 0; i < array.length; i ++) {
      if (array.indexOf(number) === i);
      else {
      numbersAddedUp += number + array[i]
      }
    } 
  })
  return numbersAddedUp.includes(target)
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
    map through each number and add to other numbers

    find the target from new array
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
