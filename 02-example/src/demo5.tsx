import React from "react";
import { useDebounce } from "use-debounce";

//Example custom hook "useUserCollection"

const useUserCollection = () =>{

    const [filter, setFilter] = React.useState("");
    const [debounceFilter] =  useDebounce(filter, 500);
    const [userCollection, setUserCollection] = React.useState([]);

    React.useEffect(() =>{
        fetch(`https://swapi.dev/api/people?search=${filter}`)
        .then(response => response.json())
        .then(json => setUserCollection(json.results));
    },[debounceFilter]);
    return {filter, setFilter, userCollection};
}

export const MyComponent5: React.FC = () => {

    const {setFilter, filter, userCollection} = useUserCollection();
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