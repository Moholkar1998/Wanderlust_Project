import dotenv from 'dotenv';
// dotenv.config();

dotenv.config({ path: '.env.docker' });

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const REDIS_URL = process.env.REDIS_URL;

console.log('Mongo URI:', MONGODB_URI);
export { MONGODB_URI, PORT, REDIS_URL };
