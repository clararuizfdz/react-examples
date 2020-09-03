import React from "react";

interface Props {
    name: string;
    onChange: (value: string) => void;
}

const EditUsername: React.FC<Props> = React.memo((props) => {
    console.log("Hey, I'm only rendered when name gets updated, check React.memo");

    return (
        <input
            value={props.name}
            onChange={e => props.onChange(e.target.value)}
        />
    );
});

interface UserInfo {
    name: string,
    lastname: string
}

export const MyComponent1 = () => {
    const [userInfo, setInfo] = React.useState<UserInfo>({ name: "John", lastname: "Doe" });

    // const updateName = React.useCallback((name: string) => {
    //     setInfo({ ...userInfo, name });
    // }, []);

    // const updateLastName = React.useCallback((lastname: string) => {
    //     setInfo({ ...userInfo, lastname });
    // }, []);

    const updateField = React.useCallback((fieldName: keyof UserInfo)=> fieldValue => {
        setInfo({
            ...userInfo,
            [fieldName]: fieldValue
        });
    }, [userInfo]);

    return (
        <>
            <h3>
                {userInfo.name} {userInfo.lastname}
            </h3>
            <EditUsername
                name={userInfo.name}
                onChange={updateField('name')}
            />

            <EditUsername
                name={userInfo.lastname}
                onChange={updateField('lastname')}
            />
            {/* <input
                value={userInfo.lastname}
                onChange={e => setInfo({ ...userInfo, lastname: e.target.value })} /> */}
        </>
    );
};