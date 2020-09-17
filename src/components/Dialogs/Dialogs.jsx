import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>  
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}> Lo </div>
            <div className={s.dialog}> Daliya </div>
            <div className={s.dialog}> Timmy </div>
            <div className={s.dialog}> Ariana </div>
            <div className={s.dialog}> Helen </div>
            <div className={s.dialog}> Tom </div>
        </div>
        <div className={s.Messages}>
            <div className={s.Message}> How are you? </div>
            <div className={s.Message}> ok? </div>
            <div className={s.Message}> See you </div>
        </div>
        </div>
);
}

export default Dialogs;