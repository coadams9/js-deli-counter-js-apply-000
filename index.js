function takeANumber(katzDeliLine, num) {
  num += 1
  katzDeliLine.push(num);
  return "Welcome, you are number " + num
  
}

let array = []
let num = 0

console.log(takeANumber(array, num))
console.log(takeANumber(array, num))
console.log(takeANumber(array, num))

// Welcome you are number 37

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }
}

//var line = []


function currentLine(katzDeliLine) {
  var line = []
  let i = 0
  while (i < katzDeliLine.length) {
    line.push([i+1] + ". " + katzDeliLine[i])
    i += 1
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently: " + line.join(', ')
  }
}

console.log(currentLine(["Cory", "Michelle", "Sam"]))
console.log(currentLine(["Jon", "Alex", "Preetha"]))
