const { Model, DataTypes, Sequelize } = require("sequelize");

const POWERS_TABLE = "powers";

const PowerSchema = {
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

class Power extends Model {
  static associate(models) {
    this.belongsToMany(models.Mutant, {
        as: "mutants",
        through: models.MutantPower,
        foreignKey: "powerId",
        otherKey: "mutantId",
      });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: POWERS_TABLE,
      modelName: "Power",
      timestamps: false,
    };
  }
}

module.exports = { POWERS_TABLE, PowerSchema, Power };
