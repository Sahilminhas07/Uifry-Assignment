import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useTheme from '../Context/Theme';

const ModeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (checked) => {
    if (checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      onChange={onChangeBtn}
      checked={themeMode === 'dark'}
      size={30}
    />
  );
};

export default ModeButton;
