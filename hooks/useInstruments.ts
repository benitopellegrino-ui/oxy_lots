
import data from '../config/instruments.json';
import type { Instrument } from '../types/types';

type InstrumentsFile = { instruments: Instrument[] };

export function getInstruments(): Instrument[] {
  const file = data as InstrumentsFile;
  // Ensure unique & sorted symbols
  const map = new Map<string, Instrument>();
  file.instruments.forEach(i => map.set(i.symbol.toUpperCase(), i));
  return Array.from(map.values()).sort((a, b) => a.symbol.localeCompare(b.symbol));
}

export function getPairs(): string[] {
  return getInstruments().map(i => i.symbol);
}

export function findInstrument(symbol: string): Instrument | undefined {
  return getInstruments().find(i => i.symbol.toUpperCase() === symbol.toUpperCase());
}
