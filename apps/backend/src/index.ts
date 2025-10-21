import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/payment';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use('/api/payments/stripe/webhook', express.raw({ type: 'application/json' }));

app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'OK', message: 'Payment API is running' });
});

const server = app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

server.on('error', (err: any) => {
  if (err?.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Free it or change PORT in your .env.`);
    process.exit(1);
  } else {
    console.error(err);
    process.exit(1);
  }
});
