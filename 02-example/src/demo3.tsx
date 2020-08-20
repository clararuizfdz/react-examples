import React from "react";

const MyChildComponent = () => {
    const [userInfo, setUserInfo] = React.useState({
        name: "John",
        lastname: "Doe"
    });
    // React.useEffect(() =>{
    //     console.log("Component has been mounted");

    //     return () => console.log("Component has been dismounted");
    // },[])
    return (
        <div>
            <h3>{`${userInfo.name} ${userInfo.lastname}`}</h3>
            <input
                value={userInfo.name}
                onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
            />
            <input
                value={userInfo.lastname}
                onChange={e => setUserInfo({ ...userInfo, lastname: e.target.value })}
            />
        </div>
    );
}
export const MyComponent3 = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>
                Toggle Child component
            </button>
        </>);
}
