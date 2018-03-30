//this factory imports web3 and uses the deployed contract, so whenever you need to import a factory is all setup here for you
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//this creates a preconfigured instance of our deployed factory
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xCf106AF6A5718cFd6c459b7c62311BEB8Ab5D4fE'
);

export default instance;