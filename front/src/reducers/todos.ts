import * as tyTodo from '../actions/types';
import { IAction } from '../interfeces';

export const initialState = {
  todos: [],
}


const fn =  (state = initialState, action:IAction) => {
  switch (action.type) {
    case tyTodo.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    case tyTodo.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case tyTodo.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo: { id: number }) => todo.id !== action.payload)]
      }
    case tyTodo.DELETE_TODOS:
      return {
        ...state,
        todos: []
      }
    case tyTodo.TOGGLE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo:{id:number})=> todo.id !== action.id), action.payload]
      }
    default:
      return state;
  }

};
export default fn;




