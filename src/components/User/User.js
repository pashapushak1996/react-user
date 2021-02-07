import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsVisibleEditUser, setIsVisibleFullUser, setUsers} from "../../redux/reducers/users-reducer";

export const User = ({name, id, phone, username, email}) => {

    const dispatch = useDispatch();
    const {users} = useSelector(({users}) => users);

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
            <h6>{id}</h6>
            <h6>{name}</h6>
            <h6>{phone}</h6>
            <h6>{username}</h6>
            <h6>{email}</h6>
            <button onClick={() => editUser(id)}>Edit user</button>
            <button onClick={() => deleteUser(id)}>Delete user</button>
        </div>
    );
}

