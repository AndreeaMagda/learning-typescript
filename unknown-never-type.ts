//Unknown is a bit more restrictive than any.
// With unknown, we have to first of all check
// the type that's currently stored in userInput
// before we can assign it to, for example,
// a variable that wants a string.

let userInput: unknown
let username: string
if (typeof userInput === 'string') {
  username = userInput
}
userInput = 5
userInput = 'Charles'
// username=userInput - ERROR

//never

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500)
