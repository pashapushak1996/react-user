import React, {useEffect} from 'react';
import {NavLink, Switch, Route} from "react-router-dom";
import {Users} from "./components/UsersList/Users";
import {services} from './services';
import {setUsers} from "./redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state)=>state);

    const {userService} = services;
    useEffect(() => {
        userService.getUsers()
            .then(res => res.json())
            .then(data => dispatch(setUsers(data)))
    }, [])

    return (
        <div>
            <NavLink to={`/users`}>
                Users
            </NavLink>
            <Switch>
                <Route path={`/users`} render={() => <Users users={users}/>}/>
            </Switch>
        </div>
    );
}
export default App;
