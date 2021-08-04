import React, {useState, useEffect}  from "react";
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfeces';
import {useDispatch, useSelector, RootStateOrAny} from "react-redux";
import {getTodos, addTodo, deleteTodo, toggleTodo} from "../actions/todos";

export const TodoPage: React.FC = () => {

  const dispatch = useDispatch();
  const selector = useSelector((state: RootStateOrAny ) => state.todos.todos );
  const [todos, setTodos] = useState<any>([])
  const [filter, setFilter] = useState<string>('all')


  useEffect(() =>{
    setTodos(checkFilter(selector));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector])

  useEffect(() => {
    dispatch(getTodos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  const onToggleHandler = (id:number) => {

    const todo = {...todos.find((item:ITodo) => item.id === id)};
      todo.status = !todo.status;
      dispatch(toggleTodo(id, todo))
  }
  const checkFilter = (data:ITodo[]) => {
    switch (filter) {
      case 'all':
        return data;
      case 'work':
        return data.filter(todo => !todo.status);
      case 'compl':
        return data.filter(todo => todo.status);
      default:
        break;
    }
  }
  const addHandler = (text:string)=>{
    dispatch(addTodo(text));
  }
  
  const removeHandler = (id:number) => {
    dispatch(deleteTodo(id));
  }

  const removeAll = () => {
    todos.forEach((e:ITodo) =>  removeHandler(e.id))
    setTodos([]);
    setFilter('all');
  }

  const showWork = () => {
    setFilter('work')
  }

  const showCompl = () => {
    setFilter('compl')
  }
  
  const showAll = () => {
    setFilter('all')
  }

    return<>
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos} onRemove={removeHandler} onToggle={onToggleHandler}/>
        <button id ="btnRemoveAll"className = 'btnStates' onClick={removeAll}>Remove All</button>
        <button id ="btnShowAll" className = {`btnStates ${filter==='all' ? 'btn-solid' : ''}`} onClick={showAll}>Show All</button>
        <button id ="btnShowCompl" className = {`btnStates ${filter==='compl' ? 'btn-solid' : ''}`} onClick={showCompl}>Show Compl</button>
        <button id ="btnShowWork" className = {`btnStates ${filter==='work' ? 'btn-solid' : ''}`} onClick={showWork}>Show Work</button>
    </>
}