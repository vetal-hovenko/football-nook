import React from "react";

import LastMatchesList from "../MatchStatistics/LastMatchesList";

import { Match } from "@/types/FixtureResponse";

type LastMatchesProps = {
    title: string,
    matches: Match[]
}

const LastMatches: React.FC<LastMatchesProps> = ({title, matches}) => {
    return (
        <section className="mt-8 text-white">
            <h2 className="text-base md:text-xl font-bold text-center mb-1">
                {title}
            </h2>
            <p className='text-sm text-center mb-4 text-gray-400'>No goals displayed? Find full stats for details.</p>

            <LastMatchesList matches={matches}/>
        </section>
    );
};

export default LastMatches;
