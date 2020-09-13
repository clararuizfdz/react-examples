import React from "react";
import {MyUserInfoContext} from "./userContext";

export const MyComponent3 = () => {
    const myContext = React.useContext(MyUserInfoContext);
    return (
        <>
            <h3>Hello {myContext.username}</h3>
        </>
    )
}