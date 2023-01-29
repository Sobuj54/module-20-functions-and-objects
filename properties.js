// object properties

var shoppingCart = {
  book: 5,
  pen: 4,
  mouse: 1,
  keyboard: 3,
}
// when you know the specific property name use dot notation to get the property value
var penCount = shoppingCart.pen
// another way
var penCount2 = shoppingCart['pen']
// another method
var propertyName = 'pen'
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue)

// finding all the properties of an object
var properties = Object.keys(shoppingCart)
// viewing output of all the object properties..the properties will be shown in an array
console.log(properties)

// getting all the property values
var propertyValues = Object.values(shoppingCart)
// viewing all the property value in an object
console.log(propertyValues)

// set property values
shoppingCart.pen = 10
console.log(shoppingCart)
// another method
shoppingCart['pen'] = 12
console.log(shoppingCart)
// another method
shoppingCart[propertyName] = 15
console.log(shoppingCart)
