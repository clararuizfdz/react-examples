import React from "react";
import { MyUserInfoContext } from "./userContext"

export const EditUser = () => {
    const [editingName, setEditingName] = React.useState('');
    React.useContext(MyUserInfoContext);
const userContext = React.useContext(MyUserInfoContext);
    return (
        <>
            <input
                value={editingName}
                onChange={e => setEditingName(e.target.value)} 
            />
            <button onClick={() =>{userContext.setUsername(editingName)}}>login</button>
        </>

    );
}