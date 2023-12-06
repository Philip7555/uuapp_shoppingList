const { TestHelper } = require("uu_appg01_server-test");
const testHelper = require("uu_appg01_server-test/src/test-helper");

let result
let session 

beforeEach(async () => {
  await TestHelper.setup({sysStatesEnabled: false});
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  const dtoIn = {
    name: "My shopping list",
  };
  session = await TestHelper.login("Authenticated", false);
  result = await TestHelper.executePostCommand("shoppinglist/create", dtoIn, session);
});

afterEach(async () => {
  await TestHelper.teardown();
});

describe("Testing the Shoppinglist get uuCmd...", () => {
  test("HDS", async () => {
    const dtoIn = {
      id: result.id
    }

    const res = await TestHelper.executeGetCommand("shoppinglist/get", dtoIn, session);
    expect(res.status).toEqual(200);
    expect(res.data.uuAppErrorMap).toEqual({});
  });

  test("A1 - unsupportedKeys", async () => {
    const dtoIn = {
      id: result.id,
      newKey: "new Key"
    }

    const res = await TestHelper.executeGetCommand("shoppinglist/get", dtoIn, session);
    expect(res.status).toEqual(200);
    expect(res.data.uuAppErrorMap).toEqual({
      'uu-shoppinglist-main/shoppinglist/getunsupportedKeys': {
        type: 'warning',
        message: 'DtoIn contains unsupported keys.',
        paramMap: {"unsupportedKeyList": ["$.newKey"]}
      }
    });
  });

  test("A2 - invalidDtoIn", async () => {
    let dtoIn = {
    };

    expect.assertions(2)
    try{
      await TestHelper.executeGetCommand("shoppinglist/get", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/get/invalidDtoIn");
      expect(e.message).toEqual("DtoIn is not valid.")
    }
  });

  test("A3 - shoppinglistDoesNotExist", async () => {
    let dtoIn = {
      id: result.id === "6570718c720e0267c4ff6325" ? "6570718c720e0267c4ff6324" : "6570718c720e0267c4ff6325"
    };

    expect.assertions(2)
    try{
      await TestHelper.executeGetCommand("shoppinglist/get", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/get/shoppinglistDoesNotExist");
      expect(e.message).toEqual("Shoppinglist does not exist.")
    }
  });
});
