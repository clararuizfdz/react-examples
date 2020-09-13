import React from "react";

export const MyComponent5 = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>
                Toogle Child Component Visibility
        </button>
        </>
    );
}

const useSafeState = function <T>
    (initialValue: T
    ): [T, React.Dispatch<React.SetStateAction<T>>] {
    const mountedRef = React.useRef(false);
    const [state, setState] = React.useState<T>(initialValue);

    React.useEffect(() => {
        mountedRef.current = true;

        return () => (mountedRef.current = false);
    }, []);

    const isMounted = () => mountedRef.current;
    const setSafeState = function (
        data: T
    ): React.Dispatch<React.SetStateAction<T>> | void {
        return isMounted() ? setState(data) : null;
    }
    return [state, setSafeState];
}

export const MyChildComponent = () => {
    const [filter, setFilter] = React.useState("");
    const [userCollection, setUserCollection] = useSafeState([]);

    const setSafeUserCollection = (userCollection) =>
         setUserCollection(userCollection);

    React.useEffect(() => {
        setTimeout(() => {
            fetch(`https://swapi.dev/api/people?search=${filter}`)
                .then(response => response.json())
                .then(json => setSafeUserCollection(json.results));
        }, 2500);
    }, []);

    return (
        <div>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {userCollection.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}