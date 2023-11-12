"use strict";
const ItemAbl = require("../../abl/item-abl.js");

class ItemController {
    create(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ItemAbl.create(awid, dtoIn)
    }
    update(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ItemAbl.update(awid, dtoIn)
    }
    delete(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ItemAbl.delete(awid, dtoIn)
    }
}

module.exports = new ItemController();
