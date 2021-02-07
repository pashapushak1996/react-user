import {createStore} from "redux";
import reducer from "./reducers/users-reducer";



export const store = createStore(reducer)