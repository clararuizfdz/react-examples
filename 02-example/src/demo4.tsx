import React from "react";

export const MyComponent4: React.FC = () => {
    const [filter, setFilter] = React.useState("");
    const [userCollection, setUserCollection] = React.useState([]);

    React.useEffect(() =>{
        fetch(`https://swapi.dev/api/people?search=${filter}`)
        .then(response => response.json())
        .then(json => setUserCollection(json.results));
    },[filter]);

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