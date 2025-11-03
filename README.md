# OXU Lots – Update Package

This folder contains the latest configuration update for OXU Lots app.

## Files Included
- **oxu_lots_pairs.csv** → list of supported pairs (for quick import)
- **oxu_lots_pairs.json** → structured pairs list (for API or config integration)
- **oxu_lots_instrument_meta.json** → instrument metadata (with BTCUSD overrides)

## Integration Instructions
1. Copy this folder into your GitHub repo under `/src/config/` or equivalent.
2. Load pairs dynamically in your app initialization.
3. Use the `instrument_meta.json` for overrides when calculating risk or position sizing.
