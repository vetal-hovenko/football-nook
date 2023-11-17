import { FixtureResponse, Match } from "@/types/FixtureResponse";
import { getRequestOptions } from './getOptions';

export async function fetchHeadToHead(
    idOfFirst: number,
    idOfSecond: number
): Promise<Match[]> {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=${idOfFirst}-${idOfSecond}`;
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result: FixtureResponse = await response.json();

        return [...result.response].sort((match1, match2) =>
            match2.fixture.date.localeCompare(match1.fixture.date)
        ).slice(2, 7);
    } catch (error) {
        throw new Error(
            "Unexpected error: failed to fetch head to head matches"
        );
    }
}
