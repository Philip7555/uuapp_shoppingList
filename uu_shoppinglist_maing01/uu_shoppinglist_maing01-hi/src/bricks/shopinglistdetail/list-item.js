//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { ListItem, Text, Button } from "uu5g05-elements";
import { Checkbox } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired
    }).isRequired,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onValue: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {},
    onDelete: () => {},
    onValue: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.item, event));
    }

    function handleRename(event) {
      props.onRename(new Utils.Event(props.item, event));
    }

    function handleValue(event) {
      props.onValue(new Utils.Event(props.item, event));
    }
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);
    return (
      <ListItem {...elementProps}
        actionList={[{component: 
          <Checkbox.Input icon={props.item.value ? "uugds-check" : undefined} onClick={handleValue}/>
        }]}
      >
        <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
        <Button icon="mdi-pencil" onClick={handleRename} significance="subdued" tooltip="Update" />
        <Text category="interface" segment="title" type="minor" colorScheme="building">
          {String(props.item.name)}
        </Text>       
      </ListItem>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tile };
export default Tile;
//@@viewOff:exports
//@@viewOff:exports