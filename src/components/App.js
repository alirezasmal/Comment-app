import React from 'react';
import Avatar from 'avatar-generator';
import './App.css';
const App = () => {
  return (
    <div className="comment-container">
      <div className="Image-icon">
        <img src="" alt="avatar" />
      </div>
      <div className="comment-section">
        <div className="top">
          <h4>Sam wilson</h4>
          <span>Time:Today at 5:00</span>
        </div>
        <p className="act-comment">I Hate my Life!</p>
      </div>
    </div>
  );
};

export default App;
