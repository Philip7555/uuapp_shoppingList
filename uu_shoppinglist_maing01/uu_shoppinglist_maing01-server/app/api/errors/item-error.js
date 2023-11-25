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
  },

  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}shoppinglistDoesNotExist`;
      this.message = "Shoppinglist does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
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
  },

  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}shoppinglistDoesNotExist`;
      this.message = "Shoppinglist does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  ItemDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}itemDoesNotExist`;
      this.message = "Item does not exist.";
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
  },

  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}shoppinglistDoesNotExist`;
      this.message = "Shoppinglist does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },

  ItemDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}itemDoesNotExist`;
      this.message = "Item does not exist.";
    }
  }
};

module.exports = {
  Create, Update, Delete
};
