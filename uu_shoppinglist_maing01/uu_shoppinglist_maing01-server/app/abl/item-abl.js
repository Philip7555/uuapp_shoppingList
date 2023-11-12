const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;

const Errors = require("../api/errors/item-error.js");

const WARNINGS = {
  createUnsupportedKeys: {code: `${Errors.Create.UC_CODE}unsupportedKeys`,},
  updadeUnsupportedKeys: {code: `${Errors.Update.UC_CODE}unsupportedKeys`,},
  deleteUnsupportedKeys: {code: `${Errors.Delete.UC_CODE}unsupportedKeys`,},
};

class ItemAbl {
    constructor() {
        this.validator = Validator.load();
    }
    create(awid, dtoIn) {
        let validationResult = this.validator.validate("itemCreateDtoInType", dtoIn);
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
        let validationResult = this.validator.validate("itemUpdateDtoInType", dtoIn);
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
        let validationResult = this.validator.validate("itemDeleteDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.deleteUnsupportedKeys.code,
            Errors.Delete.InvalidDtoIn
        );
        
        let dtoOut = {...dtoIn, awid, uuAppErrorMap}
        return dtoOut
    }
}
module.exports = new ItemAbl();