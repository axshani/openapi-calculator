'use strict';

var utils = require('../utils/writer.js');
var CalculatorController = require('../service/CalculatorControllerService');

// xRequestOperation isn't parsed as expected, this is why I used the "x-request-operation" header inside request object
module.exports.execute = function execute (req, res, next, body, xRequestOperation) {
  CalculatorController.execute(body, req["headers"]["x-request-operation"])
    .then(function (response) {
      res.send({
        firstValue: body["firstValue"],
        secondValue: body["secondValue"],
        operator: xRequestOperation,
        result: response
      })
      next()
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};