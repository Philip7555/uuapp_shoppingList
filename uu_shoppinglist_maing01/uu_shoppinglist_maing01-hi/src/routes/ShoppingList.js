//@@viewOn:imports
import { createVisualComponent, useSession} from "uu5g05";
import { useSubAppData, useSystemData } from "uu_plus4u5g02"
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ListProvider from "../bricks/shopinglistdetail/list-provider";
import ListView from "../bricks/shopinglistdetail/list-view";
import CreateView from "../bricks/shopinglistdetail/create-view";
//@@viewOff:imports

let ShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingList",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <ListProvider>
          {({ itemList, remove, rename, create, revalue }) => (
            <>
              <CreateView onCreate={create} style={{ maxWidth: 400, margin: "24px auto", display: "block" }} />
              <ListView itemList={itemList} onDelete={remove} onRename={rename} onValue={revalue} />
            </>
          )}
        </ListProvider>
      </>
    );
    //@@viewOff:render
  },
});

ShoppingList = withRoute(ShoppingList, { authenticated: true });

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports