import './App.css';
import React from 'react';
import {UsersList} from "./components";
import {Link, Route, Switch} from "react-router-dom";

function App() {

    return (
        <div>
            <ul>
                <li>
                    <Link to={`/users`}>
                        Users
                    </Link>
                </li>
            </ul>

            <div>
                <Switch>
                    <Route path={`/users`} render={(props) => {
                        return <UsersList/>
                    }}>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
