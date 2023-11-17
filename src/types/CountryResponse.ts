export type CountryResponse = {
    response: LeagueData[]
}

export type LeagueData = {
    country: Country;
    league: League;
}

export type Country = {
    name: string;
    code: string;
    flag: string;
}

export type League = {
    id: number,
    logo: string,
    name: string,
    type: string,
}