const { TestHelper } = require("uu_appg01_server-test");
const testHelper = require("uu_appg01_server-test/src/test-helper");

let session 

beforeEach(async () => {
  await TestHelper.setup({sysStatesEnabled: false});
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  const dtoIn1 = {name: "My shopping list 1",};
  const dtoIn2 = {name: "My shopping list 2",};
  const dtoIn3 = {name: "My shopping list 3",};
  session = await TestHelper.login("Authenticated", false);
  await TestHelper.executePostCommand("shoppinglist/create", dtoIn1, session);
  await TestHelper.executePostCommand("shoppinglist/create", dtoIn2, session);
  await TestHelper.executePostCommand("shoppinglist/create", dtoIn3, session);
});

afterEach(async () => {
  await TestHelper.teardown();
});

describe("Testing the Shoppinglist list uuCmd...", () => {
  test("HDS", async () => {
    const dtoIn = {
    }

    const res = await TestHelper.executeGetCommand("shoppinglist/list", dtoIn, session);
    expect(res.status).toEqual(200);
    expect(res.data.uuAppErrorMap).toEqual({});
  });

  test("A1 - unsupportedKeys", async () => {
    const dtoIn = {
      newKey: "new Key"
    }

    const res = await TestHelper.executeGetCommand("shoppinglist/list", dtoIn, session);
    expect(res.status).toEqual(200);
    expect(res.data.uuAppErrorMap).toEqual({
      'uu-shoppinglist-main/shoppinglist/listunsupportedKeys': {
        type: 'warning',
        message: 'DtoIn contains unsupported keys.',
        paramMap: {"unsupportedKeyList": ["$.newKey"]}
      }
    });
  });

  test("A2 - invalidDtoIn", async () => {
    let dtoIn = {
      pageInfo: {
        pageIndex: "všechny",
        pageSize: "velké"
      } 
    }

    expect.assertions(2)
    try{
      await TestHelper.executeGetCommand("shoppinglist/list", dtoIn, session);
    }catch (e){
      expect(e.code).toEqual("uu-shoppinglist-main/shoppinglist/list/invalidDtoIn");
      expect(e.message).toEqual("DtoIn is not valid.")
    }
  });
});
