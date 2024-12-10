import React from 'react'
import { EnergyIcon } from '../SVGs/EnergySVG'

interface EnergyProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Energy: React.FC<EnergyProps> = ({activeType, setActiveType}) => {
    const handleEnergy = () => setActiveType('energy')


    return (
        <div onClick={handleEnergy}>
            <button className={`entry-buttons ${activeType === 'energy' ? 'active' : ''}`} id='Energy'><EnergyIcon /></button>
        </div>
    )
}

export default Energy