function add_fc(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result  ' + num)
}

printResult(add_fc(2, 32))

let combineValues

combineValues = add_fc

console.log(combineValues(45, 8))
