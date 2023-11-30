"use client";

import React, { useState } from "react";

import LeagueFromCountry from "./LeagueFromCountry";
import CountryButton from "./CountryButton";


import { fetchLeagues } from "@/api/fetchLeagues";

import { CountryInfo } from "@/types/CountryFetch";
import { CountryResponse, LeagueData } from "@/types/CountryResponse";

const CountryItem = ({ name, flag }: CountryInfo) => {
    const [leaguesResponse, setLeaguesResponse] = useState<LeagueData[] | null>(
        null
    );

    const [showLeagues, setShowLeagues] = useState<boolean>(!!leaguesResponse);
    const [loading, setLoading] = useState<boolean>(false);

    const toggleLeagues = async () => {
        if (!leaguesResponse) {
            setLoading(true);

            const leagues: CountryResponse = await fetchLeagues(name);
            setLeaguesResponse(leagues.response.filter(l => l.league.type === "League").slice(0, 3));

            await new Promise((resolve) => setTimeout(resolve, 500));
            setShowLeagues(true);
            setLoading(false);
        } else {
            setShowLeagues(!showLeagues);
        }
    };

    return (
        <li className="mb-2 shadow-lg w-full misted-glass">
            <CountryButton 
                name={name}
                flag={flag}
                toggleLeagues={toggleLeagues}
                showLeagues={showLeagues}
                loading={loading}
            />

            <ul className={`pl-5 relative ${showLeagues ? "pb-4 pt-1" : ""}`}>
                {showLeagues &&
                    leaguesResponse &&
                    leaguesResponse.map((league) => (
                        <LeagueFromCountry
                            key={league.league.name}
                            league={league}
                        />
                    ))}
            </ul>
        </li>
    );
};

export default CountryItem;
