// looping in object

// array
var array1 = ['sobuj', 'rahim', 'maruf', 'ahikur']
var array2 = [22, 25, 15, 45]

// object
var friendAge = {
  maruf: 22,
  ashikr: 22,
  sadi: 22,
  momin: 22,
}

var shoppingCart = {
  book: 5,
  pen: 4,
  mouse: 1,
  keyboard: 3,
}
// getting all the keys but all the keys will be displayed as array
var keys = Object.keys(shoppingCart)
console.log(keys)

// getting all the values but all the values will be displayed as array
var values = Object.values(shoppingCart)
console.log(values)

// keys output is an array which is var keys = [ 'book', 'pen', 'mouse', 'keyboard' ]
// using for loop to get key and values from object
for (var i = 0; i < keys.length; i++) {
  var properties = keys[i]
  var propertyValues = shoppingCart[keys[i]]
  console.log(properties, propertyValues)
}

// looping object using for in loop
console.log('\n looping using for in loop :')

for (var propertyName in shoppingCart) {
  var propertyValue = shoppingCart[propertyName]
  console.log(propertyName, propertyValue)
}
