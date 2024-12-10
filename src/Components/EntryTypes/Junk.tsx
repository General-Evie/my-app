import React from "react";
import { BurgerIcon } from "../SVGs/BurgerSVG";

interface JunkProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Junk: React.FC<JunkProps> = ({activeType, setActiveType}) => {
    const handleJunk = () => setActiveType('junk')

    return (
        <div onClick={handleJunk}>
            <button className={`entry-buttons ${activeType === 'junk' ? 'active' : ''}`} id="Junk"><BurgerIcon /></button>
        </div>
    )
}

export default Junk