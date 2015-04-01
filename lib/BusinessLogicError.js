var util = require('util')
var vm = require('vm');

var BusinessLogicError = function (message) {
    if (!(this instanceof Error)) {
        var be = new BusinessLogicError(message);
        return be;
    }
    Error.captureStackTrace(this, this);
    this.message = message || 'Error';
}
util.inherits(BusinessLogicError, Error)
BusinessLogicError.prototype.name = 'BusinessLogic Error'


module.exports = BusinessLogicError
