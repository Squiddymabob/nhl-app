import { combineReducers } from 'redux';
import * as actions from './actions';

const preferences = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARKTHEME:
      console.log(state);
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default combineReducers({ preferences });
