import React from "react";

import { Stat } from "@/types/MatchStats";

type SingleStatProps = {
    stat1: Stat;
    stat2: Stat;
};

const SingleStat: React.FC<SingleStatProps> = ({ stat1, stat2 }) => {
    const displayedStat =
        stat1.type === "expected_goals" ? (
            <p title="Expected Goals" className="font-semibold text-sm md:text-base">
                XG
            </p>
        ) : (
            <p className="font-semibold text-sm md:text-base">{stat1.type}</p>
        );
    return (
        <li className="flex justify-between items-center mb-3 md:px-8 border-b-2 border-gray-700">
            <p className="text-bse md:text-xl">{stat1.value || 0}</p>
            {displayedStat}
            <p className="text-bse md:text-xl">{stat2.value || 0}</p>
        </li>
    );
};

export default SingleStat;
