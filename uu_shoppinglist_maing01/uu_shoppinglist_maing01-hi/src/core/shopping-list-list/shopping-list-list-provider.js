//@@viewOn:imports
import ShoppingListListContext from "./shopping-list-list-context";
import { useUserContext } from "../user-list/user-context";
import { createComponent, useDataList, useMemo  } from "uu5g05";
import Config from "./config/config";
import Calls from "calls";
//@@viewOff:imports

const ShoppingListListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const shoppingListDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        loadNext: handleLoadNext,
        create: handleCreate,
        update: handleUpdate,
        delete: handleDelete,
      },
      pageSize: 10,
    });
    
    function handleLoad(dtoIn) {
      return Calls.Shoppinglist.list(dtoIn);
    }

    function handleLoadNext(dtoIn) {
      return Calls.Shoppinglist.list(dtoIn);
    }

    function handleCreate(values) {
      return Calls.Shoppinglist.create(values);
    }

    async function handleUpdate(values) {
      return Calls.Shoppinglist.update(values);
    }

    function handleDelete(joke) {
      const dtoIn = { id: joke.id };
      return Calls.Shoppinglist.delete(dtoIn, props.baseUri);
    }
    console.log("ShoppingListListProvider - shoppingListDataList")
    console.log(shoppingListDataList)
    console.log(shoppingListDataList.data)
    
    /*
    const { loggedUser } = useUserContext();
    const userShoppingList = useMemo(() => {
      return shoppingListList.filter((shoppingList) => {
        return shoppingList.owner === loggedUser.id || shoppingList.memberList.includes(loggedUser.id);
      });
    }, [loggedUser, shoppingListList]);
    */
    //@@viewOn:render
    return (
      <ShoppingListListContext.Provider value={shoppingListDataList}>
        {typeof props.children === "function" ? props.children(value) : props.children}
      </ShoppingListListContext.Provider>
    );
    //return typeof props.children === "function" ? props.children(shoppingListDataList) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListListProvider };
export default ShoppingListListProvider;
//@@viewOff:exports
/*
//@@viewOn:imports
import { createComponent, useState, useMemo } from "uu5g05";

import ShoppingListListContext from "./shopping-list-list-context";
import { useUserContext } from "../user-list/user-context";

import Config from "./config/config";
//@@viewOff:imports

const INITIAL_VALUE = [];

export const ShoppingListListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [shoppingListList, setShoppingListList] = useState(INITIAL_VALUE);

    const { loggedUser } = useUserContext();

    const userShoppingList = useMemo(() => {
      return shoppingListList.filter((shoppingList) => {
        return shoppingList.owner === loggedUser.id || shoppingList.memberList.includes(loggedUser.id);
      });
    }, [loggedUser, shoppingListList]);

    const value = {
      shoppingListList,
      userShoppingList,
      handleCreate: (dtoIn) => handleCreate(dtoIn, setShoppingListList),
      handleUpdate: (dtoIn) => handleUpdate(dtoIn, setShoppingListList),
      handleToggleState: (dtoIn) => handleToggleState(dtoIn, setShoppingListList),
      handleDelete: (dtoIn) => handleDelete(dtoIn, setShoppingListList),
    };
    //@@viewOff:private

    //@@viewOn:render
    return (
      <ShoppingListListContext.Provider value={value}>
        {typeof props.children === "function" ? props.children(value) : props.children}
      </ShoppingListListContext.Provider>
    );
    //@@viewOff:render
  },
});

function handleCreate(dtoIn, setShoppingListList) {
  setShoppingListList((current) => {
    const newSchoppingListList = current.slice();
    newSchoppingListList.push(dtoIn);
    return newSchoppingListList;
  });
}

function handleUpdate(dtoIn, setShoppingListList) {
  setShoppingListList((current) => {
    const newSchoppingListList = current.slice();
    const shoppingListIndex = newSchoppingListList.findIndex((item) => item.id === dtoIn.id);
    newSchoppingListList[shoppingListIndex] = dtoIn;
    return newSchoppingListList;
  });
}

function handleToggleState(dtoIn, setShoppingListList) {
  setShoppingListList((current) => {
    const newSchoppingListList = current.slice();
    const shoppingListIndex = newSchoppingListList.find((item) => item.id === dtoIn.id);
    dtoIn.archived = !dtoIn.archived;
    newSchoppingListList[shoppingListIndex] = dtoIn;
    return newSchoppingListList;
  });
}

function handleDelete(dtoIn, setShoppingListList) {
  setShoppingListList((current) => {
    const newSchoppingListList = current.slice();
    const index = newSchoppingListList.findIndex((item) => item.id === dtoIn.id);
    if (index >= 0) newSchoppingListList.splice(index, 1);
    return newSchoppingListList;
  });
}

export default ShoppingListListProvider;
*/