const SET_USERS = 'SET_USERS';
const SET_USER = 'SET_USER';
const SET_IS_VISIBLE_FULL_USER = 'SET_IS_VISIBLE_FULL_USER';
const SET_IS_VISIBLE_EDIT_USER = 'SET_IS_VISIBLE_EDIT_USER';
const SET_IS_VISIBLE_CREATE_USER = 'SET_IS_VISIBLE_CREATE_USER';
const SET_USER_NAME = `SET_USER_NAME`;
const SET_USERNAME = `SET_USERNAME`;
const SET_USER_PHONE = `SET_USER_PHONE`;
const SET_USER_EMAIL = `SET_USER_EMAIL`;
const SET_USER_WEBSITE = `SET_USER_WEBSITE`;
const ADD_USER = `ADD_USER`;


const initialState = {
    users: [],
    isVisibleFullUser: null,
    isVisibleEditUser: null,
    isVisibleCreateUser: null,
    user: null,
    name: '',
    email: '',
    phone: '',
    username: '',
    website: '',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.payload}
        }
        case SET_USER: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case SET_IS_VISIBLE_FULL_USER: {
            return {
                ...state,
                isVisibleFullUser: action.payload
            }
        }
        case SET_IS_VISIBLE_EDIT_USER: {
            return {
                ...state,
                isVisibleEditUser: action.payload
            }
        }
        case SET_IS_VISIBLE_CREATE_USER: {
            return {
                ...state,
                isVisibleCreateUser: action.payload
            }
        }
        case SET_USER_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case SET_USERNAME: {
            return {
                ...state,
                username: action.payload
            }
        }
        case SET_USER_PHONE: {
            return {
                ...state,
                phone: action.payload
            }
        }
        case SET_USER_EMAIL: {
            return {
                ...state,
                email: action.payload
            }
        }
        case SET_USER_WEBSITE: {
            return {
                ...state,
                website: action.payload
            }
        }
        case ADD_USER: {
            const newUser = {
                id: Math.ceil(Math.random() * 1000),
                name: state.name,
                username: state.username,
                email: state.email,
                phone: state.phone,
                website: state.website
            }
            return {
                ...state,
                users: [...state.users, newUser]
            }
        }
        default: {
            return state
        }
    }
}

export default usersReducer;

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const setIsVisibleFullUser = (payload) => ({type: SET_IS_VISIBLE_FULL_USER, payload});
export const setIsVisibleEditUser = (payload) => ({type: SET_IS_VISIBLE_EDIT_USER, payload});
export const setIsVisibleCreateUser = (payload) => ({type: SET_IS_VISIBLE_CREATE_USER, payload});

export const setUserName = (payload) => ({type: SET_USER_NAME, payload});
export const setUsername = (payload) => ({type: SET_USERNAME, payload});
export const setUserPhone = (payload) => ({type: SET_USER_PHONE, payload});
export const setUserEmail = (payload) => ({type: SET_USER_EMAIL, payload});
export const setUserWebsite = (payload) => ({type: SET_USER_WEBSITE, payload});
export const addUser = () => ({type: ADD_USER});




