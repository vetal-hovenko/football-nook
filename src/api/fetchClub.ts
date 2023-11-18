import { ClubResponse } from "@/types/ClubResponse";
import { getRequestOptions } from "./getOptions";

export async function fetchClub(id: string): Promise<ClubResponse> {
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`;

    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: ClubResponse = await response.json();
        return result;
    } catch (error) {
        throw new Error("Unexpected error: Unable to fetch this club");
    }
}
