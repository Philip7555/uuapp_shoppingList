const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;

const Errors = require("../api/errors/shoppinglist-error.js");

const WARNINGS = {
  createUnsupportedKeys: {code: `${Errors.Create.UC_CODE}unsupportedKeys`,},
  updadeUnsupportedKeys: {code: `${Errors.Update.UC_CODE}unsupportedKeys`,},
  deleteUnsupportedKeys: {code: `${Errors.Delete.UC_CODE}unsupportedKeys`,},
  leaveUnsupportedKeys: {code: `${Errors.Leave.UC_CODE}unsupportedKeys`,},
  listUnsupportedKeys: {code: `${Errors.List.UC_CODE}unsupportedKeys`,},

};

class ShoppinglistAbl {
    constructor() {
        this.validator = Validator.load();
    }
    create(awid, dtoIn) {
        let validationResult = this.validator.validate("shoppinglistCreateDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.createUnsupportedKeys.code,
            Errors.Create.InvalidDtoIn
        );
        
        let dtoOut = {...dtoIn, awid, uuAppErrorMap}
        return dtoOut
    }
    update(awid, dtoIn) {
        let validationResult = this.validator.validate("shoppinglistUpdateDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.updateUnsupportedKeys.code,
            Errors.Update.InvalidDtoIn
        );
        
        let dtoOut = {...dtoIn, awid, uuAppErrorMap}
        return dtoOut
    }
    delete(awid, dtoIn) {
        let validationResult = this.validator.validate("shoppinglistDeleteDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.deleteUnsupportedKeys.code,
            Errors.Delete.InvalidDtoIn
        );
        
        let dtoOut = {...dtoIn, awid, uuAppErrorMap}
        return dtoOut
    }
    leave(awid, dtoIn) {
        let validationResult = this.validator.validate("shoppinglistLeaveDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.leaveUnsupportedKeys.code,
            Errors.Leave.InvalidDtoIn
        );
        
        let dtoOut = {...dtoIn, awid, uuAppErrorMap}
        return dtoOut
    }
    list(awid, dtoIn) {
        let validationResult = this.validator.validate("shoppinglistListDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.listUnsupportedKeys.code,
            Errors.List.InvalidDtoIn
        );
        
        let dtoOut = {...dtoIn, awid, uuAppErrorMap}
        return dtoOut
    }
}
module.exports = new ShoppinglistAbl();