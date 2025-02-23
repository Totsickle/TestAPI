const express = require('express');
const app = express();
const PORT = 8080;

// Middleware to parse JSON
app.use(express.json());

// Start server
app.listen(PORT, () => console.log(`It's working on http://localhost:${PORT}`));

// GET request to retrieve all phones
app.get('/phones', (req, res) => {
    res.status(200).send({
        phone: 'Iphone 16e',
        storage: '128GB',
        color: 'black',
        price: 599
    });
});

// POST request to add a new phone
app.post('/phones/:id', (req, res) => {
    const { id } = req.params;
    const { phone, storage, color, price, camera } = req.body;

    if (!camera) {
        return res.status(418).send({
            message: 'Camera quality is missing'
        });
    }
    
    res.send({
        phones: `Phone with a camera quality of ${camera}, ID: ${id}, Model: ${phone}, Storage: ${storage}, Color: ${color}, Price: ${price}`
    });
});

// PUT request to update phone data
app.put('/phones/:id', (req, res) => {
    const { id } = req.params;
    const { phone, storage, color, price, camera } = req.body;

    if (!phone) {
        return res.status(418).send({
            message: 'Phone model is missing'
        });
    }
    
    res.send({
        message: `Phone with ID ${id} successfully updated.`,
        updatedData: { phone, storage, color, price, camera }
    });
});

// DELETE request to remove a phone
app.delete('/phones/:id', (req, res) => {
    const { id } = req.params;

    res.send({
        message: `Phone with ID ${id} successfully deleted`
    });
});
