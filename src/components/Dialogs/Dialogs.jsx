import React from 'react';
import DialogsItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

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

    let dialogsElements = dialogsData.map((d) => <DialogsItem name={d.name} id={d.id} />);
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