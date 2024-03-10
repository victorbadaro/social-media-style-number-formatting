import { useState } from 'react';
import './styles/global.css';

export function App() {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  const [number, setNumber] = useState(0);
  const formattedNumber = formatter.format(number);

  return (
    <>
      <input
        type="number"
        placeholder="Type a number"
        onChange={event => setNumber(Number(event.target.value))}
        value={number}
      />
      <p>{formattedNumber}</p>
    </>
  );
}