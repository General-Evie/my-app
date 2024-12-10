import React from 'react'
import Water from './EntryTypes/Water'
import Tea from './EntryTypes/Tea'
import Juice from './EntryTypes/Juice'
import Energy from './EntryTypes/Energy'
import Alcohol from './EntryTypes/Alcohol'
import Typedrink from './EntryTypes/Typedrink'
import Coffee from './EntryTypes/Coffee'

interface DrinkProps {
    drink: (isOpen: boolean) => void;
    renderType: (type: string) => void;
    activeType: string;
    setActiveType: (type: string) => void;
}

const Drink:React.FC<DrinkProps> = ({ drink, renderType, activeType, setActiveType }) => {

    const handleType = (type: string) => {
        drink(true);
        renderType(type)
      };


    return (
        <div>
            <div className="drink">
            <span className='tooltip'>Select a Type</span>
                <div className="entry-type" onClick={() => handleType('Water')}>
                    <Water 
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Water</div>
                </div>
                <div className="entry-type" onClick={() => handleType('Tea')}>
                    <Tea 
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Tea</div>
                </div>
                <div className="entry-type" onClick={() => handleType('Juice')}>
                    <Juice 
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Juice</div>
                </div>
                <div className="entry-type" onClick={() => handleType('Energy')}>
                    <Energy 
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Energy</div>
                </div>
                <div className="entry-type" onClick={() => handleType('Alcohol')}>
                    <Alcohol 
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Alcohol</div>
                </div>
                <div className="entry-type" onClick={() => handleType('Drink')}>
                    <Typedrink 
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Drink</div>
                </div>
                <div className="entry-type" onClick={() => handleType('Coffee')}>
                    <Coffee     
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Coffee</div>
                </div>
            </div>
        </div>
    )
}

export default Drink