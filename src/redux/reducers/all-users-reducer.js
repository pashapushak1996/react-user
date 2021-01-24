import { SET_USER, SET_USERS} from "../action-types";

const initialState = {
    users: [],
    user: {
        name: ``,
        username: ``,
        email: ``,
        phone: ``,
        website: ``
    },
    userEditionMenu: {
        name: ``,
        username: ``,
        email: ``,
        phone: ``,
        website: ``
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state, users: action.payload
            }
        }
        case SET_USER: {
            return {
                ...state, user: action.payload
            }
        }
        default : {
            return state
        }

    }
}
