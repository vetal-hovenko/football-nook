import { FixtureResponse, Match } from "@/types/FixtureResponse";
import { getRequestOptions } from "./getOptions";

export async function fetchFixturesByLeagueId(id: number, season: number): Promise<Match[]> {
    const url =
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${id}&season=${season}&timezone=Europe/London`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: FixtureResponse = await response.json();
        
        
        return result.response
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch fixtures.");
    }
}
