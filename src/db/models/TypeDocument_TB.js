const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_TYPEDOCUMENT = 'TypeDocument_TB';

const TypeDocumentSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    NameTypeDocument: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
};

class TypeDocument extends Model {
    static associate(models) {
        this.hasMany(models.UserDocument, {
            foreignKey: 'TypeDocumentID',
            as: 'userDocument',
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: "TypeDocument",
            tableName: TABLE_TYPEDOCUMENT,
            timestamps: false,
        };
    }
}

module.exports = {
    TypeDocumentSchema,
    TypeDocument,
    TABLE_TYPEDOCUMENT,
};