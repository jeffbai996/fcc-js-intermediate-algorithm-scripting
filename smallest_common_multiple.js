// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let domain = [];
  // loop from min to max over arr
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    // push all values to domain
    domain.push(i)
  }
  // find lcm of all nums in domain
  let lcm = domain[0]
  for (let j = 1; j < domain.length; j++) {
    lcm = findLCM(lcm, domain[j]);
  }
  return lcm;
}

  // find all prime factors for num
function primeFacts(num) {
  let facts = {};
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      facts[i] = facts[i] ? facts[i] + 1 : 1;
      num /= i;
    }
  }
  return facts;
}

  // find lcm of all numbers in a range
function findLCM(a, b) {
  let factA = primeFacts(a);
  let factB = primeFacts(b);

  let facts = {};

  for (let fact in factA) {
    facts[fact] = factA[fact];
  }
  
  for (let fact in factB) {
    facts[fact] = Math.max(facts[fact] || 0, factB[fact]);
  }

  let lcm = 1;
  for (let fact in facts) {
    lcm *= fact ** facts[fact];
  }
  return lcm;
}


smallestCommons([1,5]);