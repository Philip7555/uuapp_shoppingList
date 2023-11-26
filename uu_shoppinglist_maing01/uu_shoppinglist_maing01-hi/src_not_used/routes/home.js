import { Utils, createVisualComponent, useState, useRoute } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Uu5Tiles from "uu5tilesg02";
import Uu5TilesElements from "uu5tilesg02-elements";

import Tile from "../bricks/listofshopinglists/tile.js";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import ShoppinglistList from "../bricks/listofshopinglists/shopping-list.js";
import ShoppingList from "./ShoppingList.js"

//@@viewOff:imports

//@@viewOn:constants
const DATA = [
   {
    id: "cd8f0b01",
    name: "Kaufland",
    archived: false,
    memberList: [{ id: "m01", name: "Karel Omáčka" },{ id: "6283-1164-2812-0000", name: "Philip Ernst" }],
    itemList: [
      { id: Utils.String.generateId(), name: "Cukr" },
      { id: Utils.String.generateId(), name: "Mouka", checked: true },
    ],
    owner: { id: "8156-5151-6521-0000", name: "Ivo Milota" },
  },
  {
    id: "cd8f0b02",
    name: "Lidl",
    archived: false,
    memberList: [{ id: "m01", name: "Karel Omáčka" },{ id: "8156-5151-6521-0000", name: "Ivo Milota" }],
    itemList: [
      { id: Utils.String.generateId(), name: "Cukr" },
      { id: Utils.String.generateId(), name: "Rajčata" },
      { id: Utils.String.generateId(), name: "Mozerela", checked: true },
    ],
    owner: { id: "6283-1164-2812-0000", name: "Philip Ernst" },
  }
];


//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let TilesExample = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TilesExample",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [, setRoute] = useRoute();
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return(
      <div {...attrs}>
      <RouteBar />
      <div className={Config.Css.css({ padding: "16px 32px" })}>
        <ShoppinglistList />
      </div>
    </div>
    )
    /*
    return (
      <div {...attrs}>
        
        <RouteBar />
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <Uu5Tiles.ControllerProvider 
          data={DATA}
          onClick={setRoute("about")}
          >
            <Uu5TilesElements.Grid tileMinWidth={100} tileMaxWidth={200}>
              {Tile}
            </Uu5TilesElements.Grid>
          </Uu5Tiles.ControllerProvider>
        </div>
      </div>
    );
    */
    //@@viewOff:render
  },
});

TilesExample = withRoute(TilesExample, { authenticated: true });

//@@viewOn:exports
export { TilesExample };
export default TilesExample;
/*//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <WelcomeRow left={<Plus4U5Elements.PersonPhoto size="xl" borderRadius="none" />}>
          <Uu5Elements.Text category="story" segment="heading" type="h2">
            <Lsi import={importLsi} path={["Home", "welcome"]} />
          </Uu5Elements.Text>
          {identity && (
            <Uu5Elements.Text category="story" segment="heading" type="h2">
              {identity.name}
            </Uu5Elements.Text>
          )}
        </WelcomeRow>
        <WelcomeRow left={<Uu5Elements.Icon icon="mdi-human-greeting" className={Css.icon()} />}>
          <Uu5Elements.Text category="story" segment="body" type="common">
            <Lsi import={importLsi} path={["Home", "intro"]} />
          </Uu5Elements.Text>
        </WelcomeRow>
        <WelcomeRow left={<Uu5Elements.Icon icon="mdi-monitor" className={Css.icon()} />}>
          <Uu5Elements.Text category="story" segment="body" type="common">
            <Lsi import={importLsi} path={["Home", "clientSide"]} />
          </Uu5Elements.Text>
        </WelcomeRow>
        <WelcomeRow left={<Uu5Elements.Icon icon="mdi-server" className={Css.icon()} />}>
          <Uu5Elements.Text category="story" segment="body" type="common">
            <Lsi import={importLsi} path={["Home", "serverSide"]} />
          </Uu5Elements.Text>
        </WelcomeRow>
      </div>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
*/