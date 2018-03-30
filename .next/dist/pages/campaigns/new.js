'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stalin/Desktop/blockchain/kickstart/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:

                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Create Campaign!'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('label', { style: { color: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.minimumContribution,
        onChange: function onChange(e) {
          return _this3.setState({ minimumContribution: e.target.value });
        },
        label: 'wei',
        labelPosition: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Oops!, something went wrong',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImNvbG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVUsQUFBTSxBQUFRLEFBQU87O0FBQy9CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBR2pCLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFFSixBOzJCQUFPLEFBQ2dCLEFBQ3JCO29CQUZLLEFBRVMsQUFDZDtlLEFBSEssQUFHSTtBQUhKLEFBQ0wsYSxBQUtGOzJGQUFZLGlCQUFBLEFBQU8sR0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNWO2tCQUFBLEFBQUUsQUFFRjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FIcEIsQUFHVixBQUFjLEFBQThCOztnQ0FIbEM7Z0NBQUE7dUJBTWUsY0FBQSxBQUFLLElBTnBCLEFBTWUsQUFBUzs7bUJBQTFCO0FBTkUsb0NBQUE7Z0NBQUE7eUNBT0YsQUFBUSxRQUFSLEFBQWdCLGVBQWUsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLHFCQUExQyxBQUErRDt3QkFDN0QsU0FSQSxBQU9GLEFBQW9FLEFBQ2xFLEFBQVM7QUFEeUQsQUFDeEUsaUJBREk7O21CQUlOOzsrQkFBQSxBQUFPLFVBWEMsQUFXUixBQUFpQjtnQ0FYVDtBQUFBOzttQkFBQTtnQ0FBQTtnREFhUjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWJyQixBQWFSLEFBQWMsQUFBbUI7O21CQUduQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FoQkwsQUFnQlYsQUFBYyxBQUFTOzttQkFoQmI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFtQkg7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLHFDQUFBLEFBQUMsdUNBQUssT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLGNBQWMsVUFBVSxLQUFsRCxBQUF1RDtvQkFBdkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxXQUFPLE9BQU8sRUFBQyxPQUFmLEFBQWMsQUFBUTtvQkFBdEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx5Q0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsRUFBQSxBQUFFLE9BQTNDLEFBQUssQUFBYyxBQUErQjtBQUY5RCxBQUdFO2VBSEYsQUFHUSxBQUNOO3VCQUpGLEFBSWdCO29CQUpoQjtzQkFISixBQUNFLEFBRUUsQUFNRjtBQU5FO0FBQ0UsMkJBS0osQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQVRGLEFBU0UsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FsQk4sQUFDRSxBQUdFLEFBY0UsQUFNUDs7Ozs7QUFwRHVCLEEsQUF1RDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RhbGluL0Rlc2t0b3AvYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==