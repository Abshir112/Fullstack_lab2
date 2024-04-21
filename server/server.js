import app from './express.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

//  Connect to the database
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => { console.log('Connected to the database') })
.catch((error) => { console.log('Failed to connect to the database', error) });


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
