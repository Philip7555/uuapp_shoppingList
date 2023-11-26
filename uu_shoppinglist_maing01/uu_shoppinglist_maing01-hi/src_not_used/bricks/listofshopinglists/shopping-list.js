//@@viewOn:imports
import { createVisualComponent, useSession, useState, Utils, useRoute } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { SwitchSelect } from "uu5g05-forms";
import Config from "./config/config.js";

import TileList from "./tile-list";
import TextInput from "./text-input";
import ShoppingList from "../../routes/ShoppingList.js";
//@@viewOff:imports

//@@viewOn:constants
/*
const INITIAL_DATA = {
  id: "cd8f0b48",
  name: "Kaufland",
  memberList: [{ id: "m01", name: "Karel Omáčka" },{ id: "6283-1164-2812-0000", name: "Philip Ernst" }],
  tileList: [
    { id: Utils.String.generateId(), name: "Cukr" },
    { id: Utils.String.generateId(), name: "Mouka", checked: true },
  ],
  owner: { id: "8156-5151-6521-0000", name: "Ivo Milota" },
};
*/
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
// TODO work 1h 45min
//@@viewOff:constants

//@@viewOn:css
const Css = {
  panel: () =>
    Config.Css.css({
      marginTop: 32,
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppinglistList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppinglistList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    data: DATA,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { data } = props;


    const [tileList, setTileList] = useState(data);

    const selectionList=[{ value: "aktual" },{ value: "archived" },]
    const [selection, setSelection] = useState(selectionList[0].value);
    const [, setRoute] = useRoute();

    const archivedTileList = [];
    const notarchivedTileList = [];
    tileList.forEach((tile) => {
      tile.archived ? archivedTileList.push(tile) : notarchivedTileList.push(tile);
    });
    //notarchivedTileList.push({});

    function handleClick(data) {
      //setRoute("shoppingList")
    }

    function handleChangeName(id, name) {
      setTileList(([...currTileList]) => {
        if (id) {
          const index = currTileList.findIndex((tile) => tile.id === id);
          const tile = currTileList[index];
          currTileList.splice(index, 1, { ...tile, name });
        } else {
          if (name) currTileList.push({ id: Utils.String.generateId(), name });
        }
        return currTileList;
      });
    }

    function handleDelete(id) {
      setTileList(([...currTileList]) => {
        const index = currTileList.findIndex((tile) => tile.id === id);
        currTileList.splice(index, 1);
        return currTileList;
      });
    }
    //@@viewOff:private

    //@@viewOn:render
    return (
      <Uu5Elements.Block>
        <div>
        <SwitchSelect.Input value={selection} itemList={selectionList} 
        onChange={(e) => {setSelection(e.data.value)}} />
        </div>
        <TileList
          data={selection === selectionList[0].value ? notarchivedTileList: archivedTileList}
          onClick={handleClick}
          onNameChange={handleChangeName}
          onDelete={handleDelete}
        />
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppinglistList };
export default ShoppinglistList;
//@@viewOff:exports
