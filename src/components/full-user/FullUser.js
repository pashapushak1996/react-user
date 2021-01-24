import React, {useEffect} from "react";
import {services} from '../../services';
import {useParams, useHistory, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SET_USER, SET_USERS} from "../../redux/action-types";
import {setUser} from "../../redux/action-creators";

export const FullUser = () => {
    const {id} = useParams();
    const {url} = useRouteMatch();
    const history = useHistory();
    const {user, users} = useSelector(({user, users}) => {
        return {
            user, users
        }
    });

    const dispatch = useDispatch();
    const {userService} = services;


    const fetchUser = () => {
        userService.getUser(id)
            .then(res => res.json())
            .then(user => dispatch(setUser(user)))
    }

    useEffect(() => {
        fetchUser()
    }, [id])


    const deleteUser = (id) => {
        const newUsers = users.filter((user) =>
            user.id !== +id
        )
        dispatch({type: SET_USERS, payload: newUsers})
        dispatch({type: SET_USER, payload: null})
    }

    return (
        <div>
            {!!user && (
                <div>
                    <h5>#Id - Name:{id}-{user.name}</h5>
                    <h5>Username:{user.username}</h5>
                    <h5>Email:{user.email}</h5>
                    <h5>Phone:{user.phone}</h5>
                    <h5>{user.website}</h5>
                    <button onClick={() => {
                        history.push(`${url}/edit`)

                    }}>edit user
                    </button>
                    <button onClick={() => deleteUser(id)}>delete user</button>
                </div>
            )}
        </div>
    );
}

