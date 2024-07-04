function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult == true) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const number1 = 5
const number2 = 2.6
const showResult = true
const resultphrase = 'result is: '

add(number1, number2, showResult, resultphrase)
