import { FixtureResponse, Match } from "@/types/FixtureResponse";
import { getRequestOptions } from "./getOptions";

export async function fetchLastMatchesByTeam(id: string, season: number): Promise<Match[]> {
    const url =
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=${season}&team=${id}`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: FixtureResponse = await response.json();

        return [...result.response].sort((m1, m2) =>
            m2.fixture.date.localeCompare(m1.fixture.date)
        )
        .filter(m => new Date(m.fixture.date) <= new Date())
        .slice(0, 10);
    } catch (error) {
        throw new Error("Unexpected error: failed to fetch last matches.");
    }
}
