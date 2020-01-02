import { BACKEND_URL, AUTHORIZATION_TOKEN } from 'react-native-dotenv'

export function createTransaction({ toAccount, fromAccount, amount, payee, date }) {
  return fetch(`${BACKEND_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': AUTHORIZATION_TOKEN
    },
    body: JSON.stringify({
      to: toAccount,
      from: fromAccount,
      amount,
      payee,
      date,
    }),
  })
}
