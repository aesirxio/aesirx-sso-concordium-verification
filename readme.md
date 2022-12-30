# SSO verification for Concordium Wallet

## Setup

Clone the `.env.dist` file into `.env` and customize the variables:

- **CONCORDIUM_JSONRPC_URL**: URL of the Concordium JSON-RPC endpoint.

## Usage

Call the main script (index) with three parameters:

- Wallet address
- Signed message
- Original message

If the signed message validates the one from the original one with the wallet address, it will return "true", otherwise "false".
