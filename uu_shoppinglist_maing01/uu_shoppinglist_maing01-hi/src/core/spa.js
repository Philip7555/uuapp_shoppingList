//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import UserProvider from "./user-list/user-provider.js";

import Config from "./config/config.js";
import ShoppingListListProvider from "./shopping-list-list/shopping-list-list-provider.js";
import ShoppingListList from "../routes/shopping-list-list.js";
import ThemeProvider from "./theme-provider.js"
//@@viewOff:imports

//@@viewOn:constants
const ShoppingListDetail = Utils.Component.lazy(() => import("../routes/shopping-list-detail.js"));


const ROUTE_MAP = {
  "": { redirect: "shoppingListList" },
  shoppingListList: (props) => <ShoppingListList {...props} />,
  shoppingListDetail: (props) => <ShoppingListDetail {...props} />,
  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found
    </Uu5Elements.Text>
  ),
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        <Uu5Elements.ModalBus>
          <UserProvider>
            <ShoppingListListProvider>
              <ThemeProvider>
                <Plus4U5App.Spa routeMap={ROUTE_MAP} />
              </ThemeProvider>
            </ShoppingListListProvider>
          </UserProvider>
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
