//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Config from "../config/config.js";
import Tile from "./tile";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  main: () =>
    Config.Css.css({
      display: "inline-block",
      width: 320,
    }),
};
//@@viewOff:css

const TileList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TlieList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const { data, onClick, onNameChange, onDelete } = props;
    console.log("props")
    console.log(props)
    console.log("data")
    console.log(data)
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    //@@viewOn:render
    return (
      <div {...attrs}>
        {data.map((tile, i) => (
          <Tile
            key={tile.id || i}
            {...tile}
            onClick={() => onClick(tile)}
            onNameChange={(newName) => onNameChange(tile.id, newName)}
            onDelete={onDelete ? () => onDelete(tile.id) : undefined}
          />
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { TileList };
export default TileList;
//@@viewOff:exports
