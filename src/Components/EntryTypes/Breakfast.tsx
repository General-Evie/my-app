import React from 'react'
import { BaconIcon } from '../SVGs/BaconSVG'

interface BreakfastProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Breakfast: React.FC<BreakfastProps> = ({activeType, setActiveType}) => {
    
    const handleBreakfast = () => setActiveType('breakfast')

    return (
        <div onClick={handleBreakfast}>
            <button className={`entry-buttons ${activeType === 'breakfast' ? 'active' : ''}`} id='Breakfast'><BaconIcon /></button>
        </div>
    )
}

export default Breakfast