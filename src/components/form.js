import React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({input, setInput, todo, setTodo, editList, setEditList}) => {

    const updateList = (title, id, complete ) => {
        const newList = todo.map((tlist) => 
            tlist.id === id ? {title, id, complete } : tlist
        )
        setTodo(newList);
        setEditList("");
    };
    useEffect(() => {
        if(editList){
            setInput(editList.title);
        }else {
            setInput("");
        }
    }, [setInput, editList]);
    
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editList){
            setTodo([...todo,{id: uuidv4(), title: input, complete: false}]);
            setInput("");    
        } else {
            updateList(input, editList.id, editList.complete)
        }
        
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder='Ajouter une tache...' 
                className='task-input' 
                value={input}
                required
                onChange={onInputChange}
            />
            <button className='button-add' type='submit'>{editList ? "Modifier" : "Ajouter"}</button>
        </form>
    )
}

export default Form;