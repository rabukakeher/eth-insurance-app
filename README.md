# eth-insurance-app

A project on Ethereum Blockchain for insurance handling.

### Frameworks and tech stack required

1. Truffle Suite - https://trufflesuite.com/
2. Ganache for local ethereum blockchain - https://trufflesuite.com/ganache/
3. Node.js

### Deployment

1. Provide the ethereum blockchain network address in the `truffle-config.js` file in the dApp folder.
2. Run the local blockchain network (Ganache) or be sure that the blockchain network to connect to is online.
3. In the dApp folder, compile the Smart Contracts using command `truffle compile`
4. In the dApp folder, migrate and deploy using command `truffle migrate`

### Running tests

1. Make sure the blockchain network is online before running the tests.
2. In the dApp folder, run command `truffle test`
