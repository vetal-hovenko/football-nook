import { LeagueResponse } from "@/types/LeagueByIdResponse";
import { getRequestOptions } from "./getOptions";

export async function fetchLeagues(country: string) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log({response})

        return result;
    } catch (error) {
        throw new Error("Failed to fetch countries.")
    }
}
