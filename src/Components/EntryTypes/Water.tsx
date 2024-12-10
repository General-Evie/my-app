import React from 'react'
import { WaterIcon } from '../SVGs/WaterSVG'

interface WaterProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Water: React.FC<WaterProps> = ({activeType, setActiveType }) => {

    const handleWater = () => setActiveType('water')

    return (
        <div onClick={handleWater}>
            <button className={`entry-buttons ${activeType === 'water' ? 'active' : ''}`} id='Water'><WaterIcon /></button>
        </div>
    )
}

export default Water