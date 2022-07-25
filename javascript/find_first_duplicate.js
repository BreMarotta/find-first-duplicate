function findFirstDuplicate(arr) {
  const uniqueNumbers = new Set(); //Set() creates a new set. Each set can only contain unique numbers. 

  for(const value of arr) { // iterate through array to check each "value"
    if (uniqueNumbers.has(value)){ //checking the Set to determine if the value is present. 
      return value; //If value is already in set, we want to retrun the value (which will stop the iteration and function)
    }
    uniqueNumbers.add(value); // if value is not in Set, we want to add it and move on to the next value
  }
  return -1; //when we finish iterating through the arr, if no values have returned (meaning there are no unique values), we want to return -1 per the instructions.
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// EXPLANATION ** see above
//
