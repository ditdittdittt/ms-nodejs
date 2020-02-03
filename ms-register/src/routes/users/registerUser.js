const express = require('express');
const { createHandler } = require("../../utils");
const { registerUserHandler: handler } = require('../../handlers');

const router = express.Router();

router.post('/users/register', createHandler(handler));

module.exports = router;
