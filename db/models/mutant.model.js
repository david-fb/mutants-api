const { Model, DataTypes, Sequelize } = require("sequelize");

const { VEHICLES_TABLE } = require("./vehicle.model");
const { PLACES_TABLE } = require("./place.model");

const MUTANTS_TABLE = "mutants";

const MutantSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  alias: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  type: {
    allowNull: false,
    type: DataTypes.ENUM("hero", "villain"),
  },
  condition: {
    allowNull: false,
    type: DataTypes.ENUM("freedom", "arrested ", "unknown"),
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  vehicleId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "vehicle_id",
    references: {
      model: VEHICLES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  placeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "place_id",
    references: {
      model: PLACES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Mutant extends Model {
  static associate(models) {
    this.belongsTo(models.Vehicle, { as: "vehicle" });
    this.belongsTo(models.Place, { as: "place" });
    this.belongsToMany(models.Power, {
      as: "powers",
      through: models.MutantPower,
      foreignKey: "mutantId",
      otherKey: "powerId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MUTANTS_TABLE,
      modelName: "Mutant",
      timestamps: false,
    };
  }
}

module.exports = { MUTANTS_TABLE, MutantSchema, Mutant };
