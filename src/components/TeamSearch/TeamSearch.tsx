"use client";

import React, { useEffect, useRef, useState } from "react";

import TeamSearchItem from "./TeamSearchItem";
import { Container } from "../Ui/Container";
import { TbSearch } from "react-icons/tb";

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

    const handleListHide = () => {
        setShowList(!showList);
    };

    return (
        <Container>
            <div className="relative flex items-center misted-glass rounded-md px-2">
                <TbSearch size={30} />
                <input
                    className="w-full px-4 py-2 text-xl bg-transparent"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                {clubs.length > 0 && (
                    <button
                        className="text-gray-400 z-10 mr-3"
                        onClick={handleListHide}
                    >
                        {showList ? "Hide" : "Show"}
                    </button>
                )}
            </div>
            {query && noClubs && (
                <p className="text-gold-title p-2 text-sm md:text-base">
                    Unfortunately, we do not have information about the desired
                    club.
                </p>
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
