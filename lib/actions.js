import { FINANCES_BACKEND_URL } from 'react-native-dev'

export function createTransaction({ toAccount, fromAccount, amount, payee, date }) {
  return fetch(`${FINANCES_BACKEND_URL}/register`, {
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
