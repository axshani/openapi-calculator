# openapi-calculator
A Node.js Calculator generated with OpenAPI - Swagger codgen


## Generated Server
I used SwaggerHub to generate a Node.js server
https://app.swaggerhub.com/apis/AlexShani/calculator_api/0.0.1#

```
    cd nodejs-server
    npm install
    npm start
```

## Overview
I used postman to send a POST request to http://localhost:8080/api <br>

You must pass a JWT token, use 'Authorization': 'Bearer ${jwt_token}' header<br>
Pass a special header 'x-request-operation' that must contain an operation Enum([+ , - , / , *]) as a string<br>
The body must contain two numbers {firstValue: number, secondValue: number}<br>
<br>
The Server will perform the operation on the two values and return a Result object that contains 'result' field.
