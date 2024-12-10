import React from 'react'
import { WheatIcon } from '../SVGs/WheatSVG'

interface HerbalProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Herbal: React.FC<HerbalProps> = ({activeType, setActiveType}) => {
    const handleHerbal = () => setActiveType('herbal')


    return (
        <div onClick={handleHerbal}>
            <button className={`entry-buttons ${activeType === 'herbal' ? 'active' : ''}`} id='Herbal'><WheatIcon /></button>
        </div>
    )
}

export default Herbal