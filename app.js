//object
var person = {
    name: 'Andreea',
    age: 21,
    hobbies: ['f1', 'cubing'],
};
//with any type we can add any type of data in the array
// but is not ok to use it because we lose the type checking
var favActivites;
favActivites = ['f1'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
