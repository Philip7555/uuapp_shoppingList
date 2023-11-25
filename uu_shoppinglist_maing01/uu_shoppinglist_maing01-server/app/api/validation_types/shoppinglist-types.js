/* eslint-disable */

const shoppinglistCreateDtoInType = shape({
    name: string(1,31).isRequired()
})

const shoppinglistUpdateDtoInType = shape({
    id: id().isRequired(),
    name: string(1,31),
    archived: boolean(),
    ReadersIdentitys: array(shape({
        uuIdentity:uuIdentity().isRequired(),
        name: string(1,31).isRequired()
    }))
})

const shoppinglistDeleteDtoInType = shape({
    id: id().isRequired(),
})

const shoppinglistLeaveDtoInType = shape({
    id: id().isRequired(),
})

const shoppinglistGetDtoInType = shape({
    id: id().isRequired(),
})

const shoppinglistListDtoInType = shape({
    pageInfo: shape({
        pageIndex: integer().isRequired(),
        pageSize: integer().isRequired()
    }),
})
