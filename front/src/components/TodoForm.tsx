import React, {useState} from "react";

interface TodoFormProps {
    onAdd(text:string):void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [text, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onKeyHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(text)
            setTitle('')
        }
    }
    const onClickHandler = (event:React.MouseEvent) => {
        props.onAdd(text)
        setTitle('')        
    }

    return (
        <div className="inpute-field mt2">
            <input 
                onChange={changeHandler}
                value={text}
                type="text"
                id ="text"
                placeholder="Введите дело"
                onKeyPress={onKeyHandler}
            />
            <button type = 'submit' className = 'btnStates' onClick={onClickHandler}>Add Todo</button>
            
        </div>
    )
}
