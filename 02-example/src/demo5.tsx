import React from "react";
import { useDebounce } from "use-debounce";

//Example custom hook "useUserCollection"
const useDebounceFilter = () => {
    const [filter, setFilter] = React.useState("");
    const [debounceFilter] = useDebounce(filter, 500);
    return { filter, setFilter, debounceFilter };

}

const useUserCollection = () => {

    const [userCollection, setUserCollection] = React.useState([]);

    const loadUsers = (filter) => {
        fetch(`https://swapi.dev/api/people?search=${filter}`)
            .then(response => response.json())
            .then(json => setUserCollection(json.results));
    }
    return { userCollection, loadUsers };
}

export const MyComponent5: React.FC = () => {
    const { setFilter, filter, debounceFilter } = useDebounceFilter();
    const { userCollection, loadUsers } = useUserCollection();

    React.useEffect(() => {
        loadUsers(debounceFilter)
    }, [debounceFilter]);
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
