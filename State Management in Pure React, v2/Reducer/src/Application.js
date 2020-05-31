import React, { useReducer, useCallback } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';
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

const Application = () => {
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

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;