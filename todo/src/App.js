import React, { useState } from 'react';
import './App.css';
import Todo from './todo';
import Settings from './settings';
import SettingsContext from './SettingsContext';
function App() {
const [ShowSettings, setShowSettings] = useState(false);
const [workMinutes, setWorkMinutes] = useState(25);
const [breakMinutes,setBreakMinutes] = useState(5);

  return (
<main>

      <SettingsContext.Provider value={{
        ShowSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
      {ShowSettings ? <Settings/>: <Todo/>}
      </SettingsContext.Provider>
      </main>
  );
}

export default App;
