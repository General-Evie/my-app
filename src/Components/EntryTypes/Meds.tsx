import React from 'react'
import { MedsIcon } from '../SVGs/MedsSVG'

interface MedsProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Meds: React.FC<MedsProps> = ({activeType, setActiveType}) => {
     const handleMeds = () => setActiveType('meds')


    return (
        <div onClick={handleMeds}>
            <button className={`entry-buttons ${activeType === 'meds' ? 'active' : ''}`} id='Meds'><MedsIcon /></button>
        </div>
    )
}

export default Meds