const { TypeDocument, TypeDocumentSchema } = require('./TypeDocument_TB')
const { AppUser, AppUserSchema } = require('./AppUser_TB');
const { Country, CountrySchema } = require('./Country_TB');
const { UserDocument, UserDocumentSchema } = require('./UserDocument_TB');
const { ContactInfo, ContactInfoSchema } = require('./ContactInfo_TB');

function setupModels(sequelize) {
    TypeDocument.init(TypeDocumentSchema, TypeDocument.config(sequelize));
    AppUser.init(AppUserSchema, AppUser.config(sequelize));
    Country.init(CountrySchema, Country.config(sequelize));
    UserDocument.init(UserDocumentSchema, UserDocument.config(sequelize));
    ContactInfo.init(ContactInfoSchema, ContactInfo.config(sequelize));

    TypeDocument.associate(sequelize.models);
    UserDocument.associate(sequelize.models);
    AppUser.associate(sequelize.models);
    Country.associate(sequelize.models);
    ContactInfo.associate(sequelize.models);
}

module.exports = setupModels;