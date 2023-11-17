import React from "react";

import { Match } from "@/types/FixtureResponse";

type StatsHeaderProps = {
    fixture: Match[]
}

const StatsHeader: React.FC<StatsHeaderProps> = ({ fixture }) => {
    const stadium = fixture[0].fixture.venue;
    const league = fixture[0].league.name;
    const date = new Date(fixture[0].fixture.date);

    return (
        <>
            <h2 className="text-xl font-bold text-center">{league}</h2>
            <p>{date.toISOString().slice(0, 10)}</p>
            <a
                target="_blank"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${stadium.name}, ${stadium.city}`
                )}`}
                className="text-base text-blue-300 hover:text-gold-title text-center"
            >
                {stadium.name}, {stadium.city}
            </a>
        </>
    );
};

export default StatsHeader;
