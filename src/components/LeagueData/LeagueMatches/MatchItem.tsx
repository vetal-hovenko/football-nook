import React from "react";
import Link from "next/link";

import MatchItemTeam from "./MatchItemTeam";

import { Match } from "@/types/FixtureResponse";

type MatchItemProps = {
    match: Match;
    formattedTime: string;
    id: number;
    bgColor: string;
};

const MatchItem: React.FC<MatchItemProps> = ({
    match,
    formattedTime,
    id,
    bgColor,
}) => {
    const homeTeam = match.teams.home;
    const awayTeam = match.teams.away;
    const isPlayed = new Date(match.fixture.date) <= new Date();

    return (
        <li
            className="fade-in mb-2 shadow-xl w-[320px] rounded-md"
            style={{ backgroundColor: bgColor }}
        >
            <div className="text-center bg-fade-gray rounded-t-md text-white mb-4 text-sm">
                <p>{formattedTime}</p>
                <p>{match.league.name}</p>
            </div>

            <div className="flex items-center justify-between mb-4 px-1 text-2xl">
                <MatchItemTeam team={homeTeam} />
                <div className="flex gap-2 md:gap-4 text-lg">
                    <p>{match.goals.home}</p>
                    <p>-</p>
                    <p>{match.goals.away}</p>
                </div>
                <MatchItemTeam team={awayTeam} />
            </div>

            {isPlayed && (
                <Link
                    href={`/matchStats/${id}`}
                    className="text-blue-500 hover:underline w-full block text-center pb-2"
                >
                    View Stats
                </Link>
            )}
        </li>
    );
};

export default MatchItem;
