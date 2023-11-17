import React from "react";

import MatchItem from "../LeagueData/LeagueMatches/MatchItem";

import { Match } from "@/types/FixtureResponse";

const LastMatchesList = ({matches}: {matches: Match[]}) => {
    return (
        <ul className="flex flex-wrap gap-2 justify-center">
            {matches.map((match) => (
                <MatchItem
                    match={match}
                    key={match.fixture.id}
                    id={match.fixture.id}
                    formattedTime={match.fixture.date.slice(0, 10)}
                    bgColor="#14467449"
                />
            ))}
        </ul>
    );
};

export default LastMatchesList;
