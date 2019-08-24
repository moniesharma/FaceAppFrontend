import React from 'react';
import Tilt from 'react-tilt';
import faceLogo from './faceLogo.png';
import './logo.css'
const logo = () => {
    return (
        <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner"><img syle= {{paddingTop:'50px'}} src={faceLogo} alt="Logo" /> </div>
            <p> You can't hide your face!</p>
        </Tilt>
        </div>
    )
}

export default logo;