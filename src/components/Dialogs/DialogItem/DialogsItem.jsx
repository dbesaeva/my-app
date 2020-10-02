import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogsItem = (props) => {
    let path = /dialogs/ + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <div className={s.img}>
                <img src='https://pngimg.com/uploads/light/light_PNG14440.png'></img>
                </div>
            
        </div>
    );
}

export default DialogsItem;