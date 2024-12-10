import React from 'react'
import { BeerIcon } from '../SVGs/BeerSVG'

interface AlcoholProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Alcohol: React.FC<AlcoholProps> = ({activeType, setActiveType}) => {
    const handleAlcohol = () => setActiveType('alcohol')


    return (
        <div onClick={handleAlcohol}>
            <button className={`entry-buttons ${activeType === 'alcohol' ? 'active' : ''}`} id='Alcohol' color='#000'><BeerIcon /></button>
        </div>
    )
}

export default Alcohol