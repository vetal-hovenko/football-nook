import { Team } from "./FixtureResponse"

export type MatchStatsResponse = {
    response: [TeamStats, TeamStats]
}

export type TeamStats = {
    statistics: Stat[],
    team: Team
}

export type Stat = {type: string, value: number | string}