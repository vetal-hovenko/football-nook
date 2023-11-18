"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import LeagueDataComponent from "./LeagueDataComponent";
import Fixtures from "./LeagueMatches/Fixtures";
import ScorersList from "./LeagueScorers/ScorersList";
import Table from "./LeagueTable/Table";

import { fetchFixturesByLeagueId } from "@/api/fetchFixturesById";
import { fetchStandingsById } from "@/api/fetchStandingsById";
import { fetchScorers } from "@/api/fetchScorers";


import { ShownData } from "@/app/standings/[id]/page";
import { Match } from "@/types/FixtureResponse";
import { LeagueResponse } from "@/types/LeagueByIdResponse";
import { GoalScorerResponse } from "@/types/Player";


type ShownLeagueDataProps = {
    id: number;
};

const ShownLeagueData: React.FC<ShownLeagueDataProps> = ({ id }) => {
    const searchParams = useSearchParams();
    const season = searchParams.get("season") || 2023;
    const validSeason = +season || 0;
    const initialShownData = searchParams.get("data");
    const shownData: ShownData =
        initialShownData !== null ? (initialShownData as ShownData) : "Table";

    const renderTable = (data: LeagueResponse) => <Table data={data} />;
    const renderMatches = (data: Match[]) => (
        <Fixtures data={data} season={validSeason} />
    );

    const renderScorersList = (data: GoalScorerResponse) => (
        <ScorersList data={data} />
    );

    const shownComponents: Record<ShownData, React.JSX.Element> = {
        Table: (
            <LeagueDataComponent<LeagueResponse>
                id={id}
                season={validSeason}
                fetchFunction={fetchStandingsById}
                renderComponent={renderTable}
            />
        ),
        Goalscorers: (
            <LeagueDataComponent<GoalScorerResponse>
                id={id}
                season={validSeason}
                fetchFunction={fetchScorers}
                renderComponent={renderScorersList}
            />
        ),
        Matches: (
            <LeagueDataComponent<Match[]>
                id={id}
                season={validSeason}
                fetchFunction={fetchFixturesByLeagueId}
                renderComponent={renderMatches}
            />
        ),
    };
    return shownComponents[shownData];
};

export default ShownLeagueData;
