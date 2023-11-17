import React from "react";

import SingleStat from "./SingleStat";

import { TeamStats } from "@/types/MatchStats";

type StatsListProps = {
    stats1: TeamStats,
    stats2: TeamStats,
}

const StatsList: React.FC<StatsListProps> = ({stats1, stats2}) => {
    return (
        <ul>
            {stats1.statistics.map((stat1, i) => {
                return (
                    <SingleStat
                        key={stat1.type}
                        stat1={stat1}
                        stat2={stats2.statistics[i]}
                    />
                );
            })}
        </ul>
    );
};

export default StatsList;
