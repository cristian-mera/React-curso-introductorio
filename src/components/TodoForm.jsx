import React from 'react';
import '../styles/TodoForm.css'
import { TodoContext } from '../TodoContext';

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue ( event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor=""> Añade un nuevo Todo </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla pra el sancocho'
                name="" id="" cols="30" rows="10" />
            <div>
                <button type='submit'>
                    Añadir
                </button>
                <button onClick={onCancel} type='button'>
                    Cancelar
                </button>

            </div>

        </form>
    );
};

export { TodoForm };