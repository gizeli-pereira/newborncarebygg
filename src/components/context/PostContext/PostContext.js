import React, {Children, createContext, Posteducer } from 'react';

import AppReducer, { ActionTypes } from './AppReducer';

const initialState = {
    posts: {},
}

export const PostContext = createContext(initialState);

export const PostProvider = ({ children }) => {
    const [state, dispatch] = Posteducer(AppReducer, initialState);

    function setPosts(PostData) {
        dispatch({ type: ActionTypes.SET_POSTS, payload: posts })
    };

    return (
        <PostContext.Provider value={{
            ...state,
            setPosts
        }}>
            { children }
        </PostContext.Provider>
    );
};