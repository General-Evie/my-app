import React from 'react'
import { WheatPlateIcon } from '../SVGs/WheatPlateSVG'

interface DinnerProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Dinner: React.FC<DinnerProps> = ({activeType, setActiveType}) => {
    const handleDinner = () => setActiveType('dinner')


    return (
        <div onClick={handleDinner}>
            <button className={`entry-buttons ${activeType === 'dinner' ? 'active' : ''}`} id='Dinner'><WheatPlateIcon /></button>
        </div>
    )
}

export default Dinner