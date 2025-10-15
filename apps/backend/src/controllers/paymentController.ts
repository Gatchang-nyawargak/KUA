import { Request, Response } from 'express';
import { createPaymentIntent, confirmPayment } from '../services/stripe';
import { initiateSTKPush } from '../services/mpesa';

export const createStripePayment = async (req: Request, res: Response) => {
  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Convert currency to lowercase for Stripe
    const stripeCurrency = currency.toLowerCase();
    const paymentIntent = await createPaymentIntent(amount, stripeCurrency);

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Stripe payment error:', error);
    res.status(500).json({ error: 'Payment creation failed' });
  }
};

export const createMpesaPayment = async (req: Request, res: Response) => {
  try {
    const { phone, amount, accountReference } = req.body;

    if (!phone || !amount || amount <= 0) {
      return res.status(400).json({ error: 'Phone and amount are required' });
    }

    const result = await initiateSTKPush(phone, amount, accountReference || 'DONATION');

    res.json(result);
  } catch (error) {
    console.error('M-Pesa payment error:', error);
    res.status(500).json({ error: 'M-Pesa payment initiation failed' });
  }
};

export const mpesaCallback = async (req: Request, res: Response) => {
  try {
    console.log('M-Pesa Callback:', JSON.stringify(req.body, null, 2));
    
    // Process the callback data here
    const { Body } = req.body;
    
    if (Body?.stkCallback) {
      const { ResultCode, ResultDesc, CallbackMetadata } = Body.stkCallback;
      
      if (ResultCode === 0) {
        // Payment successful
        console.log('Payment successful:', ResultDesc);
        // Save to database or send confirmation
      } else {
        // Payment failed
        console.log('Payment failed:', ResultDesc);
      }
    }

    res.json({ ResultCode: 0, ResultDesc: 'Success' });
  } catch (error) {
    console.error('M-Pesa callback error:', error);
    res.status(500).json({ error: 'Callback processing failed' });
  }
};

export const stripeWebhook = async (req: Request, res: Response) => {
  try {
    const sig = req.headers['stripe-signature'] as string;
    // Webhook verification would go here
    
    console.log('Stripe webhook received');
    res.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    res.status(400).json({ error: 'Webhook verification failed' });
  }
};