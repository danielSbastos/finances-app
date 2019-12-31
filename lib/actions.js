export function createTransaction({ toAccount, fromAccount, amount, payee, date }) {
  fetch('https://a1c6dfca.ngrok.io/register', {
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
