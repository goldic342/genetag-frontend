import React from 'react';
import './css/App.css';
import LargeButton from './components/UI/LargeButton';
import MediumButton from './components/UI/MediumButton';
import SmallButton from './components/UI/SmallButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <LargeButton />
      <MediumButton />
      <SmallButton />
    </div>
  );
}

export default App;
