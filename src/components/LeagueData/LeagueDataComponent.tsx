"use client";

import { ReactNode, useState } from "react";
import useSWR from "swr";

import { fetchDataUniqueData } from "@/lib/helpers/fetchUniqueData";


type LeagueDataComponentProps<T> = {
    id: number;
    season: number;
    fetchFunction: (id: number, season: number) => Promise<any>;
    renderComponent: (data: any) => ReactNode;
};

const LeagueDataComponent = <T,>({
    id,
    season,
    fetchFunction,
    renderComponent,
}: LeagueDataComponentProps<T>) => {
    const [cachedData, setCachedData] = useState<Record<string, T>>({});
    const cacheKey = `${fetchFunction.name}-${id}-${season}`;

    const { data, error } = useSWR(cacheKey, () =>
        fetchDataUniqueData<T>(
            cacheKey,
            id,
            season,
            cachedData,
            setCachedData,
            fetchFunction
        )
    );

    if (error) return (
        <article className="h-screen bg-fade-gray p-2">
            <h3 className="text-xl text-white">We have no information about this season.</h3>
        </article>
    );

    return <>{renderComponent(data)}</>;
};

export default LeagueDataComponent;
