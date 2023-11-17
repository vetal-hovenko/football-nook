"use client";

import React, { useEffect, useRef, useState } from "react";

import TeamSearchItem from "./TeamSearchItem";
import { Container } from "../Ui/Container";

import { fetchTeamsByName } from "@/api/fetchTeamsByName";

import { ClubData } from "@/types/ClubResponse";

const TeamSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [clubs, setClubs] = useState<ClubData[]>([]);
    const [showList, setShowList] = useState<boolean>(true);
    const [noClubs, setNoClubs] = useState<boolean>(false);

    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const debounceTimeout = setTimeout(async () => {
            if (query) {
                const clubsResponse = await fetchTeamsByName(query);
                setClubs(clubsResponse);
                setNoClubs(clubsResponse.length === 0);
            } else {
                setClubs([]);
                setNoClubs(false);
            }
        }, 500);
        
        return () => clearTimeout(debounceTimeout);
    }, [query]);

    const handleButtonClick = () => {
        setShowList(!showList);
    };

    return (
        <Container>
            <div className="relative">
                <input
                    className="w-full px-4 py-2 text-xl rounded-md bg-transparent border-2 border-gray-400 text-white"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />

                {query && noClubs && (
                    <p className="text-gold-title p-2 text-sm md:text-base">
                        Unfortunately, we do not have information about the
                        desired club.
                    </p>
                )}
            </div>

            {clubs.length > 0 && (
                <button
                    className="absolute top-1 right-0 px-3 py-1 text-gray-400 z-10 mr-3"
                    onClick={handleButtonClick}
                >
                    {showList ? "Hide" : "Show"}
                </button>
            )}

            {showList && clubs.length > 0 && (
                <Container>
                    <ul
                        ref={listRef}
                        className="absolute right-0 left-0 border-[1px] rounded-md border-[#8080807a] top-2 bg-[#111b2d] text-gold-title max-h-72 overflow-y-scroll z-50"
                    >
                        {clubs.map((club) => (
                            <TeamSearchItem key={club.team.id} club={club} />
                        ))}
                    </ul>
                </Container>
            )}
        </Container>
    );
};

export default TeamSearch;
