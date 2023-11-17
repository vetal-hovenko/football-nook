"use client";

import { Tourney } from "next/font/google";
import { HiArrowCircleDown } from "react-icons/hi";

const tourney = Tourney({ subsets: ["latin"], style: "italic" });


export const HomePageHeader = () => {
    const handleScroll = () => {
        const nextElement = document.querySelector(".countries");

        if (nextElement) {
            nextElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className={tourney.className + " text-4xl md:text-7xl text-gold-title italic"}>
                    Football Nook
                </h1>
                <p className="text-indigo-200 w-5/6 md:w-1/2 text-sm md:text-md">
                    Here you can find standings for numerous leagues from
                    different countries, along with top goal-scorers. Stay
                    tuned, as more leagues are coming soon!
                </p>
                <div className="flex gap-4">
                    <button
                        className="border-2 border-white text-white px-3 py-1 rounded-md glow-on-hover"
                        onClick={handleScroll}
                    >
                        <p className="flex items-center gap-2">
                            Countries
                            <HiArrowCircleDown size={20} />
                        </p>
                    </button>
                    <button
                        className="border-2 border-white text-white px-3 py-1 rounded-md glow-on-hover"
                        onClick={handleScroll}
                    >
                        <p className="flex items-center gap-2">
                            Clubs
                            <HiArrowCircleDown size={20} />
                        </p>
                    </button>
                </div>
            </div>
        </header>
    );
};
