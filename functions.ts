function add_fc(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result  ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

printResult(add_fc(2, 32))

//whatever we store here, has to be a function that takes two numbers and returns a number
let combineValues: (a: number, b: number) => number

combineValues = add_fc
//combineValues=printResult -ERROR

console.log(combineValues(45, 8))

addAndHandle(10, 20, (result) => {
  console.log(result)
})
