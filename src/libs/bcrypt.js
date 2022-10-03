const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    if (password.length < 8) {
        throw new Error('Password must be 8 characters or longer');
    }

    return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    comparePassword
};