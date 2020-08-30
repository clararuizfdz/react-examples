import React from "react";

interface Props {
    onReset: () => void;
}

const ResetValue: React.FC<Props> = React.memo(({ onReset }) => {
    console.log("Hey I'm only rendered when name gets updated, check React.memo + callback");

    return <button onClick={onReset}>Reset value</button>
})
export const MyComponent7 = () => {
    const [username, setUsername] = React.useState("John");
    const [lastname, setLastname] = React.useState("Doe");

    const resetNameCallBack = () => {
        setUsername("");
    }


    return (
        <>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <input value={lastname} onChange={e => setLastname(e.target.value)} />
            <ResetValue onReset={resetNameCallBack} />
        </>
    )



}
