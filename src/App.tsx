import React from 'react';
import './App.css';
import LargeButton from './components/UI/Buttons/LargeButton/LargeButton';
import MediumButton from './components/UI/Buttons/MediumButton/MediumButton';
import SmallButton from './components/UI/Buttons/SmallButton/SmallButton';
import LargeSlider from './components/UI/Sliders/LargeSlider';
import BookMark from './components/UI/BookMark/BookMark';
import RepliesDefault from './components/UI/TextButton/Replies/RepliesDefault';

const App: React.FC = () => {

  return (
    <div className="App">
      <LargeButton children={"get matches"}/>
      <MediumButton children={"let’s check"}/>
      <SmallButton children={"MESSAGE"}/>
      <RepliesDefault children={"My profile"}/>
      <LargeSlider disabled={true}/>
      <BookMark />
    </div>
  );
}

export default App;
