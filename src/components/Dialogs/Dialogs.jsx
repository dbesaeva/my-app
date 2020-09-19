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
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Lo' },
        { id: 1, name: 'Helena' },
        { id: 1, name: 'Ann' },
        { id: 1, name: 'Tom' },
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 1, message: 'How are you' },
    ]

    let dialogsElements = dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messagesData.map((m) => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;