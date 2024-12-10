import React, { useState, useEffect } from 'react'
import { CheckIcon } from './SVGs/CheckMarkSVG';
import TimeMenu from './TimeMenu';
import Calendar2 from './Calendar2';
import { v4 as uuidv4 } from 'uuid';
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
import { ListIcon } from './SVGs/ListSVG';
import { ClockIcon } from './SVGs/ClockSVG';
import { CalendarIcon } from './SVGs/CalendarSVG';




interface LowerEntryMenuProps {
    open: boolean;
    displayDate: Date;
    update: boolean;
    onSaveEntry: (newEntry: JSX.Element) => void,
    Close: () => void;
    initialDate: Date;
    localStorageKey: string;
    selectedComponent: string | null
    entryData: any;
    activeType: string;
    setActiveType: (type: string) => void;
}

const LowerEntryMenu: React.FC<LowerEntryMenuProps> = ({ open, displayDate, Close, initialDate, localStorageKey, onSaveEntry, selectedComponent, update, entryData, setActiveType, activeType }) => {


    const getCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        const minutesString = minutes.toString().padStart(2, '0');

        return `${hours}:${minutesString} ${ampm}`;
    };


    const [time, setTime] = useState(new Date())
    const [openDescriptions, setOpenDescriptions] = useState<boolean>(false)
    const [openClock, setOpenClock] = useState<boolean>(false)
    const [selectedTime, setSelectedTime] = useState(getCurrentTime)
    const [Calendar2Open, setCalendar2Open] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedEntryDate, setSelectedEntryDate] = useState<Date | null>(initialDate);
    const [type, setType] = useState<string | null>();
    const [description, setDescription] = useState('');


    const makeEntry = () => {
        const entryId = update ? entryData.id : uuidv4();
        const newEntryData = {
            id: entryId,
            type: type,
            description: description,
            selectedTime: selectedTime,
            selectedEntryDate: selectedEntryDate
        };

        const newEntryElement = (
            <div className='entries' key={entryId}>
                <div className='type-of-entry'>
                    <div>
                        <div className='selected-child'>{type}</div>
                        <div className='entry-details'>{description}</div>
                    </div>
                    <div className='entry-time'>{selectedTime}</div>
                </div>
            </div>
        );


        onSaveEntry(newEntryElement);

        const existingEntries = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
        const updatedEntries = update
            ? existingEntries.map((entry: any) => (entry.id === entryData.id ? newEntryData : entry)) : [...existingEntries, newEntryData];

        localStorage.setItem(localStorageKey, JSON.stringify(updatedEntries));

        window.location.reload();
    };

    useEffect(() => {
        renderComponent();
        setType(selectedComponent);
        if (update) {
            setType(selectedComponent || entryData.type);
            setDescription(entryData.description)
            setSelectedTime(entryData.selectedTime)
            setSelectedEntryDate(new Date(entryData.selectedEntryDate))
        }

    }, [entryData, selectedComponent, update])

    const renderComponent = () => {
        switch (type) {
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

    const handleDesciptions = () => {
        setOpenDescriptions(true)
    }

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleClock = () => {
        setOpenClock(true)
    }


    const handleSelectDate = (date: Date) => {
        setSelectedEntryDate(date);
    };

    const handleCalendar = () => {
        setCalendar2Open(true);
    };

    const handleEnterClick = () => {
        if (selectedEntryDate) {
            setCurrentDate(selectedEntryDate);
            setCalendar2Open(false);
            console.log(selectedEntryDate)
        }
    };

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            makeEntry();
        }
    };

    if (!open) return null

    return (
        <div className="lower-entry-menu-background">
            <div className="lower-entry-menu" >
                <span className='tooltip'>Add a Description, Change Time, or Date</span>
                <div className="lower-entry-menu-header" >
                    <div className='selected-child'>{renderComponent()}</div>
                    <div className='entry-type-name'>{type}</div>
                    <button className="save" onClick={makeEntry}>Save <CheckIcon /></button>
                </div>
                <div className="input-content">
                    <div className="input-section" id="description">
                        <div className="inputs">
                            <label>
                                <div className="lower-entry-menu-icons"> <ListIcon /></div>
                                Description
                            </label>
                            <input
                                className="description-input"
                                type="text"
                                placeholder="Add Here"
                                value={description}
                                onChange={handleDescriptionChange}
                                onKeyDown={handleEnterPress}
                                required />
                        </div>
                        {/* <div className="description-menu" onClick={handleDesciptions}>Choose</div> */}
                    </div>
                    <div className="input-section" id="time">
                        <div className="inputs">
                            <label>
                                <div className="lower-entry-menu-icons"><ClockIcon /></div>
                                Time
                            </label>
                            <div className="selected-time">{selectedTime}</div>
                        </div>
                        <div className="clock-menu" onClick={handleClock}>Change</div>
                    </div>
                    <div className="input-section" id="lower-entry-menu-date">
                        <div className="inputs">
                            <label>
                                <div className="lower-entry-menu-icons"><CalendarIcon /></div>
                                Date
                            </label>
                            <div className="selected-date">
                                {selectedEntryDate ? selectedEntryDate.toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : displayDate.toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                        <div className="date-menu" onClick={handleCalendar}>Change</div>
                    </div>
                </div>
            </div>
            <TimeMenu open={openClock} setSelectedTime={setSelectedTime} Close={() => setOpenClock(false)} />
            <Calendar2
                openCalendar2={Calendar2Open}
                CloseCalendar2={() => setCalendar2Open(false)}
                onSelectDate={handleSelectDate}
                selectedDay={selectedEntryDate ? selectedEntryDate.getDate() : null}
                initialDate={initialDate}
                handleEnterClick={handleEnterClick}
            />
        </div>
    )
}

export default LowerEntryMenu