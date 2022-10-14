const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
const { Op, Sequelize } = require("sequelize");

class MutantsService {
  constructor() {}

  async create(data) {
    const mutant = await models.Mutant.create(data);
    if (data.hasOwnProperty("powersId") && data.powersId.length) {
      const promises = data.powersId.map(
        async (power) => await this.addPower(mutant.id, power)
      );
      await Promise.all(promises);
    }
    const res = await this.findById(mutant.id);
    return res;
  }

  async find() {
    const mutants = await models.Mutant.findAll({
      include: ["powers", "vehicle", "place"],
    });
    return {count: mutants.length, rows: mutants};
  }

  async findById(id) {
    const mutant = await models.Mutant.findByPk(id, {
      include: ["powers", "vehicle", "place"],
    });
    if (!mutant) throw boom.notFound("mutant not found");
    return mutant;
  }

  async findByAny(query) {
    const value = Object.values(query)[0];
    const result = await models.Mutant.findAll({
      include: ["powers", "vehicle", "place" ],
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${value}%`,
            },
          },
          {
            alias: {
              [Op.iLike]: `%${value}%`,
            },
          },
          {
            '$place.name$': {
              [Op.iLike]: `%${value}%`,
            },
          },
        ],
      },
    });
    return {count: result.length, rows: result};;
  }

  async update(id, changes) {
    let mutant = await this.findById(id); //Retrieve mutant from db
    if (changes.hasOwnProperty("powersId")) {
      //Check if object has property powersId
      const mutantPowers = mutant.powers; //Get powers saved from db
      const powersId = [...changes.powersId]; //Get powers from query

      //compare powers from query and db. get powers that are not saved
      const powersToAdd = powersId.filter((power) => {
        if (mutantPowers.length) {
          return mutantPowers.every((item) => item.id !== power);
        }
        return true;
      });

      //compare powers from db and query. get powers that are not in query
      const powersToRemove = mutantPowers
        .map((power) => {
          if (!powersId.includes(power.id)) {
            return power.id;
          }
          return null;
        })
        .filter((power) => power !== null);

      //If we have powers to add
      if (powersToAdd.length) {
        const promises = powersToAdd.map(
          async (power) => await this.addPower(id, power)
        );
        await Promise.all(promises);
      }
      //If we have powers to delete
      if (powersToRemove.length) {
        const promises = powersToRemove.map(
          async (power) => await this.removePower(id, power)
        );
        await Promise.all(promises);
      }
    }
    mutant = await this.findById(id); //Get mutant with power changes
    const mutantUpdated = await mutant.update(changes); //update mutant
    return mutantUpdated;
  }

  async addPower(mutantId, powerId) {
    const power = await models.Power.findByPk(powerId);
    if (!power) throw boom.notFound(`power ${powerId} not found`);
    await models.MutantPower.create({ mutantId, powerId });
  }

  async removePower(mutantId, powerId) {
    const power = await models.Power.findByPk(powerId);
    if (!power) throw boom.notFound(`power ${powerId} not found`);
    const item = await models.MutantPower.findOne({
      where: { mutantId, powerId },
    });
    await item.destroy();
  }

  async delete(id) {
    const mutant = await this.findById(id);
    mutant.destroy();
    return { status: true, message: "mutant has been deleted", id: id };
  }
}

module.exports = MutantsService;
