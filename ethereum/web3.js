import Web3 from "web3";

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //we are in the browser and metamask is running

  //this ensures we are using our version of web3, but using the prodiver inyected by metamask, otherwise you need to provide a provider using rinkby and infura
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or metamask is not available, using the infura portal that connects to rinkby
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/okx5lGLhFHeSjE2Mkg0x'
  );
  web3 = new Web3(provider);
};

export default web3;