import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM} from '../actions/Types'
const INITIAL_DATA = []

const ToDoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_ITEM:
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case TOGGLE_ITEM:
            return state.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
            )
        case REMOVE_ITEM:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
        
        default:
        return state
    }
}

export default ToDoReducer