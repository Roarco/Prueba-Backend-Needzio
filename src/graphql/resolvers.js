const { models } = require("../libs/sequelize");
const { GraphQLScalarType } = require("graphql");
const { hashPassword, comparePassword } = require("../libs/bcrypt");
const { generateToken } = require("../libs/jwt");

const resolvers = {
    Query: {
        getAllTypeDocument_TB: async () => {
            return await models.TypeDocument.findAll();
        },
        getAllCountry_TB: async () => {
            return await models.Country.findAll();
        },
        getAllAppUser_TB: async () => {
            return await models.AppUser.findAll();
        },
        getAllUserDocument_TB: async () => {
            return await models.UserDocument.findAll();
        },
        getAllContactInfo_TB: async () => {
            return await models.ContactInfo.findAll();
        },

        getTypeDocument_TB: async (parent, args) => {
            const typeDocument = await models.TypeDocument.findByPk(args.id);

            if (!typeDocument) {
                throw new Error("TypeDocument not found");
            }

            return typeDocument;
        },
        getCountry_TB: async (parent, args) => {
            const country = await models.Country.findByPk(args.id);

            if (!country) {
                throw new Error("Country not found");
            }

            return country;
        },
        getAppUser_TB: async (parent, args) => {
            const appUser = await models.AppUser.findByPk(args.id);

            if (!appUser) {
                throw new Error("AppUser not found");
            }

            return appUser;
        },
        getUserDocument_TB: async (parent, args) => {
            const userDocument = await models.UserDocument.findByPk(args.id);

            if (!userDocument) {
                throw new Error("UserDocument not found");
            }

            return userDocument;
        },
        getContactInfo_TB: async (parent, args) => {
            const contactInfo = await models.ContactInfo.findByPk(args.id);

            if (!contactInfo) {
                throw new Error("ContactInfo not found");
            }

            return contactInfo;
        },
    },
    Mutation: {
        createTypeDocument_TB: async (root, args) => {
            return await models.TypeDocument.create(args);
        },
        createCountry_TB: async (root, args) => {
            return await models.Country.create(args);
        },
        createAppUser_TB: async (root, args) => {
            args.password = await hashPassword(args.password);
            return await models.AppUser.create(args);
        },
        createUserDocument_TB: async (root, args) => {
            return await models.UserDocument.create(args);
        },
        createContactInfo_TB: async (root, args) => {
            return await models.ContactInfo.create(args);
        },

        updateTypeDocument_TB: async (root, args) => {
            const typeDocument = await models.TypeDocument.findByPk(args.id);

            if (!typeDocument) {
                throw new Error("TypeDocument not found");
            }

            return await typeDocument.update(args);
        },

        updateCountry_TB: async (root, args) => {
            const country = await models.Country.findByPk(args.id);

            if (!country) {
                throw new Error("Country not found");
            }

            return await country.update(args);
        },

        updateAppUser_TB: async (root, args) => {
            const appUser = await models.AppUser.findByPk(args.id);

            if (!appUser) {
                throw new Error("AppUser not found");
            }

            //validate password
            if (args.password) {
                args.password = await hashPassword(args.password);
            }

            return await appUser.update(args);
        },

        updateUserDocument_TB: async (root, args) => {
            const userDocument = await models.UserDocument.findByPk(args.id);

            if (!userDocument) {
                throw new Error("UserDocument not found");
            }

            return await userDocument.update(args);
        },

        updateContactInfo_TB: async (root, args) => {
            const contactInfo = await models.ContactInfo.findByPk(args.id);

            if (!contactInfo) {
                throw new Error("ContactInfo not found");
            }

            return await contactInfo.update(args);
        },

        deleteTypeDocument_TB: async (root, args) => {
            const typeDocument = await models.TypeDocument.findByPk(args.id);

            if (!typeDocument) {
                throw new Error("TypeDocument not found");
            }

            return await typeDocument.destroy();
        },

        deleteCountry_TB: async (root, args) => {
            const country = await models.Country.findByPk(args.id);

            if (!country) {
                throw new Error("Country not found");
            }

            return await country.destroy();
        },

        deleteAppUser_TB: async (root, args) => {
            const appUser = await models.AppUser.findByPk(args.id);

            if (!appUser) {
                throw new Error("AppUser not found");
            }

            return await appUser.destroy();
        },

        deleteUserDocument_TB: async (root, args) => {
            const userDocument = await models.UserDocument.findByPk(args.id);

            if (!userDocument) {
                throw new Error("UserDocument not found");
            }

            return await userDocument.destroy();
        },

        deleteContactInfo_TB: async (root, args) => {
            const contactInfo = await models.ContactInfo.findByPk(args.id);

            if (!contactInfo) {
                throw new Error("ContactInfo not found");
            }

            return await contactInfo.destroy();
        },

        loginAppUser_TB: async (root, args) => {
            const appUser = await models.AppUser.findOne({
                where: { userName: args.userName },
            });
            if (!appUser) {
                throw new Error("User not found");
            }

            const isValid = await comparePassword(args.password, appUser.password);
            if (!isValid) {
                throw new Error("Invalid password");
            }

            const payload = {
                id: appUser.id,
                userName: appUser.userName,
                email: appUser.email,
                LastName: appUser.LastName,
                Name: appUser.Name,
                isMilitar: appUser.isMilitar,
                isTemporal: appUser.isTemporal,
            };

            const token = generateToken(payload);

            await appUser.update({ emailVerified: true , verificationToken: token});

            return {
                token,
            };
        },

    },
    DateTime: new GraphQLScalarType({
        name: "DateTime",
        description: "DateTime custom scalar type",
        parseValue(value) {
            return new Date(value); // value from the client
        },
    }),
    AppUser_TB: {
        contactInfo: async (parent) => {
            return await models.ContactInfo.findOne({
                where: {
                    UserID: parent.id,
                },
            });
        },
        identification: async (parent) => {
            return await models.UserDocument.findOne({
                where: {
                    UserID: parent.id,
                },
            });
        },
    },
    ContactInfo_TB: {
        country: async (parent) => {
            return await models.Country.findOne({
                where: {
                    id: parent.CountryID,
                },
            });
        },
        user: async (parent) => {
            return await models.AppUser.findOne({
                where: {
                    id: parent.UserID,
                },
            });
        },
    },
    UserDocument_TB: {
        typeDocument: async (parent) => {
            return await models.TypeDocument.findOne({
                where: {
                    id: parent.TypeDocumentID,
                },
            });
        },
        user: async (parent) => {
            return await models.AppUser.findOne({
                where: {
                    id: parent.UserID,
                },
            });
        },
    },
};

module.exports = resolvers;
