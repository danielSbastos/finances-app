import { BACKEND_URL } from 'react-native-dotenv'

export function createTransaction({ toAccount, fromAccount, amount, payee, date }) {
  console.log(BACKEND_URL)

  return fetch(`${BACKEND_URL}/register`, {
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
