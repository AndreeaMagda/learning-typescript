//ENUM
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
    Role[Role["AUTHOR"] = 10] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Andreea',
    age: 21,
    hobbies: ['f1', 'cubing'],
    role: Role.ADMIN,
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
if (person.role === Role.ADMIN) {
    console.log('is author');
}
