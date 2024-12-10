import React from "react";
import { PizzaIcon } from "../SVGs/PizzaSVG";

interface SnacksProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Snacks: React.FC<SnacksProps> = ({activeType, setActiveType}) => {
    const handleSnacks = () => setActiveType('snacks')

    return (
        <div onClick={handleSnacks}>
            <button className={`entry-buttons ${activeType === 'snacks' ? 'active' : ''}`} id="Snacks"><PizzaIcon /></button>
        </div>
    )
}

export default Snacks