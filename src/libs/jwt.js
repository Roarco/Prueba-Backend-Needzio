const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const generateToken = (user) => {
    return jwt.sign(user, jwtSecret);;
};


module.exports = {
    generateToken
};