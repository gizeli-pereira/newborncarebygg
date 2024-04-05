export const ActionTypes = {
    SET_USER: "SET_USER",
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                userData: action.payload
            }
    }
}