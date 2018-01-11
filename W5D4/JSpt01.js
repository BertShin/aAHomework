function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'changes in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping1();

function mysteryScoping2() {
  const x = 'constants stay true throughout @ first definition in block';
  if (true) {
    const x = 'constants can have different names in nested block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping2();

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'this will cause an error. VAR cannot have the same name as constant';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping3();

function mysteryScoping4() {
  let x = 'This stays the same!';
  if (true) {
    let x = 'let will stay in scope of function!'
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping4();

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'Cannot declare X again, this causes an error';
  console.log(x)
}


// mysteryScoping5();


function madLib(verb, adj, noun) {
  console.log('We Shall ' + `${verb.toUpperCase()}` + ' the ' + `${adj.toUpperCase()} ${noun.toUpperCase()}`)
}

// madLib('run', 'blue', 'bottle');

function isSubstring (searchString, subString) {
  if (searchString.includes(subString)) {
    return true;
  }
  return false;
}

// isSubstring('hi', 'hello');
// isSubstring('basketball', 'basket');


function fizzBuzz(array) {
  const fizzBuzzarray = [];
  
  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzarray.push(el);
    }
  });
  
  return fizzBuzzarray
}

// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

function isPrime (n) {
  if (n < 2) { return false; }
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

isPrime(11);


function sumOfNPrimes (n) {
  let sum = 0;
  let PrimeCount = 0;
  let i = 2;
  
  while (PrimeCount < n) {
    if (isPrime(i)) {
      sum += i;
      PrimeCount++;
    }
    i++;
  }
  return sum;
}

sumOfNPrimes(5);



