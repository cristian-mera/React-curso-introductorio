import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton (props)  {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <div>
            <button 
            className='CreateTodoButton' 
            onClick={() => onClickButton('Aqui se muestra el modal')}
            >
                +
            </button>
        
        
        </div>
    );
};

export {CreateTodoButton};


