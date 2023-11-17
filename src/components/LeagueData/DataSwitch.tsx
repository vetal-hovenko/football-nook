"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { ShownData } from "@/app/standings/[id]/page";

import { useSetNewParams } from "@/lib/hooks/useSetNewParams";

type DataSwitchProps = {
    title: ShownData,
}

const DataSwitch: React.FC<DataSwitchProps> = ({ title }) => {
    const searchParams = useSearchParams();
    const initialShownData = searchParams.get("data");
    const shownData2: ShownData = initialShownData !== null ? initialShownData as ShownData : "Table";

    const setNewShownData = useSetNewParams();
    return (
        <button
            onClick={() => setNewShownData("data", title)}
            className={`p-2  rounded-t-md mr-[1px] text-xs md:text-base lg:text-lg
            ${
                shownData2 === title ? "text-white bg-fade-gray " : "text-[#dadce2c2] hover:bg-[#ffffff71]"
            }`}
        >
            {title}
        </button>
    );
};

export default DataSwitch;
