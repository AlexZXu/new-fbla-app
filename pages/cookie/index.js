import React from 'react'
import { FaCookie } from 'react-icons/fa'
export default function Cookie() {
    const [clicks, setClicks] = React.useState(0);

    return (
        <div>
            <FaCookie style={{fontSize: '600px'}} onClick = {() => {setClicks(prevClicks => prevClicks + 1)}}/>
            <div style={{fontSize: '25px', fontFamily: 'Inter', fontWeight: '600', userSelect: 'none'}}>{clicks}</div>
        </div>
    )
}
