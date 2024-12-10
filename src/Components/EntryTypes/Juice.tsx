import React from 'react'
import { WineIcon } from '../SVGs/WineSVG'

interface JuiceProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Juice: React.FC<JuiceProps> = ({activeType, setActiveType}) => {
    const handleJuice = () => setActiveType('juice')


    return (
        <div onClick={handleJuice}>
            <button className={`entry-buttons ${activeType === 'juice' ? 'active' : ''}`} id='Juice'><WineIcon /></button>
        </div>
    )
}

export default Juice