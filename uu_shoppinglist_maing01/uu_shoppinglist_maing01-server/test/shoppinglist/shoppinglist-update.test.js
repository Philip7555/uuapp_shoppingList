const { TestHelper } = require("uu_appg01_server-test");

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

describe("Testing the Shoppinglist update uuCmd...", () => {
  test("HDS", async () => {
    const dtoIn = {
      id: result.id,
      name: "new name",
      archived: true
    }

    const res = await TestHelper.executePostCommand("shoppinglist/update", dtoIn, session);
    expect(res.status).toEqual(200);
    expect(res.data.uuAppErrorMap).toEqual({});
  });

  test("A1 - unsupportedKeys", async () => {
    const dtoIn = {
      id: result.id,
      name: "new name",
      archived: true,
      newKey: "new Key"
    }

    const res = await TestHelper.executePostCommand("shoppinglist/update", dtoIn, session);
    expect(res.status).toEqual(200);
    expect(res.data.uuAppErrorMap).toEqual({
      'uu-shoppinglist-main/shoppinglist/updateunsupportedKeys': {
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
      await TestHelper.executePostCommand("shoppinglist/update", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/update/invalidDtoIn");
      expect(e.message).toEqual("DtoIn is not valid.")
    }
  });

  test("A3 - shoppinglistDoesNotExist", async () => {
    let dtoIn = {
      id: result.id === "6570718c720e0267c4ff6325" ? "6570718c720e0267c4ff6324" : "6570718c720e0267c4ff6325",
      name: "new name",
      archived: true,
    };

    expect.assertions(2)
    try{
      await TestHelper.executePostCommand("shoppinglist/update", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/update/shoppinglistDoesNotExist");
      expect(e.message).toEqual("Shoppinglist does not exist.")
    }
  });

  test("A4 - userNotAuthorized", async () => {
    let dtoIn = {
      id: result.id,
      name: "new name",
      archived: true,
    };
    session = await TestHelper.login("Authenticated2", false);
    expect.assertions(2)
    try{
      await TestHelper.executePostCommand("shoppinglist/update", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/update/userNotAuthorized");
      expect(e.message).toEqual("User not authorized.")
    }
  });
});
