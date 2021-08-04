import axios from 'axios';
import * as tyAc from './types';
import { Dispatch } from 'redux';
import { IAction } from '../interfeces';

const url = 'http://127.0.0.1:8000/api/v1/todos/todos/'

export const getTodos = () => async (dispatch: Dispatch<IAction>) => {
  const res = await axios.get(url);
  dispatch({
    type: tyAc.GET_TODOS,
    payload: res.data
  });
};
export const addTodo = (text:string) =>
    async (dispatch: Dispatch<IAction>) => {
      let data = {
        text,
        status: false
      }
        const res = await axios
            .post(url, data)
        dispatch({
            type: tyAc.ADD_TODO,
            payload: res.data
        })
    }
export const deleteTodo = (id:number) => async (dispatch: Dispatch<IAction>) => {
    const res = await axios
        .delete(`${url}${id}/`)
    if (res)
    dispatch({
            type: tyAc.DELETE_TODO,
            payload: id
    })
}
export const toggleTodo = (id:number, todo:string) => async (dispatch: Dispatch<IAction>) => {
    const res = await axios
        .put(`${url}${id}/`, todo )
    dispatch({
            type: tyAc.TOGGLE_TODO,
            payload: res.data,
            id:id,
    })
}