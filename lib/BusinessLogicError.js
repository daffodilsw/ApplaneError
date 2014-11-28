var util = require('util')
var vm = require('vm');

var BusinessLogicError = function (message) {
    Error.captureStackTrace(this, this);

    this.message = message || 'Error';
}
util.inherits(BusinessLogicError, Error)
BusinessLogicError.prototype.name = 'BusinessLogic Error'


module.exports = BusinessLogicError
