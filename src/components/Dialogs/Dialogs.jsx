import React from 'react';
import DialogsItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogsData.map((d) => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messagesData.map((m) => <Message message={m.message} id={m.id} />);

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