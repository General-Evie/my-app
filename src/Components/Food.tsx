import React, { useState } from 'react'
import Lunch from './EntryTypes/Lunch'
import Tfood from './EntryTypes/Tfood'
import Junk from './EntryTypes/Junk'
import Snacks from './EntryTypes/Snacks'
import Dinner from './EntryTypes/Dinner'
import Breakfast from './EntryTypes/Breakfast'

interface FoodProps {
    food: (isOpen: boolean) => void;
    renderType: (type: string) => void;
    activeType: string;
    setActiveType: (type: string) => void;
}


const Food: React.FC<FoodProps> = ({ food, renderType, activeType, setActiveType }) => {

    const handleType = (type: string) => {
        food(true);
        renderType(type)
    };

    return (
        <div>
            <div className="food">
                <span className='tooltip'>Select a Type</span>
                <div className='entry-type' onClick={() => handleType('Lunch')}>
                    <Lunch
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Lunch</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Food')}>
                    <Tfood
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Food</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Junk')}>
                    <Junk
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Junk</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Snacks')}>
                    <Snacks
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Snacks</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Dinner')}>
                    <Dinner
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Dinner</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Breakfast')}>
                    <Breakfast
                        activeType={activeType}
                        setActiveType={setActiveType}
                    />
                    <div className="entry-type-name">Breakfast</div>
                </div>
            </div>
        </div>
    )
}

export default Food