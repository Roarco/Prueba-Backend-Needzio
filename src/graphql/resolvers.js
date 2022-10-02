const { models } = require('../libs/sequelize')

const resolvers = {
    Query: {
        getAllTypeDocument_TB: async () => {
            return await models.TypeDocument.findAll();
        },
        getAllCountry_TB: async () => {
            return await models.Country.findAll();
        },
    },
    Mutation: {
        createTypeDocument_TB: async (root, args) => {
            return await models.TypeDocument.create(args);
        },
        createCountry_TB: async (root, args) => {
            return await models.Country.create(args);
        }
    },
};

module.exports = resolvers;