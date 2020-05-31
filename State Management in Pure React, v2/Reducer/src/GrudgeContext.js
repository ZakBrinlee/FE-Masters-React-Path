import React, { useReducer, createContext, useCallback } from 'react';
import id from 'uuid/v4';
import initialState from './initialState';

export const GrudgeContext = createContext();
const GRUDGETYPES = {
  FORGIVEN: 'FORGIVE',
  ADD: 'ADD'
};

const reducer = (state, action) => {
  if (action.type === GRUDGETYPES.ADD) {
    return [action.payload, ...state];
  }

  if (action.type === GRUDGETYPES.FORGIVE) {
    return state.map((grudge) => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
  }

  return state;
};

export const GrudgeProvider = ({ children }) => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback(
    ({ person, reason }) => {
      dispatch({
        type: GRUDGETYPES.ADD,
        payload: {
          person,
          reason,
          forgiven: false,
          id: id()
        }
      });
    },
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    (id) => {
      dispatch({
        type: GRUDGETYPES.FORGIVE,
        payload: {
          id
        }
      });
    },
    [dispatch]
  );

  const value = { grudges, addGrudge, toggleForgiveness };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
};
