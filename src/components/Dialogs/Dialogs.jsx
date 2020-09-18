import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>  
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}> 
            <NavLink to='dialogs/1'>Lo</NavLink>
            </div>
            <div className={s.dialog}> 
            <NavLink to='dialogs/2'>Daliya</NavLink> 
            </div>
            <div className={s.dialog}> 
            <NavLink to='dialogs/3'>Timmy</NavLink> 
            </div>
            <div className={s.dialog}> 
            <NavLink to='dialogs/4'>Ariana</NavLink>
            </div>
            <div className={s.dialog}>
            <NavLink to='dialogs/5'>Helen</NavLink> 
            </div>
            <div className={s.dialog}> 
            <NavLink to='dialogs/6'>Tom</NavLink>
            </div>
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