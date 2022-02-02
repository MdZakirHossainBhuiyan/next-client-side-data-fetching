import styles from '../styles/Home.module.css';

const UserList = ({user}) => {
    return (
        <div className={styles.userCard}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserList;