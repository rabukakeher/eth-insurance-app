
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
});
console.log (window.web3.currentProvider)

// contractAddress and abi are setted after contract deploy
var contractAddress = '0xc015eCbE217336d8b817Dd3FF3557028bfe07D0d';

var abi = JSON.parse('[{"inputs":[{"internalType":"address","name":"onboardingAddr","type":"address"},{"internalType":"address","name":"claimManagerAddr","type":"address"},{"internalType":"address","name":"premiumCollectorAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"string","name":"policyName","type":"string"},{"indexed":false,"internalType":"uint256","name":"amountInsured","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountDueEveryMonth","type":"uint256"}],"name":"UserPolicy","type":"event"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amountInsured","type":"uint256"}],"name":"onboardUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserPolicy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"payPremium","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amountClaimed","type":"uint256"}],"name":"requestClaim","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
        alert("Error retrieving accounts.");
        return;
    }
    if (accounts.length == 0) {
        alert("No account found! Make sure the Ethereum client is configured properly.");
        return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
});
var userAddress = document.getElementById('userAddress');
var amount = document.getElementById("amount");
//Smart contract functions
function onBoardUserFunction() {

    contract.methods.onboardUser (userAddress.value, amount.val).send( {from: account}).then( function(tx) {
    console.log("Transaction: ", tx);
    });
    $("userAddress").val('');
    $("amount").val('');
}

function gerUserPolicyInfo() {
    contract.methods.gerUserPolicy().call().then( function( userAddress ) {
        console.log("info: ", userAddress);
        document.getElementById('lastInfo').innerHTML = info;
    });
}