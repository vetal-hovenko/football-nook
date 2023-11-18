import { MatchStatsResponse, TeamStats } from "@/types/MatchStats";
import { getRequestOptions } from "./getOptions";

export async function fetchMatchStats(id: number): Promise<[TeamStats, TeamStats]> {
    const url =
        `https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics?fixture=${id}`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: MatchStatsResponse = await response.json();
        
        return result.response;
    } catch (error) {
        console.error("Error fetching stats:", error);
        return [] as unknown as [TeamStats, TeamStats];
    }
}
