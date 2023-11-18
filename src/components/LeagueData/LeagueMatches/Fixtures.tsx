"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import Loader from "../../Ui/Loader/Loader";
import FixturesNavBar from "./FixturesNavBar";
import MatchesList from "./MatchesList";

import { useSetNewParams } from "@/lib/hooks/useSetNewParams";
import { parseSeason } from "@/lib/helpers/parseSeason";
import { groupMatchesByDate } from "@/lib/helpers/groupMatchesByDate";

import { Match } from "@/types/FixtureResponse";


type FixturesProps = { 
    data: Match[],
    season: number 
};

const Fixtures: React.FC<FixturesProps> = ({ data, season }) => {
    const searchParams = useSearchParams();
    const setNewMonth = useSetNewParams();
    const [showNoMatchMessage, setShowNoMatchMessage] = useState(false);

    const [currentDate, setCurrentDate] = useState(parseSeason(searchParams));

    useEffect(() => {
        setCurrentDate(parseSeason(searchParams));
    }, [season]);

    const groupedMatches = useMemo(() => {
        const grouped = groupMatchesByDate(data);

        return grouped;
    }, [data])

    const matches = useMemo(() => {
        const arrFromMap = Array.from(groupedMatches.keys());

        const filteredMatches = arrFromMap.filter((date) => {
            const matchDate = new Date(date);

            const isSameMonth =
                matchDate.getMonth() === currentDate.getMonth() &&
                matchDate.getFullYear() === currentDate.getFullYear();

            return isSameMonth;
        });

        return filteredMatches;
    }, [groupedMatches, currentDate])

    useEffect(() => {
        setShowNoMatchMessage(false);
        
        const timeout = setTimeout(() => {
            if (matches.length === 0) {
                setShowNoMatchMessage(true);
            }
        }, 4000);

        return () => clearTimeout(timeout);
    }, [matches, currentDate]);

    useEffect(() => {
        setNewMonth("month", currentDate.getMonth() + 1);
    }, [currentDate]);

    return (
        <article className="bg-[#ffffff63] p-1 min-h-screen text-white">
            <FixturesNavBar 
                currentDate={currentDate} 
                setCurrentDate={setCurrentDate}
            />

            {!showNoMatchMessage && matches.length === 0 ? (
                <div className="h-64 flex justify-center items-center">
                    <Loader size={100} />
                </div>
            ) : showNoMatchMessage ? (
                <div className="h-64 flex justify-center items-center">
                    <p>There is no information about matches this month.</p>
                </div>
            ) : (
                matches.length > 0 && (
                    <div>
                        {matches.map((date) => (
                            <MatchesList
                                key={date}
                                groupedMatches={groupedMatches}
                                date={date}
                            />
                        ))}
                    </div>
                )
            )}
        </article>
    );
};

export default Fixtures;
