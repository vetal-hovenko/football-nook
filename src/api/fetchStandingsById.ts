import { LeagueResponse } from '@/types/LeagueByIdResponse';
import { getRequestOptions } from './getOptions';

export async function fetchStandingsById(
    id: number,
    season: number
): Promise<LeagueResponse> {
    const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${id}`;

    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: LeagueResponse = await response.json();

        if (result.response.length < 1) {
            throw new Error("No information available.")
        }

        return result;
    } catch (error) {
        throw new Error(
            "Unexpected error, unable to fetch the standing by this id."
        );
    }
}