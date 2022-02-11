import React from 'react';
import '../styles/TodoItem.css'

const TodoItem = (props) => {

  const onComplete = () => {
    alert('Completaste el ToDO ' + props.text)
  }
  const onDelete = () => {
    alert('Eliminaste el ToDO ' + props.text)
  }

    return (
        <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
      onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete" 
      onClick={onDelete}
      >
        X
      </span>
    </li>
    );
};

export {TodoItem};