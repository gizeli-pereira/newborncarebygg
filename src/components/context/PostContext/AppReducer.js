export const ActionTypes = {
    SET_POSTS: "SET_POSTS",
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
    }
}