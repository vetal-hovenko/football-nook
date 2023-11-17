type Venue = {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    image: string;
};

export type Club = {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
};

export type ClubData = {
    team: Club;
    venue: Venue;
}

export type ClubResponse = {
    response: ClubData[];
};
