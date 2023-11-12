"use strict";
const ShoppinglistAbl = require("../../abl/shoppinglist-abl.js");

class ShoppinglistController {
    create(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ShoppinglistAbl.create(awid, dtoIn)
    }
    update(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ShoppinglistAbl.update(awid, dtoIn)
    }
    delete(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ShoppinglistAbl.delete(awid, dtoIn)
    }
    leave(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ShoppinglistAbl.leave(awid, dtoIn)
    }
    list(ucEnv) {
        let awid = ucEnv.uri._awid;
        let dtoIn = ucEnv._dtoIn;

        return ShoppinglistAbl.list(awid, dtoIn)
    }
}

module.exports = new ShoppinglistController();
