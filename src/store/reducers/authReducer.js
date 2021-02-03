const defaultState = {
    user: {},
    token: null,
    error: null,
    profile: null,
}

const auth = (state = defaultState, action) => {        // 1st argument has a default value of defaultState | 2nd argument is the function that is being dispatched
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
            }
        case 'SHOW_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        case 'AFTER_LOGIN':
            return {
                ...state,
                user: action.payload,
                profile: action.payload.Profile,    
            }
        default:
            return state;
    }
}

export default auth;