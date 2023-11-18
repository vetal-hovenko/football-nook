import { CountryFetch } from "@/types/CountryFetch";
import { getRequestOptions } from "./getOptions";

export async function fetchCountries(): Promise<CountryFetch> {
    const url = "https://api-football-v1.p.rapidapi.com/v3/countries";
    
    const options = getRequestOptions();

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result;
    } catch (error) {
        throw new Error("Unexpected error: failed fetching countries");
    }
}
