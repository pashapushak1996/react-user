import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsVisibleEditUser, setIsVisibleFullUser, setUsers} from "../../redux/reducers/users-reducer";

export const User = ({name, id, phone, username, email}) => {

    const dispatch = useDispatch();
    const {users} = useSelector((state) => state);

    const deleteUser = (id) => {
        const newUsers = users.filter((user) =>
            user.id !== +id
        )
        dispatch(setUsers(newUsers))
        dispatch(setIsVisibleFullUser(false))
    }
    const editUser = () => {
        dispatch(setIsVisibleEditUser(true))
        dispatch(setIsVisibleFullUser(false))
    }

    return (
        <div>
            <h1>Full user info</h1>
            <h4>{id}</h4>
            {name.length > 0 && <h4>Name: {name}</h4>}
            {phone.length > 0 && <h4>Phone: {phone}</h4>}
            {username.length > 0 && <h4>UserName: {username}</h4>}
            {email.length > 0 && <h4>Email: {email}</h4>}
            <button onClick={() => editUser(id)}>Edit user</button>
            <button onClick={() => deleteUser(id)}>Delete user</button>
        </div>
    );
}

