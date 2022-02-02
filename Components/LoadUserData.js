import { useEffect, useState } from "react";
import UserList from "./UserList";
import styles from '../styles/Home.module.css';

const LoadUserData = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <h1>All Friends List</h1>
            <div className={styles.userContent}>
                {data.map(user => <UserList key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default LoadUserData;