import { useEffect, useState } from "react";
import { User } from "../User/User";

import type { UserProps } from "../../types/user";
import styles from "./Users.module.css";

export const Users = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error("Fetching error:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (users.length > 0) {
        return (
            <div className={styles.users}>
                {users.map((user) => (
                    <User key={user.id} {...user} />
                ))}
            </div>
        );
    } else {
        return <span className={styles.errorMessage}>Ooops...Can't find users, try again!</span>;
    }
};
