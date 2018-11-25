import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, SET_VISIBILITY_FILTER } from './Types'

let id = 2

export const addItem = text => {
    console.log(text)
    return {
        type: ADD_ITEM,
        id: id++,
        text
    }
}

export const deleteItem = (id) => ({
    type: REMOVE_ITEM,
    id: id
})

export const toggleItem = (id) => ({
    type: TOGGLE_ITEM,
    id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})