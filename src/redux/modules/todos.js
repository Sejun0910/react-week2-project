// Action Value
const ADD_TODO = "ADD_TODO"
const DONE_TODO = "DONE_TODO"
const DELETE_TODO = "DELETE_TODO"
const TOGLE_TODO = "TOGLE_TODO"

// Action Creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload};
};
export const doneTodo = (payload) => {
    return { type: DONE_TODO, payload};
};
export const deleteTodo = (payload) => {
    return { type: DELETE_TODO, payload};
};
export const togleTodo = (payload) => {
    return { type: TOGLE_TODO, payload};
};

// initialState 초기 상태값
const initialState = {
    todos: [
        {
            id : 1,
            name : '밥 먹기',
            content : '밥 열심히 먹기',
            inSuccess : false,
        },
        {
            id : 2,
            name : '잠 자기',
            content : '잠 열심히 자기',
            inSuccess : false,
        },
    ]
};

// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, 
            todos: [...state.todos, action.payload]
        }
        case DONE_TODO:
            return {
                ...state, 
                todos: action.payload
            }
        case DELETE_TODO:
            return {
                ...state, 
                todos: action.payload
            }
        case TOGLE_TODO:
            return {
                ...state, 
                todos: action.payload
            }
        default:
            return state;
    }
};

export default todos;