import React from "react";
import { checkPropTypes } from "prop-types";
import { ProgressPlugin } from "webpack";

export const MyComponent6: React.FC = () => {
    const [userInfo, setUserInfo] = React.useState({
        name: "John",
        lastname: "Doe"
    });

    return (
        <>
            <DisplayUsername name={userInfo.name} />
            <input
                value={userInfo.name}
                onChange={(e) =>
                    setUserInfo({
                        ...userInfo,
                        name: e.target.value
                    })}
            />
            <input
                value={userInfo.lastname}
                onChange={(e) =>
                    setUserInfo({
                        ...userInfo,
                        lastname: e.target.value
                    })}
            />
        </>
    );
}

interface Props {
    name: string;
}

export const DisplayUsername = React.memo((props: Props) => {
    console.log("Hey I'm only rendered when name gets updated, check React.memo");

    return <h3>{props.name}</h3>
});