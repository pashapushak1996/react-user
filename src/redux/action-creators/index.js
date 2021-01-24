import {SET_USER, SET_USERS} from "../action-types";

export const setUser = (payload) => ({type: SET_USER, payload});
export const setUsers = (payload) => ({type: SET_USERS, payload});