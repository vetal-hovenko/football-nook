import { FixtureResponse, Match } from "@/types/FixtureResponse";
import { getRequestOptions } from './getOptions';

export async function fetchMatchById(id: number): Promise<Match[]> {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: FixtureResponse = await response.json();
        
        return result.response;
    } catch (error) {
        throw new Error("Unexpected error: failed to fetch this match");
    }
}
