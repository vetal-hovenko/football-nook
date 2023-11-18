import { GoalScorerResponse } from "@/types/Player";
import { getRequestOptions } from "./getOptions";

export async function fetchScorers(id: number, season: number): Promise<GoalScorerResponse> {
    const url =
        `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${id}&season=${season}`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: GoalScorerResponse = await response.json();
        
        return result;
    } catch (error) {
        throw new Error("Failed to fetch goalscorers!")
    }
}
