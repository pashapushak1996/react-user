import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addUser,
    setIsVisibleCreateUser,
    setUserEmail,
    setUsername,
    setUserName,
    setUserPhone,
    setUserWebsite
} from "../../redux/reducers/users-reducer";

export const CreateUser = () => {
    const dispatch = useDispatch();
    const {name, username, phone, email, website} = useSelector((state) => state);
    const saveUser = () => {
        dispatch(addUser())
        dispatch(setIsVisibleCreateUser(false))
    };

    const changeUser = ({target: {name, value}}) => {
        if (name === `name`) {
            dispatch(setUserName(value));
        }
        if (name === `username`) {
            dispatch(setUsername(value));
        }
        if (name === `email`) {
            dispatch(setUserEmail(value));
        }
        if (name === `phone`) {
            dispatch(setUserPhone(value));
        }
        if (name === `website`) {
            dispatch(setUserWebsite(value));
        }
    };

    return (
        <>
            <h1>Create user menu : </h1>
            <div>
                Name: <input type="text" name={`name`} value={name} onChange={(e) => changeUser(e)}/>
            </div>
            <div>
                UserName: <input type="text" name={`username`} value={username} onChange={(e) => {
                changeUser(e)
            }}/>
            </div>
            <div>
                Email: <input type="text" name={`email`} value={email} onChange={(e) => {
                changeUser(e)
            }}/>
            </div>
            <div>
                Phone: <input type="text" name={`phone`} value={phone} onChange={(e) => {
                changeUser(e)
            }}/>
            </div>
            <div>
                Website: <input type="text" name={`website`} value={website} onChange={(e) => {
                changeUser(e)
            }}/>
            </div>
            <button onClick={saveUser}>Create</button>
            <button onClick={() => dispatch(setIsVisibleCreateUser(false))}>Exit</button>
        </>
    );
}

