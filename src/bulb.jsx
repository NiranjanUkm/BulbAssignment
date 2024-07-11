import React, { useState } from 'react';
import './bulb.css'; 

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleBulb = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="bulb-container">
            <div className={`bulb ${isOn ? 'on' : 'off'}`}></div>
            <button onClick={toggleBulb}>
                {isOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
};

export default Bulb;
