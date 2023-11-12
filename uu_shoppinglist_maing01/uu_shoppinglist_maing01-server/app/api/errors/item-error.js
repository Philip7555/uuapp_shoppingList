"use strict";
const ShoppinglistMainUseCaseError = require("./shoppinglist-main-use-case-error.js");

const Create = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}item/create`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Update = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}item/update`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Delete = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}item/delete`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

module.exports = {
  Create, Update, Delete
};
