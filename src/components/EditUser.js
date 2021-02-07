import {setIsVisibleEditUser, setIsVisibleFullUser, setUsers} from "../redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";

export const EditUser = ({id, name, username, phone, website, email}) => {

    const dispatch = useDispatch();
    const {users} = useSelector(({users}) => users);

    const changeUser = (e, id) => {
        e.preventDefault();
        const newUsers = users.map((user) => {
            if (user.id === id) {
                return {
                    ...user,
                    name: e.target[0].value,
                    username: e.target[1].value,
                    email: e.target[2].value,
                    phone: e.target[3].value,
                    website: e.target[4].value
                }
            }
            return user
        });
        dispatch(setUsers(newUsers))
        dispatch(setIsVisibleEditUser(false))
        dispatch(setIsVisibleFullUser(false))
    }

    return (
        <>
            <form onSubmit={(e) => {
                changeUser(e, id)
            }}>
                <div>
                    Name: <input type="text" defaultValue={name}/>
                </div>
                <div>
                    UserName: <input type="text" defaultValue={username}/>
                </div>
                <div>
                    Email: <input type="text" defaultValue={email}/>
                </div>
                <div>
                    Phone: <input type="text" defaultValue={phone}/>
                </div>
                <div>
                    Website: <input type="text" defaultValue={website}/>
                </div>
                <button>Save</button>
            </form>
            <button onClick={() => dispatch(setIsVisibleEditUser(false))}>Exit</button>
        </>
    );
}

