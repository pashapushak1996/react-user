import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {useSelector} from "react-redux";


export const EditUser = () => {
    const [value, setValue] = useState([]);

    const {users, user} = useSelector(({user, users}) => {
        return {
            user, users
        }
    });

    const editUsers = (editUser) => {

    }


    const handleInputValue = (inputValue) => {
        const inpValue = {
            target: {
                value: inputValue
            }
        }
        setValue(inpValue)
    }

    return (
        !!user && (
            <div>
                <form action="">
                    <div>
                        Name:<input defaultValue={user.name}
                                    onInput={(event) => console.log(event)} type="text"/>
                    </div>
                    <div>
                        UserName:<input defaultValue={user.username} type="text"/>
                    </div>
                    <div>
                        Email:<input defaultValue={user.email} type="text"/>
                    </div>
                    <div>
                        Phone:<input defaultValue={user.phone} type="text"/>
                    </div>
                    <div>
                        Website:<input defaultValue={user.website} type="text"/>
                    </div>
                </form>
            </div>)
    );
}

