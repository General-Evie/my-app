import React from 'react'
import { UtensilsIcon } from '../SVGs/UtensilsSVG';

interface TfoodProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Tfood: React.FC<TfoodProps> = ({activeType, setActiveType}) => {
   
    const handleTfood = () => setActiveType('food')

    return (
        <div onClick={handleTfood}>
            <button className={`entry-buttons ${activeType === 'food' ? 'active' : ''}`} id='Food'><UtensilsIcon /></button>
        </div>
    )
}

export default Tfood