import app from './express.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
