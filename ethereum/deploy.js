const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/campaignFactory.json')

const provider = new HDWalletProvider(
  'gift load sample found goddess anxiety approve ghost unlock song script rescue',
  'https://rinkeby.infura.io/okx5lGLhFHeSjE2Mkg0x'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode })
    .send({gas: '1000000', from: accounts[0]});
  console.log('contract deployed to this adddress:',result.options.address);
  
};

deploy();