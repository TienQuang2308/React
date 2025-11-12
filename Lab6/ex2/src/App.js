import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment, selectSuccessfulPayments } from './features/payments/paymentsSlice';

function App() {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector(state => state.payments);
  const successfulPayments = useSelector(selectSuccessfulPayments);

  const [amount, setAmount] = useState('');

  const handleCreatePayment = () => {
    if (!amount) return;
    dispatch(createPayment({ amount: Number(amount), status: 'SUCCESS' }));
    setAmount('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Payments</h1>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleCreatePayment}>Create Payment</button>

      {isLoading && <p>Processing payment...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>All Payments:</h2>
      <ul>
        {list.map(p => (
          <li key={p.id}>Amount: {p.amount}, Status: {p.status}</li>
        ))}
      </ul>

      <h2>Successful Payments:</h2>
      <ul>
        {successfulPayments.map(p => (
          <li key={p.id}>Amount: {p.amount}, Status: {p.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
