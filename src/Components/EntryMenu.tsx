import React, { useEffect, useState } from 'react'
import LowerEntryMenu from './LowerEntryMenu'
import Food from './Food'
import Drink from './Drink'
import Other from './Other'

interface EntryMenuProps {
  open: boolean;
  Close: () => void;
  update: boolean;
  displayDate: Date;
  onSaveEntry: (newEntry: JSX.Element) => void,
  initialDate: Date;
  localStorageKey: string;
  entryData: any;
  activeType: string;
  setActiveType: (type: string) => void;
}

const EntryMenu: React.FC<EntryMenuProps> = ({ open, Close, displayDate, onSaveEntry, initialDate, localStorageKey, update, entryData, activeType, setActiveType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>('food')

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)


  const handleFood = () => setActiveTab('food');
  const handleDrink = () => setActiveTab('drink');
  const handleOther = () => setActiveTab('other');

  const clickedComponent = (type: string) => {
    setSelectedComponent(type)
  };

  const handleClick = () => {
    Close();
    setIsOpen(false)
  }


  useEffect(() => {
    if (update === true) {
      setIsOpen(true)
    }
  })

  if (!open) return null
  return (
    <div>
      <div className="entry-menu">
        <div className="entry-menu-header">
          <h1><i className="fas close-menu" onClick={Close}>&#xf104;</i>Manage</h1>
          <nav className="entry-menu-nav">
            <span className='tooltip' id='category'>Select a Category</span>
            <li className={`entry-menu-li ${activeTab === 'food' ? 'active' : ''}`} id="food" onClick={handleFood}>Food</li>
            <li className={`entry-menu-li ${activeTab === 'drink' ? 'active' : ''}`} id="drink" onClick={handleDrink}>Drink</li>
            <li className={`entry-menu-li ${activeTab === 'other' ? 'active' : ''}`} onClick={handleOther}>Other</li>
          </nav>
        </div>
        <div className="entry-menu-content">
          {activeTab === 'food' && <Food
            food={isOpen => setIsOpen(isOpen)}
            renderType={clickedComponent}
            activeType={activeType}
            setActiveType={setActiveType}
          />}
          {activeTab === 'drink' && <Drink
            drink={isOpen => setIsOpen(isOpen)}
            renderType={clickedComponent}
            activeType={activeType}
            setActiveType={setActiveType}
          />}
          {activeTab === 'other' && <Other
            other={isOpen => setIsOpen(isOpen)}
            renderType={clickedComponent}
            activeType={activeType}
            setActiveType={setActiveType}
          />}
          <LowerEntryMenu
            onSaveEntry={onSaveEntry}
            open={isOpen}
            Close={Close}
            update={update}
            displayDate={displayDate}
            selectedComponent={selectedComponent}
            initialDate={initialDate}
            localStorageKey={localStorageKey}
            entryData={entryData}
            activeType={activeType}
            setActiveType={setActiveType}
          />
        </div>
      </div>
      <div id="entry-menu-overlay" onClick={handleClick}></div>
    </div>
  )
}

export default EntryMenu