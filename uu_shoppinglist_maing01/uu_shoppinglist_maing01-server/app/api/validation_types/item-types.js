/* eslint-disable */

const itemCreateDtoInType = shape({
    ShoppinglistID:id().isRequired(),
    ItemName:string(1,15).isRequired()
})

const itemUpdateDtoInType = shape({
    ShoppinglistID:id().isRequired(),
    Item:shape({
        id: id().isRequired(),
        name: string(1,15),
        solved: boolean()
      }).isRequired(),
})

const itemDeleteDtoInType = shape({
    ShoppinglistID:id().isRequired(),
    ItemID:id().isRequired()
})