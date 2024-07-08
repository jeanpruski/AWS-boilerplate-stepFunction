'use strict';

module.exports.init = async () => {
  console.log('Lambda Init');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: '"init" executed successfully!',
    }),
  };
};

module.exports.process = async () => {
  console.log('Lambda Process');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: '"process" executed successfully!',
    }),
  };
};
