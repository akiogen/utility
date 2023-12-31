const jwt = require('jsonwebtoken');
const readline = require('readline-sync');

// JWT without signature
// sample: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
const tokenWithoutSignature = readline.question("Please input your JWT: ");

// Decoded JWT payload without signature
console.log('Decoded JWT payload without signature: ');
const decodedWithoutSignature = jwt.decode(tokenWithoutSignature);
console.log(decodedWithoutSignature);
