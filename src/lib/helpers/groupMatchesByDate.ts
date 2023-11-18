import { Match } from "@/types/FixtureResponse";
import { formatDate } from "./formatDate";

export function groupMatchesByDate (matches: Match[]) {
    const grouped = new Map();

    if (matches) {
        matches.forEach((match) => {
            const date = new Date(match.fixture.date);
            const formattedAPIDate = formatDate(date);

            if (!grouped.has(formattedAPIDate)) {
                grouped.set(formattedAPIDate, []);
            }

            grouped.get(formattedAPIDate)?.push(match);
        });
    }

    return grouped
};
