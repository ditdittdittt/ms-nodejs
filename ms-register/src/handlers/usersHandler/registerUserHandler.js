const bcrypt = require('bcrypt');
const { authHelper, statusCode } = require('../../utils');

const registerUserHandler = async (req, res) => {
  const {
    dbConnector
  } = res.locals;

  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashed = await bcrypt.hashSync(password, salt);

  const payload = {
    username,
    password: hashed
  };

  const save = await dbConnector.insertOne(payload);
  const token = await authHelper({ username, id: save.insertedId });

  res.status(statusCode.CREATED);
  res.send({token});
};

module.exports = registerUserHandler;
