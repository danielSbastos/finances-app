export function createTransaction(info) {
  const { toAccount, fromAccount, amount, payee, date } = info;

  fetch('https://4ccb1d02.ngrok.io/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: toAccount,
      from: fromAccount,
      amount: amount,
      payee: payee,
      date: date,
    }),
  });
}
