import React from 'react';
import './css/App.css';
import LargeButton from './components/UI/LargeButton';
import MediumButton from './components/UI/MediumButton';
import SmallButton from './components/UI/SmallButton';
import TextButton from './components/UI/TextButton';
import Slider from './components/UI/Slider';
import BookMark from './components/UI/BookMark';

const App: React.FC = () => {
  return (
    <div className="App">
      <LargeButton />
      <MediumButton />
      <SmallButton />
      <TextButton />
      <Slider />
      <BookMark />
    </div>
  );
}

export default App;
