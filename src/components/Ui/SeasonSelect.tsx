"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { useSetNewParams } from "@/lib/hooks/useSetNewParams";

const SeasonSelect = () => {
    const seasons: [number, string][] = [
        [2013, "2013 / 2014"],
        [2014, "2014 / 2015"],
        [2015, "2015 / 2016"],
        [2016, "2016 / 2017"],
        [2017, "2017 / 2018"],
        [2018, "2018 / 2019"],
        [2019, "2019 / 2020"],
        [2020, "2020 / 2021"],
        [2021, "2021 / 2022"],
        [2022, "2022 / 2023"],
        [2023, "2023 / 2024"],
    ];

    const searchParams = useSearchParams();
    const setNewSeason = useSetNewParams();

    return (
        <>
            <select
                name=""
                id=""
                value={Number(searchParams.get("season")) || 2023}
                onChange={(event) => setNewSeason("season", event.target.value)}
                className="block appearance-none bg-fade-gray border border-gray-500 
                text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                focus:border-blue-100 cursor-pointer md:w-1/5 mb-2 text-sm md:text-base"
            >
                {seasons.map(([value, label]) => (
                    <option key={value} value={value} className="bg-gray-600">
                        {label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SeasonSelect;
