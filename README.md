# utility
 
## how to use <jwt_decode.js>

% node jwt_decode.js<br>
Please input your JWT: <input your JWT without signature><br>
Decoded JWT payload without signature:<br>
<output Decoded JWT payload><br>

### example
% node jwt_decode.js<br>
Please input your JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c<br>
Decoded JWT payload without signature:<br>
{ sub: '1234567890', name: 'John Doe', iat: 1516239022 }
