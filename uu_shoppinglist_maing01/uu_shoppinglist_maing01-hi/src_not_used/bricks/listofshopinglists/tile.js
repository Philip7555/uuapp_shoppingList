//@@viewOn:imports
import React from "react";
import { createVisualComponent, useRoute } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import TextInput from "./text-input";
import { useSession } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let {id, name, itemList, onClick, onDelete, onNameChange, owner} = props;
    console.log(props)

    const { identity } = useSession();
    const isOwner = identity?.uuIdentity === owner.id;
    const [, setRoute] = useRoute();

    function getitem(item) {  
      if(item && item.checked) {
        return <Uu5Elements.ListItem actionList={[{component: 
          <Uu5Elements.Icon icon="uugds-check"/>
        }]}>{item.name}</Uu5Elements.ListItem>
      } else if (item) {
        return <Uu5Elements.ListItem>{item.name}</Uu5Elements.ListItem>
      }
      
      return
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    
    return (
      <Uu5Elements.Tile 
      header={
        <div><TextInput id={id} value={name} onChange={onNameChange} readOnly={!isOwner}/>
        <div><small></small>{owner.name}</div></div>
        
      }
      actionList={ isOwner && id && onDelete ? [{ icon: "uugds-close", onClick: onDelete }] : undefined}
      displayActionList="true"
      footer={<Uu5Elements.Button icon="uugds-search" onClick={() => setRoute("shoppinglist",{props})} />}
      >
        <Uu5Elements.Line/>
        {getitem(itemList[0])}
        {getitem(itemList[1])}
        {getitem(itemList[2])}      
      </Uu5Elements.Tile>
    );
    //@@viewOff:render
  },
});

export default Tile;
