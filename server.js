// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to validate numbers
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Both num1 and num2 must be valid numbers';
    }
    return null;
};

// Route handler function
function performOperation(req, res, operation) {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) return res.status(400).json({ error });
    
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }
    res.json({ result });
}

// Define API endpoints
app.get('/add', (req, res) => performOperation(req, res, 'add'));
app.get('/subtract', (req, res) => performOperation(req, res, 'subtract'));
app.get('/multiply', (req, res) => performOperation(req, res, 'multiply'));
app.get('/divide', (req, res) => performOperation(req, res, 'divide'));

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice! Use /add, /subtract, /multiply, or /divide with num1 and num2 as query parameters.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Calculator microservice running on http://localhost:${PORT}`);
});
