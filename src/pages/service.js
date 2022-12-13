const Web3 = require('web3');
const InsuranceManager = require('../contracts/InsuranceManager.json');
const web3 = new Web3('http://localhost:7545');

const getUserPolicy = async (userAddress) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    return contract.methods.getUserPolicy(userAddress).call();
}

const onBoardUser = async (userAddress, amount) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    const addresses = await web3.eth.getAccounts();
    return contract.methods.onboardUser(userAddress, amount).send({
        from: addresses[2],
        gas: 100000
    });
}

const payPremium = async (userAddress, amount) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    const addresses = await web3.eth.getAccounts();
    return contract.methods.payPremium(userAddress, amount).send({
        from: addresses[2],
        gas: 100000
    });
}

const requestClaim = async (userAddress,  amountClaimed) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    return contract.methods.requestClaim(userAddress, amountClaimed).call();
}

const approveClaimRequest = async (userAddress) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    const addresses = await web3.eth.getAccounts();
    return contract.methods.approveClaimRequest(userAddress).send({
        from: addresses[2],
        gas: 100000
    });
}

const declineClaimRequest = async ( userAddress, reason) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    const addresses = await web3.eth.getAccounts();
    return contract.methods.declineClaimRequest(userAddress, reason).send({
        from: addresses[2],
        gas: 100000
    });
}

const getClaimStatus = async ( userAddress) => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = InsuranceManager.networks[id];
    const contract = new web3.eth.Contract(InsuranceManager.abi, deployedNetwork.address);
    return contract.methods.getClaimStatus(userAddress).call();
}

export {getUserPolicy, onBoardUser,payPremium, requestClaim, approveClaimRequest, declineClaimRequest,getClaimStatus};