import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {FullUser} from "../full-user";
import {useSelector} from "react-redux";



export const User = ({id, name}) => {

    const history = useHistory();
    const {url} = useRouteMatch();
    return (
        <div>
            {id}-{name}
            <button onClick={()=>{
                history.push(`${url}/${id}`)
            }}>details...
            </button>
        </div>
    );
}

