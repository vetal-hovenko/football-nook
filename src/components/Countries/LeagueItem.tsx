"use client";

import React, { useState } from "react";
import Image from "next/image";

import LeagueFromCountry from "./LeagueFromCountry";

import { LeagueData } from "@/types/CountryResponse";

export type Props = {
    name: string;
    flag: string | null;
    leagues: LeagueData[];
};

const LeagueItem: React.FC<Props> = ({ name, flag, leagues }) => {
    const [showLeagues, setShowLeagues] = useState<boolean>(false);

    const toggleLeagues = () => {
        setShowLeagues(!showLeagues);
    };

    return (
        <li className="mb-4 shadow-md">
            <div className="flex items-center gap-2 p-2">
                <div className="h-6 w-6">
                    <Image
                        src={flag ? flag : ""}
                        alt={name + " flag"}
                        width={0}
                        height={0}
                        className="h-auto w-full"
                    />
                </div>

                <button
                    className="font-bold text-xl text-indigo-700 hover:text-indigo-900 py-2 px-4 rounded-full"
                    onClick={toggleLeagues}
                >
                    {name}
                </button>
            </div>

            <ul className="pl-4 relative">
                {showLeagues &&
                    leagues &&
                    leagues.map((league) => (
                        <LeagueFromCountry
                            key={league.league.name}
                            league={league}
                        />
                    ))}
            </ul>
        </li>
    );
};

export default LeagueItem;
