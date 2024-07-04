"use strict";
//ENUM
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
    Role[Role["AUTHOR"] = 10] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Andreea',
    age: 21,
    hobbies: ['f1', 'cubing'],
    role: Role.ADMIN,
};
//with any type we can add any type of data in the array
// but is not ok to use it because we lose the type checking
let favActivites;
favActivites = ['f1'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
