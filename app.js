const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const { user_id, email, college_roll_number, array } = req.body;

    const evenNumbers = array.filter(num => num % 2 === 0);
    const oddNumbers = array.filter(num => num % 2 !== 0);
    const alphabetsUppercase = array.filter(char => typeof char === 'string' && /^[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

    const response = {
        status: 'success',
        user_id,
        email_id: email,
        college_roll_number,
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets_uppercase: alphabetsUppercase
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
