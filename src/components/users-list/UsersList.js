import React, {useEffect, useState} from "react";
import {User} from "../user";
import {services} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {SET_USERS} from "../../redux/action-types";
import {Route, useRouteMatch} from "react-router-dom";
import {FullUser} from "../full-user";
import {setUsers} from "../../redux/action-creators";
import {EditUser} from "../edit-user";


export const UsersList = () => {
    const {url} = useRouteMatch();
    const {userService} = services;
    const dispatch = useDispatch();
    const users = useSelector(({users}) => users);

    const fetchData = async () => {
        try {
            return await userService.getUsers()
                .then(response => response.json())
                .then(users => dispatch(setUsers(users)))
        } catch (e) {
            console.log(e);
        } finally {
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {users && users.map((user) => <User {...user} key={user.id}/>)}
            <button>Create User</button>
            <Route path={`${url}/:id`}>
                <FullUser/>
            </Route>
            <Route path={`${url}/:id/edit`}>
                <EditUser/>
            </Route>
        </div>
    );
}

