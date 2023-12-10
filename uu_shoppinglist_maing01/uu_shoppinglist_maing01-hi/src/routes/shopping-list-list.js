//@@viewOn:imports
import { Utils, createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import PositionBar from "../core/position-bar.js";
import { BackgroundProvider } from "uu5g05";
import View from "../core/shopping-list-list/view.js";
import { useThemeContext } from "../core/theme-context.js"

import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let ShoppingListList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [isDark] = useThemeContext();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs} style={{ backgroundColor: isDark ? "#000000":undefined, height: '100vh'}}>
        <PositionBar />
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <View />
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

ShoppingListList = withRoute(ShoppingListList, { authenticated: true });

//@@viewOn:exports
export { ShoppingListList };
export default ShoppingListList;
//@@viewOff:exports
