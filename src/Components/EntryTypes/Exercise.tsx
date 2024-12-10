import React from 'react'
import { DumbBellIcon } from '../SVGs/DumbBellSVG'

interface ExerciseProps {
    activeType: string;
    setActiveType: (type: string) => void;
}

const Exercise: React.FC<ExerciseProps> = ({activeType, setActiveType}) => {
     const handleExercise = () => setActiveType('exercise')


    return (
        <div onClick={handleExercise}>
            <button className={`entry-buttons ${activeType === 'exercise' ? 'active' : ''}`} id='Exercise'><DumbBellIcon /></button>
        </div>
    )
}

export default Exercise