import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = /dialogs/ + props.id
    return (
      <div className={s.dialog + ' ' + s.active}> 
        <NavLink to={path}>{props.name}</NavLink>
        </div>

);
}

const Message = (props) => {
    return ( 
    <div className={s.Message}>{props.message}</div>  
);}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>  
        <div className={s.dialogsItems}>
            <DialogItem name='Lo' id='1'/>
            <DialogItem name='Helena' id='2'/>
            <DialogItem name='Elena' id='3'/>
            <DialogItem name='Lana' id='4'/>
            <DialogItem name='Katty' id='5'/>
            <DialogItem name='Ann' id='6'/>

        </div>
        <div className={s.Messages}>
            <Message message='how are you?'/>
            <Message message='ok?'/>
            <Message message='love you'/>
        </div>
        </div>
);
}

export default Dialogs;