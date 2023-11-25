const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ShoppinglistMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, public: 1 });
  }

  async create(shoppinglist) {
    return await super.insertOne(shoppinglist);
  }

  async get(awid, id) {
    return await super.findOne({ awid, id });
  }

  async delete(awid, id) {
    return await super.deleteOne({ awid, id });
  }

  async list(awid,uuIdentity, pageInfo = {}) {
    const filter = { awid: awid, $or: [{ uuIdentity : uuIdentity }, { "ReadersIdentitys.uuIdentity" : uuIdentity } ]};
    return await super.find(filter, pageInfo);
  }

  async update(shoppinglist) {
    const filter = { awid: shoppinglist.awid, id: shoppinglist.id };
    return await super.findOneAndUpdate(filter, shoppinglist, "NONE");
  }
}

module.exports = ShoppinglistMongo;
