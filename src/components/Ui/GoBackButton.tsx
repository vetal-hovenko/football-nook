"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HiArrowCircleLeft } from "react-icons/hi";


const GoBackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };
    return (
        <button
            onClick={handleGoBack}
            className="go-back border-2 border-white text-white px-3 py-1 rounded-md flex items-center gap-2"
        >
            Back <span><HiArrowCircleLeft size="30" /></span>
        </button>
    );
};

export default GoBackButton;
