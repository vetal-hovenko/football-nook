export type CountryFetch = {
    response: CountryInfo[];
}

export type CountryInfo = {
    code?: string | null;
    flag: string | null;
    name: string;
};