import type from "../const"

export const openAddModal = ()=>{
    return{
        type: type.ADD
    }
}

export const openEditModal = ()=>{
    return{
        type: type.EDIT
    }
}