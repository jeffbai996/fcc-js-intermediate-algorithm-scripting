// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  // return 0 for 0 and negatives
  if (num <= 0) {
    return 0;
  }
  // declare first 2 of fibonacci sequence and result
  let fibSeq = [0, 1];
  let oddSum = 0;
  // check if leading fibSeq is less than num
  while (fibSeq[fibSeq.length - 1] <= num) {
    // check if leading fibSeq is odd
    if (fibSeq[fibSeq.length - 1] % 2 !== 0) {
      // if true, add that fib to oddSum
      oddSum += fibSeq[fibSeq.length - 1];
    }
    // add the two fibs in fibSeq to get next fib
    let nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    // push nextFib to fibSeq
    fibSeq.push(nextFib);
  }
  // exit while loop, return result
  return oddSum;
}

sumFibs(4);