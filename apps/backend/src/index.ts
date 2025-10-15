import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/payment.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use('/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

app.use('/api/payments', paymentRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Payment API is running' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});