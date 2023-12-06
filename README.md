## utility
 
# how to use

% node install

% node jwt_decode.js
Please input your JWT: <input your JWT without signature>
Decoded JWT payload without signature:
<output Decoded JWT payload>

# example
% node jwt_decode.js
Please input your JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
Decoded JWT payload without signature:
{ sub: '1234567890', name: 'John Doe', iat: 1516239022 }
