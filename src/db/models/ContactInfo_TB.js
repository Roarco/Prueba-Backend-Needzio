const { Model, DataTypes, Sequelize } = require('sequelize');
const { TABLE_COUNTRY } = require('./Country_TB');
const { TABLE_APPUSER } = require('./AppUser_TB');

const TABLE_CONTACTINFO = 'ContactInfo_TB';

const ContactInfoSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    UserID : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TABLE_APPUSER,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    Address: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    CountryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TABLE_COUNTRY,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    City: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    CelPhone: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    EmergencyName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    EmergencyPhone: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
};

class ContactInfo extends Model {

    static associate(models) {
        this.belongsTo(models.AppUser, {
            foreignKey: 'UserID',
            as: 'appUser',
        });
        this.belongsTo(models.Country, {
            foreignKey: 'CountryID',
            as: 'country',
        });
    }


    static config(sequelize) {
        return {
            sequelize,
            modelName: "ContactInfo",
            tableName: TABLE_CONTACTINFO,
            timestamps: false,
        }
    }
}

module.exports = {
    ContactInfoSchema,
    ContactInfo,
    TABLE_CONTACTINFO,
};