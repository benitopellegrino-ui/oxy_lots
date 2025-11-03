// 🦉 OXU Lots – Configuration File
export const DEFAULT_CONFIG = {
  version: "1.1.0",
  updatedAt: "2025-11-03",
  defaultRiskPercent: 2,
  minLot: 0.01,
  lotStep: 0.01,
  leverageDefault: 1000,
  baseCurrency: "USD"
};

export const INSTRUMENT_META = {
  defaults: {
    forex_major: { pipSize: 0.0001, minLot: 0.01, lotStep: 0.01 },
    forex_jpy: { pipSize: 0.01, minLot: 0.01, lotStep: 0.01 }
  },
  overrides: {
    BTCUSD: {
      contractSize: 1.0,
      pipSize: 1.0,
      pipValuePerLot: 1.0,
      minLot: 0.01,
      lotStep: 0.01,
      leverageNote: "Account 1:1000; risk calc must reflect that margin ≠ risk."
    }
  }
};
