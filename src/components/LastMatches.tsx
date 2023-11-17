import React from "react";

import LastMatchesList from "./MatchStatistics/LastMatchesList";

import { Match } from "@/types/FixtureResponse";

type LastMatchesProps = {
    title: string,
    matches: Match[]
}

const LastMatches: React.FC<LastMatchesProps> = ({title, matches}) => {
    return (
        <section className="mt-8 text-white">
            <h2 className="text-base md:text-xl font-bold text-center mb-4">
                {title}
            </h2>

            <LastMatchesList matches={matches}/>
        </section>
    );
};

export default LastMatches;
