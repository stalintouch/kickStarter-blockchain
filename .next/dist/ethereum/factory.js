'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//this creates a preconfigured instance of our deployed factory
//this factory imports web3 and uses the deployed contract, so whenever you need to import a factory is all setup here for you
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xCf106AF6A5718cFd6c459b7c62311BEB8Ab5D4fE');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUI7QUFKQTtBQUtBLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sMEJBREksQUFDZixBQUEyQixZQUQ3QixBQUFpQixBQUVmLEFBR0Y7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RhbGluL0Rlc2t0b3AvYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==