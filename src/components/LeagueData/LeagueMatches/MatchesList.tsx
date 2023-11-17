import React from "react";

import MatchItem from "./MatchItem";

import { Match } from "@/types/FixtureResponse";

type MatchesListProps = {
    groupedMatches: Map<string, Match[]>,
    date: string
}

const MatchesList: React.FC<MatchesListProps> = ({groupedMatches, date}) => {
    const listItemRef = React.useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={listItemRef}
            className="flex flex-col items-center mb-2 px-2 text-sm md:text-lg bg-[#00000056]"
        >
            <h2 className="py-2 text-center w-max border-b-2 border-black mb-4 text-white">
                {date}
            </h2>
            <ul className="flex flex-wrap justify-center gap-2 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] pb-8">
                {groupedMatches.get(date)?.map((match) => {
                    const matchDate = new Date(match.fixture.date);
                    const hours = matchDate.getHours();
                    const minutes = matchDate.getMinutes();

                    const formattedTime = `${hours
                        .toString()
                        .padStart(2, "0")}:${minutes
                        .toString()
                        .padStart(2, "0")}`;

                    return (
                        <MatchItem
                            key={match.fixture.id}
                            match={match}
                            formattedTime={formattedTime}
                            id={match.fixture.id}
                            bgColor="#122f3d"
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default MatchesList;
