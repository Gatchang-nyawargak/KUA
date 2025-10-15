'use client';

import { useState } from 'react';

interface DonationProps {
  onClose?: () => void;
}

export default function Donation({ onClose }: DonationProps) {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [currency, setCurrency] = useState<'usd' | 'kes'>('usd');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    if (paymentMethod === 'mpesa' && !phone) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/payments/${paymentMethod === 'card' ? 'stripe/create-intent' : 'mpesa/initiate'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          paymentMethod === 'card' 
            ? { amount: parseFloat(amount), currency }
            : { phone, amount: parseFloat(amount) }
        ),
      });

      const data = await response.json();
      
      if (paymentMethod === 'card') {
        console.log('Stripe payment intent created:', data.clientSecret);
        alert('Payment processing initiated. You will be redirected to complete payment.');
      } else {
        alert('Please check your phone for M-Pesa prompt');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Make a Donation</h2>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Currency</label>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrency('usd')}
                className={`flex-1 p-2 rounded-lg border text-sm font-medium ${
                  currency === 'usd' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('kes')}
                className={`flex-1 p-2 rounded-lg border text-sm font-medium ${
                  currency === 'kes' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                KES (KSh)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Amount ({currency === 'usd' ? 'USD' : 'KES'})
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Enter amount in ${currency === 'usd' ? 'USD' : 'KES'}`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Payment Method</label>
            <div className="flex gap-2">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 p-3 rounded-lg border font-medium ${
                  paymentMethod === 'card' 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex-1 p-3 rounded-lg border font-medium ${
                  paymentMethod === 'mpesa' 
                    ? 'bg-green-500 text-white border-green-500' 
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                M-Pesa
              </button>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-gray-700">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>
            </div>
          )}

          {paymentMethod === 'mpesa' && (
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="254XXXXXXXXX"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
              />
            </div>
          )}

          <button
            onClick={handleDonate}
            disabled={loading || !amount || (paymentMethod === 'mpesa' && !phone)}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Processing...' : `Donate ${currency === 'usd' ? '$' : 'KSh'}${amount || '0'}`}
          </button>
        </div>
      </div>
    </div>
  );
}