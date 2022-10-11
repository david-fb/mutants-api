const { Model, DataTypes, Sequelize } = require("sequelize");

const { MUTANTS_TABLE } = require("./mutant.model");
const { POWERS_TABLE } = require("./power.model");

const MUTANT_POWER_TABLE = "mutants_powers";

const MutantPowerSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  mutantId: {
    field: "mutant_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MUTANTS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelte: "CASCADE",
  },
  powerId: {
    field: "power_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POWERS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelte: "CASCADE",
  },
};

class MutantPower extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MUTANT_POWER_TABLE,
      modelName: "MutantPower",
      timestamps: false,
    };
  }
}

module.exports = { MUTANT_POWER_TABLE, MutantPowerSchema, MutantPower };
