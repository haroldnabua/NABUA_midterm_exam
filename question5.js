//Import required modules
const express = require('express');
const User = require('./user');

//Initialize express app
const app = express();



//Root route: Display a welcome message when the Root URL is accessed.
app.get('/', (req, res) => {
    res.send('Welcome to my Express server! The /users route is ready to use.');
});


//users route: fetches and returns all users from the database. 
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        //Log the error and send an appropriate error response.
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch users' });
    }
});

//Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
