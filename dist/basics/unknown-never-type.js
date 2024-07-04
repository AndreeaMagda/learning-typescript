"use strict";
//Unknown is a bit more restrictive than any.
// With unknown, we have to first of all check
// the type that's currently stored in userInput
// before we can assign it to, for example,
// a variable that wants a string.
let userInput;
let username;
if (typeof userInput === 'string') {
    username = userInput;
}
userInput = 5;
userInput = 'Charles';
// username=userInput - ERROR
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
