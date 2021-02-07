import {User} from "../User/User";
import {setIsVisibleCreateUser, setIsVisibleFullUser, setUser} from "../../redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {EditUser} from "../EditUser/EditUser";
import {CreateUser} from "../CreateUser/CreateUser";

export const Users = ({users}) => {
    const dispatch = useDispatch();
    const {user, isVisibleFullUser, isVisibleEditUser, isVisibleCreateUser} = useSelector(({users}) => users);

    return (
        <div>
            {users && users.map((user) => <div key={user.id}>
                {user.id}-{user.name}
                <button onClick={() => {
                    dispatch(setUser(user))
                    dispatch(setIsVisibleFullUser(true));
                }}>Details
                </button>
            </div>)}
            <div>
                <button onClick={() => dispatch(setIsVisibleCreateUser(true))}>Create user</button>
            </div>
            {isVisibleFullUser && <User {...user}/>}
            {isVisibleEditUser && <EditUser {...user}/>}
            {isVisibleCreateUser && <CreateUser/>}
        </div>

    );
}

