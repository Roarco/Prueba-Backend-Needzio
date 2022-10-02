const db  = require('../db/mysql');

const resolvers = {
    Query: {
        getAllTypeDocument_TB: async () => {
            const [rows, fields] = await db.promise().query('SELECT * FROM TypeDocument_TB');
            return rows;
        },
        getAllCountry_TB: async () => {
            const [rows, fields] = await db.promise().query('SELECT * FROM Country_TB');
            return rows;
        },
    },
    Mutation: {
        createTypeDocument_TB: async (root, args) => {
            const [rows, fields] = await db.promise().query('INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES (?)', [args.NameTypeDocument]);
            return args;
        },
        createCountry_TB: async (root, args) => {
            const [rows, fields] = await db.promise().query('INSERT INTO Country_TB (CountryCode, CountryName) VALUES (?, ?)', [args.CountryCode, args.CountryName]);
            return args;
        }
    },
};

module.exports = resolvers;