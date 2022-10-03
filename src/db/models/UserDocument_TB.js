const { Model, DataTypes, Sequelize } = require('sequelize');
const { TABLE_TYPEDOCUMENT } = require('./TypeDocument_TB');
const { TABLE_APPUSER } = require('./AppUser_TB');

const TABLE_USERDOCUMENT = 'UserDocument_TB';

const UserDocumentSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TABLE_APPUSER,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    Document: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    TypeDocumentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TABLE_TYPEDOCUMENT,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    PlaceExpedition: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    DateExpedition: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};

class UserDocument extends Model {

    static associate(models) {
        this.belongsTo(models.AppUser, {
            foreignKey: 'UserID',
            as: 'appUser',
        });
        this.belongsTo(models.TypeDocument, {
            foreignKey: 'TypeDocumentID',
            as: 'typeDocument',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: "UserDocument",
            tableName: TABLE_USERDOCUMENT,
            timestamps: false,
        };
    }
}

module.exports = {
    UserDocumentSchema,
    UserDocument,
    TABLE_USERDOCUMENT,
};