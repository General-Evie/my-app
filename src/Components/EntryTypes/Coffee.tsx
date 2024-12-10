import React from 'react'
import { CoffeeIcon } from '../SVGs/CoffeeSVG'

interface CoffeeProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Coffee: React.FC<CoffeeProps> = ({activeType, setActiveType}) => {
   const handleCoffee = () => setActiveType('coffee')


    return (
        <div onClick={handleCoffee}>
            <button className={`entry-buttons ${activeType === 'coffee' ? 'active' : ''}`} id='Coffee'><CoffeeIcon /></button>
        </div>
    )
}

export default Coffee