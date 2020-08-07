import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_DARKTHEME } from '../../redux/actions';

const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
  const dispatch = useDispatch();

  return (

    <div className="form-check form-switch">

      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
          checked={darkThemeEnabled}
        />
        Dark Mode
      </label>
    </div>

  );
};

export default DarkThemeToggle;
