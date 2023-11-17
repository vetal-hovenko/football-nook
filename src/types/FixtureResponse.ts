type Fixture = {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
        first: number;
        second: number;
    };
    venue: {
        id: number;
        name: string;
        city: string;
    };
    status: {
        long: string;
        short: string;
        elapsed: number;
    };
};

type League = {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
};

export type Team = {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
};

export type Goals = {
    home: number | null;
    away: number | null;
};

type Score = {
    halftime: Goals;
    fulltime: Goals;
    extratime: Goals;
    penalty: Goals;
};

export type Match = {
    fixture: Fixture;
    league: League;
    teams: {
        home: Team;
        away: Team;
    };
    goals: Goals;
    score: Score;
};

export type FixtureResponse = {
    response: Match[];
};
