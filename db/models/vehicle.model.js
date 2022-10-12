const { Model, DataTypes, Sequelize } = require("sequelize");

const VEHICLES_TABLE = "vehicles";

const VehicleSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Vehicle extends Model {
  static associate(models) {
    this.hasMany(models.Mutant, {
      as: "mutants",
      foreignKey: "vehicleId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VEHICLES_TABLE,
      modelName: "Vehicle",
      timestamps: false,
    };
  }
}

module.exports = { VEHICLES_TABLE, VehicleSchema, Vehicle };
