const { Model, DataTypes, Sequelize } = require("sequelize");

const PLACES_TABLE = "places";

const PlaceSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Place extends Model {
  static associate(models) {
    this.hasMany(models.Mutant, {
      as: "mutants",
      foreignKey: "placeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLACES_TABLE,
      modelName: "Place",
      timestamps: false,
    };
  }
}

module.exports = { PLACES_TABLE, PlaceSchema, Place };
