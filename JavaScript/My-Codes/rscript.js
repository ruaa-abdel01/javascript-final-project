let numbers = []; // This is where we store all the valid positive numbers

for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number ${i + 1} of 10:`);  // Ask user for a number
    let num = parseInt(input);  // Convert the input (string) to a number

    if (num < 0) {
        // If the number is negative, skip this round and ask for the next number
        continue; 
    }

    if (num === 0) {
        // If the number is zero, stop asking for numbers immediately
        break;
    }

        // If we get here, number is positive, so add it to the array
    numbers.push(num);
}

// After the loop ends, show all valid positive numbers collected
alert("Here are the positive numbers you entered: " + numbers.join(", "));

