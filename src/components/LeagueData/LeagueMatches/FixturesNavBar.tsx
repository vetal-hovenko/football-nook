import React from 'react';

import {
    IoIosArrowDropleft as ArrowLeft,
    IoIosArrowDropright as ArrowRight,
} from "react-icons/io";

import { ALL_MONTHS } from '@/lib/helpers/Constants';

type FixturesNavBarProps = {
    currentDate: Date,
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const FixturesNavBar: React.FC<FixturesNavBarProps> = ({currentDate, setCurrentDate}) => {
    const currentMonth = currentDate.getMonth();
    const lastMonth = 4;
    const firstMonth = 7;

    const goToNextMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(
                prevDate.getFullYear(),
                prevDate.getMonth() + 1,
                1
            );
            return newDate;
        });
    };

    const goToPreviousMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(
                prevDate.getFullYear(),
                prevDate.getMonth() - 1,
                1
            );
            return newDate;
        });
    };

    const month = `${
        ALL_MONTHS[currentDate.getMonth()]
    } ${currentDate.getFullYear()}`;

    return (
        <nav className='flex justify-center mb-2 gap-2 text-xl text-white'>
            <button
                disabled={currentMonth === firstMonth}
                className='disabled:text-gray-400'
                onClick={() => goToPreviousMonth()}
            >
                <ArrowLeft />
            </button>
            <h2 className='w-48 text-center font-semibold text-base md:text-xl'>
                {month}
            </h2>
            <button
                disabled={currentMonth === lastMonth}
                className='disabled:text-gray-400'
                onClick={() => goToNextMonth()}
            >
                <ArrowRight />
            </button>
        </nav>
    );
};

export default FixturesNavBar;
