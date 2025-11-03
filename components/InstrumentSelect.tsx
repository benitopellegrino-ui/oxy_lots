
import React from 'react';
import { getInstruments } from '../hooks/useInstruments';

type Props = {
  value: string;
  onChange: (symbol: string) => void;
  includeCustom?: boolean;
};

export default function InstrumentSelect({ value, onChange, includeCustom = true }: Props) {
  const instruments = getInstruments();
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border px-3 py-2"
      aria-label="Strumento"
    >
      {instruments.map((it) => (
        <option key={it.symbol} value={it.symbol}>
          {it.display || it.symbol}
        </option>
      ))}
      {includeCustom && <option value="CUSTOM">Personalizzato…</option>}
    </select>
  );
}
