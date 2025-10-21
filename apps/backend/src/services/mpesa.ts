import axios from 'axios';

const MPESA_BASE_URL = process.env.MPESA_ENVIRONMENT === 'production' 
  ? 'https://api.safaricom.co.ke' 
  : 'https://sandbox.safaricom.co.ke';

const getAccessToken = async (): Promise<string> => {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
  ).toString('base64');

  const response = await axios.get(`${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  return response.data.access_token;
};

export const initiateSTKPush = async (phone: string, amount: number, accountReference: string) => {
  const accessToken = await getAccessToken();
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
  const shortcode = '174379'; // Sandbox shortcode
  const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'; // Sandbox passkey
  
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

  const payload = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phone,
    PartyB: shortcode,
    PhoneNumber: phone,
    CallBackURL: 'https://mydomain.com/path',
    AccountReference: accountReference,
    TransactionDesc: 'Donation Payment',
  };

  const response = await axios.post(`${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};