import React from 'react'
import { TeaIcon } from '../SVGs/TeaSVG'

interface TeaProps {
    activeType: string;
    setActiveType: (type: string) => void
}
   

const Tea: React.FC<TeaProps> = ({ activeType, setActiveType}) => {
    const handleTea = () => setActiveType('tea')


    return (
        <div onClick={handleTea}>
            <button className={`entry-buttons ${activeType === 'tea' ? 'active' : ''}`} id='Tea'><TeaIcon /></button>
        </div>
    )
}

export default Tea