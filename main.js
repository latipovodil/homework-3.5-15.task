// https://edabit.com/challenge/9MjEpkL7yAjAqiH58 //

function lessThan100(a, b) {
  if (a + b > 100) {
    return false
  }
  else {
    return true
  }


}

console.log(lessThan100(15, 50));

// https://edabit.com/challenge/9MjEpkL7yAjAqiH58 //

function lessThanOrEqualToZero(num) {
  if (num > 0) {
    return false
  }

  else {
    return true
  }
}

console.log(lessThanOrEqualToZero(10));

//  https://edabit.com/challenge/kLa2w7m4h849k8rmW  //

function sayHelloBye(name, num) {
  if (num == 0) {
    return "Bye " + name.charAt(0).toUpperCase() + name.slice(1)
  }

  else {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1)
  }
}

console.log(sayHelloBye("odil", 1));
console.log(sayHelloBye("odil", 0));

// https://edabit.com/practice/session No/1 //

function giveMeSomething(a) {
  return "something " + a
}
console.log(giveMeSomething("Bye World"));

// https://edabit.com/practice/session No/2 //

function lessThanOrEqualToZero(num) {
  if (num > 0) {
    return "false"
  }
  else {
    return "true"
  }
}

console.log(lessThanOrEqualToZero(-2));

// https://edabit.com/practice/session No/3 //

function matchHouses(step) {

  if (step == 0) {
    return 0
  }

  return step * 5 + 1
}

console.log(matchHouses(9));


// https://edabit.com/practice/session No/3 //

function squareDigits(n) {
  let asosiy = "";
  for (let i = 0; i < 10; i++) {
    asosiy += n[i]

    i++;
  }
}

console.log(squareDigits("123"));

//  https://edabit.com/challenge/j7yQbF3J3rToHsDBP //

function cubes(a) {
  return a ** 3
}
console.log(cubes(8));

//  https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw //

function calcAge(age) {
  return age * 365
}

console.log(calcAge(1));


// https://edabit.com/challenge/48EJWLhF224na8po3 //

function generation(x, y) {
  if (y == "m") {
    if (x == -3) {
      return "great grandfather"
    }

    else if (x == -2) {
      return "grandfather"
    }

    else if (x == -1) {
      return "father"
    }

    else if (x == 0) {
      return "me!"
    }

    else if (x == 1) {
      return "son"
    }

    else if (x == 2) {
      return "grandson"
    }

    else if (x == 3) {
      return "great grandson"
    }

    else {
      return "Xato"
    }

  }

  else if (y == "f") {
    if (x == -3) {
      return "great grandmother"
    }

    else if (x == -2) {
      return "grandmother"
    }

    else if (x == -1) {
      return "mother"
    }

    else if (x == 0) {
      return "me!"
    }

    else if (x == 1) {
      return "daughter"
    }

    else if (x == 2) {
      return "granddaughter"
    }

    else if (x == 3) {
      return "great granddaughter"
    }

    else {
      return "Xato"
    }
  }
}
console.log(generation(0, "m"));



// https://edabit.com/challenge/nhXofMMyrowMyr9Nv //

function nextEdge(side1, side2) {
  return side1 + side2 - 1
}

console.log(nextEdge(3, 2));


// https://edabit.com/challenge/6AnQqiEjkJdZrWhPS //

function howManySeconds(hours) {
  return hours * 60 * 60
}

console.log(howManySeconds(1));

// https://edabit.com/challenge/NAQhEoxbofPidLxm9 //

function addition(num) {
  return num + 1
}

console.log(addition(-9));


// https://edabit.com/challenge/W8R9CPBThreBBXYLS //

function multiSum(num, ten=10) {
	return num*1+num*2+num*3+num*4+num*5+num*6+num*7+num*8+num*9+num*ten
}

console.log(multiSum(10));


// https://edabit.com/challenge/3CaszbdZYGN4otQD8 //

function triArea(base, height) {
	return base*(height/2)
}

console.log(triArea(10,10));


// https://edabit.com/challenge/ks3vMrqdnW3CQ3F4i //

function findPerimeter(length, width) {
	return (length+width)*2
}

console.log(findPerimeter(10,10));


// // https://edabit.com/challenge/hzxN9bAebBPNqdQto //

// const f1 = redundant("apple")
// const f2 = redundant("pear")
// const f3 = redundant("")

// function redundant(str) {
	
// }

// console.log(redundant(f2))

