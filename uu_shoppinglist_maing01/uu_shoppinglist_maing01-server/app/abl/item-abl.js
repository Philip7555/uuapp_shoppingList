const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const crypto = require("crypto");

const Errors = require("../api/errors/item-error.js");
const Warnings = require("../api/warnings/item-warning.js");

class ItemAbl {
    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao("shoppinglist");
    }

    async create(awid, dtoIn, session) {
        let uuAppErrorMap = {}

        let validationResult = this.validator.validate("itemCreateDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Create.UnsupportedKeys.code,
            Errors.Create.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.ShoppinglistID);
        if (!shoppinglist) {
            throw new Errors.Create.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        const Index = shoppinglist.ReadersIdentitys.findIndex(a => a.uuIdentity === uuIdentity);
        if ((Index < 0) && (shoppinglist.uuIdentity !== uuIdentity)) {
            throw new Errors.Create.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        shoppinglist.ItemList.push({
            id: crypto.randomBytes(16).toString("hex"),
            name: dtoIn.ItemName,
            solved: false
        })

        const result = await this.dao.update(shoppinglist);

        const dtoOut = { ...result, uuAppErrorMap };
        return dtoOut;
    }

    async update(awid, dtoIn, session) {
        let uuAppErrorMap = {}

        let validationResult = this.validator.validate("itemUpdateDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Update.UnsupportedKeys.code,
            Errors.Update.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.ShoppinglistID);
        if (!shoppinglist) {
            throw new Errors.Update.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.ShoppinglistID });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        const Index = shoppinglist.ReadersIdentitys.findIndex(a => a.uuIdentity === uuIdentity);
        if ((Index < 0) && (shoppinglist.uuIdentity !== uuIdentity)) {
            throw new Errors.Update.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        const ItemIndex = shoppinglist.ItemList.findIndex(a => a.id === dtoIn.Item.id);
        if (ItemIndex < 0) {
            throw new Errors.Update.ItemDoesNotExist({ uuAppErrorMap }, { id: dtoIn.Item.id });
        }
        let Item = shoppinglist.ItemList[ItemIndex]
        Item.name = dtoIn.Item.name ? dtoIn.Item.name : Item.name
        Item.solved = dtoIn.Item.solved ? dtoIn.Item.solved : Item.solved
        shoppinglist.ItemList[ItemIndex] = Item
    
        const result = await this.dao.update(shoppinglist);

        const dtoOut = { ...result, uuAppErrorMap };
        return dtoOut;
    }

    async delete(awid, dtoIn, session) {
        let uuAppErrorMap = {}

        let validationResult = this.validator.validate("itemDeleteDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Delete.UnsupportedKeys.code,
            Errors.Delete.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.ShoppinglistID);
        if (!shoppinglist) {
            throw new Errors.Delete.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.ShoppinglistID });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        const Index = shoppinglist.ReadersIdentitys.findIndex(a => a.uuIdentity === uuIdentity);
        if ((Index < 0) && (shoppinglist.uuIdentity !== uuIdentity)) {
            throw new Errors.Delete.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        const ItemIndex = shoppinglist.ItemList.findIndex(a => a.id === dtoIn.ItemID);
        if (ItemIndex < 0) {
            throw new Errors.Delete.ItemDoesNotExist({ uuAppErrorMap }, { id: dtoIn.ItemID });
        }
        
        shoppinglist.ItemList.splice(ItemIndex, 1);

        const result = await this.dao.update(shoppinglist);

        const dtoOut = { ...result, uuAppErrorMap };
        return dtoOut;
    }
}
module.exports = new ItemAbl();