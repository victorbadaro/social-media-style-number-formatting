import { useState } from 'react';

import './styles/global.css';

export function App() {
  const [number, setNumber] = useState(0);
  const formatter = Intl.NumberFormat('en', { notation: 'compact', roundingMode: 'floor' } as Intl.NumberFormatOptions);
  const formattedNumber = formatter.format(number);

  return (
    <div className="bg-zinc-950 h-screen flex items-center justify-center flex-col gap-8">
      <input
        className="bg-transparent text-zinc-600 border-2 border-zinc-400 rounded p-2"
        type="number"
        placeholder="Type a number"
        onChange={event => setNumber(Number(event.target.value))}
        value={number}
      />
      <span className="text-zinc-50 font-bold text-5xl">{formattedNumber}</span>
    </div>
  );
}