**Calculator Microservice**

This is a simple calculator microservice built using Node.js and Express. The microservice provides endpoints for basic arithmetic operations: addition, subtraction, multiplication, and division. It accepts two numeric inputs via query parameters and returns the result of the operation.

Features
Addition (/add)

Subtraction (/subtract)

Multiplication (/multiply)

Division (/divide)

Error Handling
If the provided inputs are not valid numbers, the service will respond with a 400 error and an appropriate message.

If a division by zero is attempted, the service will return a 400 error indicating that division by zero is not allowed.
