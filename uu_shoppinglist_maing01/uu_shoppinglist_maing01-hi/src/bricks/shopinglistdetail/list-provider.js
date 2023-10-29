//@@viewOn:imports
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config";
//@@viewOff:imports

let initialItemList = [
  {
    id: Utils.String.generateId(),
    name: "Bunny ate the wedding ring!",
    value:true
  },
  {
    id: Utils.String.generateId(),
    name: "F5",
    value: true
  },
  {
    id: Utils.String.generateId(),
    name: "Random image",
    value: false
  },
];

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [itemList, setItemList] = useState(initialItemList);

    function remove(item) {
        console.log(item)
        setItemList((prevItemList) => prevItemList.filter((a) => a.id !== item.id));
    }
    
    function create(values) {
        const Item = {
            ...values,
          id: Utils.String.generateId(),
          value: false
        };
        setItemList((prevItemList) => [...prevItemList, Item]);
        return Item;
    }

    function rename(item,name) {
      item.name = name
      setItemList((prevItemList) => prevItemList.filter((a) => a.id !== item.id ? a : item)); 
    }

    function revalue(item) {
        console.log("value2")
        item.value = !item.value
        setItemList((prevItemList) => prevItemList.filter((a) => a.id !== item.id ? a : item)); 
      }
    //@@viewOff:private

    //@@viewOn:render
    const value = { itemList, remove, rename, create, revalue};
    console.log("main")
    
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports