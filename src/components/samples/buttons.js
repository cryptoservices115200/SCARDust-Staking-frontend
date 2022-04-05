import React from 'react';

const boxArrowUpRight = 'images/boxrrrowupright.svg';

function Button({icon, value, onClick}) {
    if(!value)
        value = '';
    return (
        //  variant="primary" className="mint-number-button"
        <button className="dust_button" onClick = {onClick}>{value} {icon && <img src = {boxArrowUpRight}/>}</button>
    )
}


export default Button;