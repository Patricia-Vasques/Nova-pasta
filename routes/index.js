const { Router } = require("express");
const rotasV1 = Router();
const usersRoutesV1 = require('./V1/usersRouts');

rotasV1.use(usersRoutesV1);

module.exports = rotasV1

