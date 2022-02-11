import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({total, completed}) => {

    

    return (
        <div>
            <h2 className='TodoCounter'>Has completado exitosamente {completed} de {total} ToDos</h2>
        </div>
    );
};

export {TodoCounter};