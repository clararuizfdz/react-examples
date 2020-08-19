import React from "react";

export const MyComponent2 = () => {
    const [userName, setUserName] = React.useState("");

    React.useEffect(() => {
        setTimeout(() => {
            setUserName("John");
        }, 1500);
    }, []);

    return (
        <>
            <h4>{userName}</h4>
            <input value={userName} onChange={e => setUserName(e.target.value)} />
        </>
    )
}