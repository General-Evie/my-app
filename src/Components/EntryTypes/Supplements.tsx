import React from 'react'
import { PillsIcon } from '../SVGs/PillsSVG'

interface SupplementsProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Supplements: React.FC<SupplementsProps> = ({activeType, setActiveType}) => {
    const handleSupplements = () => setActiveType('supplements')


    return (
        <div onClick={handleSupplements}>
            <button className={`entry-buttons ${activeType === 'supplements' ? 'active' : ''}`} id='Supplements'><PillsIcon /></button>
        </div>
    )
}

export default Supplements