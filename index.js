require("dotenv").config;

const {
  AccountAddress,
  HttpProvider,
  JsonRpcClient,
} = require("@concordium/node-sdk");
const verifyMessageSignature =
  require("@concordium/node-sdk").verifyMessageSignature;

if (process.argv.length < 5) return;

const pk = process.argv[2];
const sign = JSON.parse(process.argv[3]);
const message = process.argv[4];

(async () => {
  try {
    const account = new AccountAddress(pk);

    const client = new JsonRpcClient(
      new HttpProvider(process.env.CONCORDIUM_JSONRPC_URL)
    );
    const accountInfo = await client.getAccountInfo(account);

    console.log(await verifyMessageSignature(message, sign, accountInfo));
  } catch {
    console.log(false);
  }
})();
