import { BACKEND_URL } from 'react-native-dotenv'

export function createTransaction({ toAccount, fromAccount, amount, payee, date }) {
  return fetch(`https://b625281d.ngrok.io/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: toAccount,
      from: fromAccount,
      amount,
      payee,
      date,
    }),
  })
}
