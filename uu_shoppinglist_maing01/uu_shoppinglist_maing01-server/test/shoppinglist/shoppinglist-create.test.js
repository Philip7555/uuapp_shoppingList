const { TestHelper } = require("uu_appg01_server-test");

beforeEach(async () => {
  await TestHelper.setup({sysStatesEnabled: false});
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
});

afterEach(async () => {
  await TestHelper.teardown();
});

describe("Testing the Shoppinglist create uuCmd...", () => {
  test("HDS", async () => {
    let session = await TestHelper.login("Authenticated", false);

    let dtoIn = {
      name: "My shopping list",
    };
    
    let result = await TestHelper.executePostCommand("shoppinglist/create", dtoIn, session);
  
    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toEqual({});
  });

  test("A1 - unsupportedKeys", async () => {
    let session = await TestHelper.login("Authenticated", false);

    let dtoIn = {
      name: "My shopping list",
      newKey: "new Key"
    };

    let result = await TestHelper.executePostCommand("shoppinglist/create", dtoIn, session);

    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toEqual({
      'uu-shoppinglist-main/shoppinglist/createunsupportedKeys': {
        type: 'warning',
        message: 'DtoIn contains unsupported keys.',
        paramMap: {"unsupportedKeyList": ["$.newKey"]}
      }
    });
  });

  test("A2 - invalidDtoIn", async () => {
    let session = await TestHelper.login("Authenticated", false);

    let dtoIn = {
    };

    expect.assertions(2)
    try{
      await TestHelper.executePostCommand("shoppinglist/create", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/create/invalidDtoIn");
      expect(e.message).toEqual("DtoIn is not valid.")
    }
  });
});
