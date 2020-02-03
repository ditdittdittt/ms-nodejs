
const { authHelper, statusCode } = require('../../utils');

const verifyHandlers = async (req, res) => {

  const { 
    headers: {
      token
    }
  } = req;
  
  const verifyToken = await authHelper.verify(token);

  res.status(statusCode.OK);
  res.send({verifyToken});
};

module.exports = verifyHandlers;
