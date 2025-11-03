
export type Instrument = {
  symbol: string;
  display: string;
  class: 'forex_major' | 'forex_jpy' | 'metal' | 'index' | 'crypto' | string;
  pipSize: number;
  minLot: number;
  lotStep: number;
  contractSize?: number;
  pipValuePerLot?: number;
};
