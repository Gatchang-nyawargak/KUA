import { Router } from 'express';
import {
  createStripePayment,
  createMpesaPayment,
  mpesaCallback,
  stripeWebhook,
} from '../controllers/paymentController';

const router = Router();

// Stripe routes
router.post('/stripe/create-intent', createStripePayment);
router.post('/stripe/webhook', stripeWebhook);

// M-Pesa routes
router.post('/mpesa/initiate', createMpesaPayment);
router.post('/mpesa/callback', mpesaCallback);

export default router;