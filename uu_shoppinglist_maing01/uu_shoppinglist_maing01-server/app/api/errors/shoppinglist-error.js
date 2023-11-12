"use strict";
const ShoppinglistMainUseCaseError = require("./shoppinglist-main-use-case-error.js");


const Create = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shppinglist/create`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Update = {
    UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shppinglist/update`,
  
    InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Update.UC_CODE}/invalidDtoIn`;
        this.message = "DtoIn is not valid.";
      }
    }
  };
  
const Delete = {
    UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shppinglist/delete`,
  
    InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Delete.UC_CODE}/invalidDtoIn`;
        this.message = "DtoIn is not valid.";
      }
    }
  };
  
  const Leave = {
    UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shppinglist/leave`,
  
    InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Leave.UC_CODE}/invalidDtoIn`;
        this.message = "DtoIn is not valid.";
      }
    }
  };

  const List = {
    UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shppinglist/list`,
  
    InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${List.UC_CODE}/invalidDtoIn`;
        this.message = "DtoIn is not valid.";
      }
    }
  };

module.exports = {
  Create, Update, Delete, Leave, List
};
