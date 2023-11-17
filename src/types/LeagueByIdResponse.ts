export type LeagueResponse = {
    league: string,
    season: string,
    response: [{
        league: League,
        season: number,
    }];
}

export type League = {
    id: string,
    name: string,
    country: string,
    logo: string,
    flag: string,
    standings: [Standings[]]
}

export type Standings = {
    rank: number,
    team: {
        id: number,
        name: string,
        logo: string,
    },
    points: number,
    goalsDiff: number,
    form: string,
    all: {
        played: number,
        win: number,
        draw: number,
        lose: number,
        goals: {
            for: number,
            against: number,
        },
    },
}