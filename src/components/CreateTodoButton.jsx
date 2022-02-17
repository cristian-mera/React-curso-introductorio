import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton (props)  {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    };

    return (
        <div>
            <button 
            className='CreateTodoButton' 
            onClick={onClickButton}
            >
                +
            </button>
        
        
        </div>
    );
};

export {CreateTodoButton};


