import React, {Children, createContext, useReducer } from 'react';

import AppReducer, { ActionTypes } from './AppReducer';

const initialState = {
    userData: {},
}

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setUser(userData) {
        dispatch({ type: ActionTypes.SET_USER, payload: userData })
    };

    return (
        <UserContext.Provider value={{
            ...state,
            setUser
        }}>
            { children }
        </UserContext.Provider>
    );
};