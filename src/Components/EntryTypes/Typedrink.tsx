import React from 'react'
import { WaterIcon } from '../SVGs/WaterSVG'

interface TypedrinkProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Typedrink: React.FC<TypedrinkProps> = ({activeType, setActiveType}) => {
    const handleTDrink = () => setActiveType('drink')


    return (
        <div onClick={handleTDrink}>
            <button className={`entry-buttons ${activeType === 'drink' ? 'active' : ''}`} id='Drink'><WaterIcon /></button>
        </div>
    )
}

export default Typedrink