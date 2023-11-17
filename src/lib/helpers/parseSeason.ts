import { ReadonlyURLSearchParams } from "next/navigation";

export const parseSeason = (searchParams: ReadonlyURLSearchParams) => {
    const today = new Date();
    let parsedSeason = searchParams.get("season") || 2023;
    let parsedMonth = searchParams.get("month") || 5;

    if (+parsedSeason === today.getFullYear()) {
        parsedMonth = today.getMonth() + 1;
    }

    if (+parsedMonth >= 1 && +parsedMonth <= 8) {
        parsedSeason = +parsedSeason + 1;
    }

    return new Date(`${+parsedSeason}-0${parsedMonth}-01`);
};