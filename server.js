const app = require('./app'); // Import the app from app.js
const dotenv = require('dotenv');

dotenv.config();


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
