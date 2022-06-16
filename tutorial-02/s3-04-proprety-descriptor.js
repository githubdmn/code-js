var title = '\nES5 - property descriptors\n';
console.log(title);

var person = { name: 'John', age: 22 };
console.log(person); // nodejs prints entire key:value list

for (var key in person) console.log(key);

console.log(Object.keys(person));

console.log('Attributes attached to properties');

var objectbase = Object.getPrototypeOf(person);
var descriptor = Object.getOwnPropertyDescriptor(objectbase, 'toString');
console.log(descriptor);

// read-only object properties
Object.defineProperty(person, 'name', {
	writable: false,
	enumerable: false,
	configurable: false, // won't delete person.name
});
console.log(person.name);
person.name = 'Adam';
console.log(person.name);
console.log(Object.keys(person));

/**  */
var personB = { name: 'John', age: 22 };
console.log(Object.keys(personB));
Object.defineProperties(personB, {
	name: {
		writable: false,
		enumerable: false,
		configurable: false,
	},
	age: { writable: false, enumerable: false, configurable: false },
});
console.log(Object.keys(personB));
