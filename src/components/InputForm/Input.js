import React from 'react';
import classes from './Input.module.css'

function Input(props) {
    return (
        <div>
            <form className={classes.pan}>
                <label htmlFor='title'>Title</label>
                <input type="text" id="Title"/>
                <label htmlFor='openingtext'>Opening Text</label>
                <input type="text" id="openingtext"/>
                <label htmlFor='releasedate'>Release Date</label>
                <input type="text" id="releasedate"/>
            </form>
            <button className={classes.button}>Add Movies</button>
            </div>
            
        
    );
}

export default Input;