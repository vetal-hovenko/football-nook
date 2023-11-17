import { ClubData } from '@/types/ClubResponse';
import { getRequestOptions } from './getOptions';

export async function fetchTeamsByName(name: string): Promise<ClubData[]> {
    const url =
        `https://api-football-v1.p.rapidapi.com/v3/teams?search=${name}`;

    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        return result.response ? result.response : [];
    } catch (error) {
        throw new Error("Unexpected error: failed to fetch the club.");
    }
}
