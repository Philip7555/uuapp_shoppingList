const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;

const Errors = require("../api/errors/shoppinglist-error.js");
const Warnings = require("../api/warnings/shoppinglist-warning.js");

class ShoppinglistAbl {
    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao("shoppinglist");
    }

    async create(awid, dtoIn, session) {
        let uuAppErrorMap = {};

        let validationResult = this.validator.validate("shoppinglistCreateDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Create.UnsupportedKeys.code,
            Errors.Create.InvalidDtoIn
        );
        const uuIdentity = session.getIdentity().getUuIdentity();
        const uuIdentityName = session.getIdentity().getName();

        const uuObject = {
            name: dtoIn.name,
            awid: awid,
            uuIdentity: uuIdentity,
            uuIdentityName: uuIdentityName,
            archived:false,
            ItemList: [],
            ReadersIdentitys: []
        };

        const result = await this.dao.create(uuObject)

        const dtoOut = {...result, uuAppErrorMap}
        return dtoOut
    }

    async update(awid, dtoIn, session) {
        let uuAppErrorMap = {};

        const validationResult = this.validator.validate("shoppinglistUpdateDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Update.UnsupportedKeys.code,
            Errors.Update.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.id);
        if (!shoppinglist) {
            throw new Errors.Update.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        if (shoppinglist.uuIdentity !== uuIdentity) {
            throw new Errors.Update.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        const uuObject = {
            ...dtoIn,
            awid,
        };

        const result = await this.dao.update(uuObject);

        const dtoOut = { ...result, uuAppErrorMap };
        return dtoOut;
    }

    async delete(awid, dtoIn, session) {
        let uuAppErrorMap = {};

        const validationResult = this.validator.validate("shoppinglistDeleteDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Delete.UnsupportedKeys.code,
            Errors.Delete.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.id);
        if (!shoppinglist) {
            throw new Errors.Delete.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        if (shoppinglist.uuIdentity !== uuIdentity) {
            throw new Errors.Delete.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        const result = await this.dao.delete(awid, dtoIn.id);

        const dtoOut = { ...result, uuAppErrorMap };
        return dtoOut;
    }

    async leave(awid, dtoIn, session) {
        let uuAppErrorMap = {};

        const validationResult = this.validator.validate("shoppinglistLeaveDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Leave.UnsupportedKeys.code,
            Errors.Leave.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.id);
        if (!shoppinglist) {
            throw new Errors.Leave.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        const Index = shoppinglist.ReadersIdentitys.findIndex(a => a.uuIdentity === uuIdentity);
        if (Index<0) {
            throw new Errors.Leave.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        shoppinglist.ReadersIdentitys.splice(Index, 1);
        
        const result = await this.dao.update(shoppinglist);

        const dtoOut = { ...result, uuAppErrorMap };
        return dtoOut;
    }

    async get(awid, dtoIn, session) {
        let uuAppErrorMap = {};

        const validationResult = this.validator.validate("shoppinglistGetDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            uuAppErrorMap,
            Warnings.Get.UnsupportedKeys.code,
            Errors.Get.InvalidDtoIn
        );

        const shoppinglist = await this.dao.get(awid, dtoIn.id);
        if (!shoppinglist) {
            throw new Errors.Leave.ShoppinglistDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
        }

        const uuIdentity = session.getIdentity().getUuIdentity();
        const Index = shoppinglist.ReadersIdentitys.findIndex(a => a.uuIdentity === uuIdentity);
        if ((Index<0) && (shoppinglist.uuIdentity !== uuIdentity)) {
            throw new Errors.Leave.UserNotAuthorized({ uuAppErrorMap }, { uuIdentity });
        }

        const dtoOut = {...shoppinglist, uuAppErrorMap}
        return dtoOut
    }

    async list(awid, dtoIn, session) {
        let uuAppErrorMap = {};

        const validationResult = this.validator.validate("shoppinglistListDtoInType", dtoIn);
        uuAppErrorMap = ValidationHelper.processValidationResult(
          dtoIn,
          validationResult,
          uuAppErrorMap,
          Warnings.List.UnsupportedKeys.code,
          Errors.List.InvalidDtoIn
        );

        if (!dtoIn.pageInfo) dtoIn.pageInfo = {};
        dtoIn.pageInfo.pageSize ??= 1024;
        dtoIn.pageInfo.pageIndex ??= 0;

        const uuIdentity = session.getIdentity().getUuIdentity();
        const shoppinglists = await this.dao.list(awid, uuIdentity, dtoIn.pageInfo);

        shoppinglists.uuAppErrorMap = uuAppErrorMap;
        return shoppinglists;
    }
}
module.exports = new ShoppinglistAbl();