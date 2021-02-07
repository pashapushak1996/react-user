import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addUser, setIsVisibleCreateUser,
    setUserEmail,
    setUsername,
    setUserName,
    setUserPhone,
    setUserWebsite
} from "../redux/reducers/users-reducer";

export const CreateUser = () => {
    const dispatch = useDispatch();
    let {name, username, phone, email, website} = useSelector(({users}) => users);

    const saveUser = () => {
        dispatch(addUser())
        dispatch(setIsVisibleCreateUser(false))
    }
    const changeName = (e) => {
        const value = e.target.value;
        dispatch(setUserName(value))
    }
    const changeUsername = (e) => {
        const value = e.target.value;
        dispatch(setUsername(value))
    }
    const changePhone = (e) => {
        const value = e.target.value;
        dispatch(setUserPhone(value))
    }
    const changeEmail = (e) => {
        const value = e.target.value;
        dispatch(setUserEmail(value))
    }
    const changeWebsite = (e) => {
        const value = e.target.value;
        dispatch(setUserWebsite(value))
    }

    return (
        <>
            <h1>Create user menu : </h1>
            <div>
                Name: <input type="text" value={name} onChange={(e) => changeName(e)}/>
            </div>
            <div>
                UserName: <input type="text" value={username} onChange={(e) => {
                changeUsername(e)
            }}/>
            </div>
            <div>
                Email: <input type="text" value={email} onChange={(e) => {
                changeEmail(e)
            }}/>
            </div>
            <div>
                Phone: <input type="text" value={phone} onChange={(e) => {
                changePhone(e)
            }}/>
            </div>
            <div>
                Website: <input type="text" value={website} onChange={(e) => {
                changeWebsite(e)
            }}/>
            </div>
            <button onClick={saveUser}>Create</button>
            <button onClick={() => dispatch(setIsVisibleCreateUser(false))}>Exit</button>
        </>
    );
}

