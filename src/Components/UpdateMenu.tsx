import React, { useEffect, useState } from 'react'
import { DeleteIcon } from './SVGs/DeleteSVG';
import { PenIcon } from './SVGs/PenSVG';
import EntryMenu from './EntryMenu';
import Lunch from './EntryTypes/Lunch';
import Tfood from './EntryTypes/Tfood';
import Junk from './EntryTypes/Junk';
import Snacks from './EntryTypes/Snacks';
import Dinner from './EntryTypes/Dinner';
import Breakfast from './EntryTypes/Breakfast';
import Water from './EntryTypes/Water';
import Tea from './EntryTypes/Tea';
import Juice from './EntryTypes/Juice';
import Energy from './EntryTypes/Energy';
import Alcohol from './EntryTypes/Alcohol';
import Typedrink from './EntryTypes/Typedrink';
import Coffee from './EntryTypes/Coffee';
import Exercise from './EntryTypes/Exercise';
import Meds from './EntryTypes/Meds';
import Herbal from './EntryTypes/Herbal';
import Supplements from './EntryTypes/Supplements';

interface UpdateProps {
    open: boolean;
    Close: () => void;
    update: boolean;
    displayDate: Date;
    onSaveEntry: (newEntry: JSX.Element) => void;
    initialDate: Date;
    localStorageKey: string;
    entryData: any;
    deleteEntry: (entryId: any) => void;
    activeType: string;
    setActiveType: (type: string) => void;
}

const UpdateMenu: React.FC<UpdateProps> = ({ open, Close, displayDate, onSaveEntry, initialDate, localStorageKey, update, entryData, deleteEntry, activeType, setActiveType }) => {
    const [openEntryUpdate, setOpenEntryUpdate] = useState<boolean>(false);

    const renderComponent = () => {
        switch (entryData.type) {
            case 'Lunch':
                return <Lunch
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Food':
                return <Tfood
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Junk':
                return <Junk
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Snacks':
                return <Snacks
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Dinner':
                return <Dinner
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Breakfast':
                return <Breakfast
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Water':
                return <Water
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Tea':
                return <Tea
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Juice':
                return <Juice
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Energy':
                return <Energy
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Alcohol':
                return <Alcohol
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Drink':
                return <Typedrink
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Coffee':
                return <Coffee
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Exercise':
                return <Exercise
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Meds':
                return <Meds
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Herbal':
                return <Herbal
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            case 'Supplements':
                return <Supplements
                    activeType={activeType}
                    setActiveType={setActiveType}
                />;
            default:
                return null;
        }
    }

    const EntryUpdate = () => {
        setOpenEntryUpdate(true)
    }

    const handleDelete = () => {
        deleteEntry(entryData.id);
    };

    if (!open) return null

    return (
        <div>
            <div className="update-menu">
                <div className="update-header">
                    <h1>
                        <i className="fas close-update-menu" onClick={Close}>&#xf104;</i>
                        Details
                        <div className='delete-icon' onClick={handleDelete}>
                            <span className='tooltip'>Delete Entry</span>
                            <DeleteIcon />
                        </div>
                    </h1>
                </div>
                <div className="update-content">
                    <div className="update-main">
                        <div className='update-type'>
                            <div className='update-component'>{renderComponent()}</div>
                            <div className='update-type-name'>{entryData.type}</div>
                        </div>
                        <div className='update-details'>
                            <div className='update-time'>Time:  {entryData.selectedTime}</div>
                            <div className='update-date'>Date:  {entryData.selectedEntryDate
                                ? new Date(entryData.selectedEntryDate).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                                : null}
                            </div>
                            <div className='update-description'>Description:  {entryData.description}</div>
                        </div>
                    </div>
                    <button className="update-entry-button" onClick={EntryUpdate}>
                        <span className='tooltip'>Edit Entry</span>
                        <PenIcon />
                    </button>
                </div>
                <EntryMenu
                    onSaveEntry={onSaveEntry}
                    open={openEntryUpdate}
                    update={update}
                    Close={() => setOpenEntryUpdate(false)}
                    displayDate={displayDate}
                    initialDate={initialDate}
                    localStorageKey={localStorageKey}
                    entryData={entryData}
                    activeType={activeType}
                    setActiveType={setActiveType}
                />
            </div>
            <div onClick={Close} id="update-menu-overlay"></div>
        </div>
    )
}

export default UpdateMenu