export type Player = {
    age: number;
    birth: {
        country: string;
        date: string;
        place: string;
    };
    firstame: string;
    height: string;
    id: number;
    injured: boolean;
    lastname: string;
    name: string;
    nationality: string;
    photo: string;
    weight: string;
};

export type Statistics = {
    cards: {
        red: number;
        yellow: number;
        yellowred: number;
    };
    dribbles: {
        attempts: number;
        past: number | null;
        success: number;
    };
    duels: {
        total: number;
        won: number;
    };
    fouls: {
        committed: number;
        drawn: number;
    };
    games: {
        appearences: number;
        captain: boolean;
        lineups: number;
        minutes: number;
        number: number | null;
        position: string;
        rating: string;
    };
    goals: {
        assists: number;
        conceded: number;
        saves: number | null;
        total: number;
    };
    team: {
        id: number;
        logo: string;
        name: string;
    };
};

export type GoalScorer = {
    player: Player,
    statistics: Statistics[]
}


export type GoalScorerResponse = {
    response: GoalScorer[];
};
