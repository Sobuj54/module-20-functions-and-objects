// return in function

function add(a, b) {
  var sum = a + b
  return sum
}

var total = add(5, 6)
console.log(total)

// another example

function mySingara(money) {
  var singaraPrice = 10
  var quantity = money / singaraPrice
  return quantity
}

var taka = 200
var singara = mySingara(taka)
console.log('singara pailam :', singara)
