const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_COUNTRY = 'Country_TB';

const CountrySchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    CountryCode: {
        type: DataTypes.STRING(4),
        allowNull: false,
        unique: true,
    },
    CountryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    }
}

class Country extends Model {
    static associate(models) {
        this.hasMany(models.ContactInfo, {
            foreignKey: 'CountryID',
            as: 'contactInfo',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: "Country",
            tableName: TABLE_COUNTRY,
            timestamps: false,
        };
    }
}

module.exports = {
    CountrySchema,
    Country,
    TABLE_COUNTRY,
}