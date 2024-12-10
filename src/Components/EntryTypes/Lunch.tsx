import React from 'react'
import { BowlIcon } from '../SVGs/BowlSVG'

interface LunchProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Lunch: React.FC<LunchProps> = ({activeType, setActiveType}) => {
    
    console.log(activeType)
    const handleLunch = () => setActiveType('lunch')

    return (
        <div onClick={handleLunch}>
            <button className={`entry-buttons ${activeType === 'lunch' ? 'active' : ''}`} id="Lunch"><BowlIcon /></button>
        </div>
    )
}

export default Lunch