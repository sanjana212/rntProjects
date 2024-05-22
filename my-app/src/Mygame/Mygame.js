import './Mygame.css';
import React, { useState, useRef } from 'react';

const Mygame = () => {
  const [keyframes, setKeyframes] = useState(`
    to {
      transform: translateX(20vw);
    }
  `);

  const [toggleRotation, setToggleRotation] = useState({
    active: false,
    addClassNames: '',
  });

  const AtomicRef = useRef();
  console.log('AtomicRef', AtomicRef);

  const handleButtonClick = (playState) => {
    AtomicRef.current.setPlayState(playState);
  };

  const handleToggleRotation = () => {
    const active = !toggleRotation.active;
    setToggleRotation({
      active: active,
      addClassNames: active ? 'active' : '',
    });

    setKeyframes(
      active
        ? `
          to {
            transform: translateX(20vw) rotate(360deg);
          }
        `
        : `
          to {
            transform: translateX(20vw);
          }
        `
    );

    handleButtonClick('running');
  };

  return (
    <div id="MyGame_container">
      <div id="Mygame_rowTop">
        <div className="Mygame_Button" onClick={() => handleButtonClick('running')}>
          Run
        </div>
        <div className="Mygame_Button" onClick={() => handleButtonClick('paused')}>
          Pause
        </div>
        <div className="Mygame_Button" onClick={() => handleButtonClick('reset')}>
          Reset
        </div>
        <div className="Mygame_Button" onClick={() => handleButtonClick('cancel')}>
          Cancel
        </div>
      </div>
      <div id="MyGame_rowMiddle">
        <div
          id="Mygame_circle"
          style={{
            animation: '3s ease-in-out infinite alternate',
            animationName: keyframes,
          }}
          ref={AtomicRef}
        ></div>
        <div className='bouncing_balls'>
          <ul>
            {/* <li></li>
            <li></li>
            <li></li>
            <li></li> */}
            {/* <li></li> */}
          </ul>
        </div>
      </div>
      <div id="MyGame_rowBottom">
        <div
          className={`Mygame_Button ${toggleRotation.addClassNames}`}
          onClick={handleToggleRotation}
        >
          Toggle Rotation
        </div>
      </div>
    </div>
  );
};

export default Mygame;



