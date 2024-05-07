'use strict';


/**
 *
 * body Api_body Perform Operation Request
 * xRequestOperation String 
 * returns Result
 **/
exports.execute = function (body, xRequestOperation) {
  return new Promise(function (resolve, reject) {
    try {
      //I'm using eval to use the xRequestOperation as an operator
      const result = eval(`${body["firstValue"]} ${xRequestOperation} ${body["secondValue"]}`)
      resolve(result)
    } catch (error) {
      reject(error)
    }
  });
}

