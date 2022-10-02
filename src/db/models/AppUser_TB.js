const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_APPUSER = 'AppUser_TB';

const AppUserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    isMilitar: {
        type: DataTypes.BOOLEAN,
    },
    TimeCreate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    isTemporal: {
        type: DataTypes.BOOLEAN,
    },
    userName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
    },
    verificationToken: {
        type: DataTypes.STRING(100),
    }
}

class AppUser extends Model {
    static associate(models) {
        this.hasMany(models.UserDocument, {
            foreignKey: 'UserID',
            as: 'userDocument',
        })
        this.hasMany(models.ContactInfo, {
            foreignKey: 'UserID',
            as: 'contactInfo',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: "AppUser",
            tableName: TABLE_APPUSER,
            timestamps: false,
        };
    }
}

module.exports = {
    AppUserSchema,
    AppUser,
    TABLE_APPUSER,
};