import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {

    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    
    return (
        <div>
            <h2 className='TodoCounter'>Has completado exitosamente {completedTodos} de {totalTodos} ToDos</h2>
        </div>
    );
};

export {TodoCounter};