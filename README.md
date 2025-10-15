# KUA Monorepo

A monorepo containing both frontend (Next.js) and backend (Node.js) applications with integrated payment system supporting credit cards and M-Pesa.

## Structure

```
KUA/
├── apps/
│   ├── frontend/          # Next.js application
│   └── backend/           # Node.js Express API
└── package.json           # Root workspace configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Install all dependencies
npm install
```

### Environment Setup

1. Copy backend environment template:
```bash
cp apps/backend/.env.example apps/backend/.env
```

2. Configure your environment variables in `apps/backend/.env`:
   - Stripe keys for card payments
   - M-Pesa credentials for mobile payments

### Development

```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run dev:frontend  # Frontend only (port 3000)
npm run dev:backend   # Backend only (port 3001)
```

## Features

### Payment System
- **Credit Card Payments**: Integrated with Stripe
- **M-Pesa Payments**: Direct integration with Safaricom API
- **Donation Modal**: Floating donate button with payment options

### API Endpoints

#### Stripe Payments
- `POST /api/payments/stripe/create-intent` - Create payment intent
- `POST /api/payments/stripe/webhook` - Handle Stripe webhooks

#### M-Pesa Payments  
- `POST /api/payments/mpesa/initiate` - Initiate STK push
- `POST /api/payments/mpesa/callback` - Handle M-Pesa callbacks

## Deployment

```bash
# Build applications
npm run build

# Start production server
npm start
```

## Environment Variables

### Backend (.env)
```
PORT=3001
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
MPESA_SHORTCODE=...
MPESA_PASSKEY=...
MPESA_ENVIRONMENT=sandbox
```