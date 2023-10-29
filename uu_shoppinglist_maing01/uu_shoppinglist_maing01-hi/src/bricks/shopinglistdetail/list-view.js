//@@viewOn:imports
import { createVisualComponent, PropTypes, useState, Utils } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Tile from "./list-item";
import { SwitchSelect } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

const itemList=[
    { value: "undone" },
    { value: "all" },
    { value: "done" },
  ]

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    itemList: PropTypes.array.isRequired,
    onRename: PropTypes.func,
    onDelete: PropTypes.func,
    onValue: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    itemList: [],
    onRename: () => {},
    onDelete: () => {},
    onValue: () => {}
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [state, setState] = useState(itemList[0].value);
    const { addAlert } = useAlertBus();

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    function handleDelete(event) {
      const item = event.data;

      try {
        console.log(props)
        props.onDelete(item);
        addAlert({
          message: `The item ${item.name} has been deleted.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting item", error);
        showError(error, "item delete failed!");
      }
    }

    function handleRename(event) {
        const name = "ok"
      try {
        props.onRename(event.data, name);
      } catch (error) {
        ListView.logger.error("Error renaming item", error);
        showError(error, "item Rename failed!");
      }
    }

    function handleValue(event) {
        const item = event.data;
        
        try {
          console.log(props)
          props.onValue(item);
          addAlert({
            message: `The item ${item.name} has been canged.`,
            priority: "success",
            durationMs: 2000,
          });
        } catch (error) {
            console.log("error")
          ListView.logger.error("Error changing item value", error);
          showError(error, "Cange item value failed!");
        }
      }
    //@@viewOff:private

    //@@viewOn:render
    function filterItemList(selekton) {
        switch(selekton) {
            case("undone"):
                return props.itemList.filter((item) => item.value == false)
            case("done"):
                return props.itemList.filter((item) => item.value == true)
            case("all"):
            default: 
                return props.itemList
        }

    }
    
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
        
      <div {...attrs}>
        <SwitchSelect.Input value={state} itemList={itemList} 
        onChange={(e) => {setState(e.data.value)}}/>
        {filterItemList(state).map((item) => (
          <Tile
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onRename={handleRename}
            onValue={handleValue}
            style={{ width: 640, margin: "24px auto" }}
          />
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports