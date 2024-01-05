import React from 'react';
import Countdown from './Countdown';

const App = () => {
  const targetDate = '2025-01-01T00:00:00';

  return (
    <div className="App">
      <h1>Countdown</h1>
      <Countdown targetDate={targetDate} />
    </div>
  );
};

export default App;
