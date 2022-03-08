const title = 'ES5\nSection 2 - Constructor property\n'
console.log(title)

/* Each object (regardless of initialization syntax used) 
has a constructor function build in. 
Built in constructor function is represented implicitly */

var oLiteral = {}
var oObject = new Object()
console.log(oLiteral.constructor)
console.log(oObject.constructor)

var sLiteral = ''
var sObject = new String()
console.log(sLiteral.constructor)
console.log(sObject.constructor)

var bLiteral = true // false
var bObject = new Boolean()
console.log(bLiteral.constructor)
console.log(bObject.constructor)

var nLiteral = 2
var nObject = new Number()
console.log(nLiteral.constructor)
console.log(nObject.constructor)