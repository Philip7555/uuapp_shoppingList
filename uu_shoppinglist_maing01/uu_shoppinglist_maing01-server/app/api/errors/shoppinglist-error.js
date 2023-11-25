"use strict";
const ShoppinglistMainUseCaseError = require("./shoppinglist-main-use-case-error.js");

const Create = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/create`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Update = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/update`,

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
  }
};

const Delete = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/delete`,

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
  }
};

const Leave = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/leave`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Leave.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Leave.UC_CODE}shoppinglistDoesNotExist`;
      this.message = "Shoppinglist does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Leave.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  }
};

const Get = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/get`,
  
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}shoppinglistDoesNotExist`;
      this.message = "Shoppinglist does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  }
};

const List = {
  UC_CODE: `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/list`,
  
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

module.exports = {
  Create, Update, Delete, Leave, Get, List
};
