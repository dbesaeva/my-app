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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].name} />

            </div>
            <div className={s.Messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />

            </div>
        </div>
    );
}

export default Dialogs;