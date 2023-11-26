//@@viewOn:imports
import { createVisualComponent, Utils} from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ShoppingListDetail from "../bricks/shopinglistdetail/shopping-list-detail.js";
//@@viewOff:imports

let ShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingList",
  //@@viewOff:statics

  render(props) {
    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
      <RouteBar />
      <div className={Config.Css.css({ padding: "16px 32px" })}>
        <ShoppingListDetail {...props.params} />
      </div>
    </div>
    );
    //@@viewOff:render
  },
});

ShoppingList = withRoute(ShoppingList, { authenticated: true });

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports