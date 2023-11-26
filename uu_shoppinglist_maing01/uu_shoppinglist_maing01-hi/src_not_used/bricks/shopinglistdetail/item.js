//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
import { ListItem, Button } from "uu5g05-elements";
import TextInput from "./text-input";
import { Checkbox } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

const Item = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Item",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: { },
  //@@viewOff:defaultProps

  render(props) {
    const { id, name, checked, onCheck, onNameChange, onDelete } = props;

    //@@viewOn:render
    //const { elementProps } = Utils.VisualComponent.splitProps(props);
    return (
      <ListItem //{...elementProps}
        actionList={[{component: 
          <Checkbox.Input icon={checked ? "uugds-check" : undefined} onClick={onCheck} disabled={!id}/>
        }]}
      >
        <Button icon={id && onDelete ? "uugds-close" : undefined} onClick={id && onDelete ? onDelete : undefined}/>
        <TextInput id={id} value={name} onChange={onNameChange} readOnly={checked}/>       
      </ListItem>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Item };
export default Item;
//@@viewOff:exports
//@@viewOff:exports