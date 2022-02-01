import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({todo, setTodo, setEditList}) => {
    const handleComplete = (tlist) =>{
        setTodo(
            todo.map((list) => {
                if(list.id === tlist.id){
                    return { ...list, complete: !list.complete };
                }
                return list;
            })
        )
    };
    const handleDelete = ({id}) => {
        setTodo(todo.filter((tlist) => tlist.id !== id  ));
    };
    const handleEdit = ({id}) => {
        const findID = todo.find((list) => list.id === id);
        setEditList(findID);
    };

    return (
        <div>
            {todo.map((tlist) => (
                <li className='todo-list' key={tlist.id}>
                    <input
                        type="text"
                        value={tlist.title}
                        className={`list ${tlist.complete ? "complete" : ""}`}
                        onChange={(e) => e.preventDefault()}
                    />
                                <div>
                <button className='button-complete' onClick ={() => handleComplete(tlist)}>
                    <CheckCircleIcon />
                </button>
                <button className='button-edit' onClick ={() => handleEdit(tlist)}>
                    <EditIcon />
                </button>
                <button className='button-delete' onClick ={() => handleDelete(tlist)} >
                    <DeleteIcon />
                </button>
            </div>
                </li>
            ))}


        </div>
    )
}

export default TodoList;