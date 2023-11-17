"use client";

import React from "react";
import Image from "next/image";

import { Player } from "@/types/Player";

type PlayerPopupProps = {
    playerData: Player;
};

const PlayerPopup: React.FC<PlayerPopupProps> = ({ playerData }) => {
    const { name, nationality, age, height, weight, photo } = playerData;

    return (
        <div className="text-xs md:text-sm lg:text-base flex gap-8 items-center px-4 shadow-md"
        >
            <div className="flex flex-col items-center">
                <Image
                    src={photo}
                    width={70}
                    height={70}
                    alt={name + " photo"}
                    className="rounded-full self-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70px"
                />
            </div>

            <ul className="text-left">
                <li className="mb-1">Age: {age}</li>
                <li className="mb-1">Nationality: {nationality}</li>
                <li className="mb-1">Height: {height}</li>
                <li className="mb-1">Weight: {weight}</li>
            </ul>
        </div>
    );
};

export default PlayerPopup;
