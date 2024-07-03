//object

const person = {
  name: 'Andreea',
  age: 21,
  hobbies: ['f1', 'cubing'],
}
//with any type we can add any type of data in the array
// but is not ok to use it because we lose the type checking

let favActivites: string[]
favActivites = ['f1']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
