"use strict";
const ItemAbl = require("../../abl/item-abl.js");

class ItemController {
    create(ucEnv) {
        return ItemAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession())
    }
    update(ucEnv) {
        return ItemAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession())
    }
    delete(ucEnv) {
        return ItemAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession())
    }
}

module.exports = new ItemController();
