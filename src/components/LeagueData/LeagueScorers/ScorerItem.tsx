"use client";

import React, { useState } from "react";
import Image from "next/image";

import PlayerPopup from "./PlayerPopup";

import { Player } from "@/types/Player";

type ScorerItemProps = {
    playerData: Player;
    team: { id: number; logo: string; name: string };
};

const ScorerItem: React.FC<ScorerItemProps> = ({ playerData, team }) => {
    const [activePlayer, setActivePlayer] = useState<Player | null>(null);

    return (
        <td className="relative text-left w-2/3 -z-5">
            <button
                id={`${playerData.id}-button`}
                onClick={() => setActivePlayer((prevState) => prevState ? null : playerData)}
                >
                <div className={`flex pl-4 gap-4 items-center w-52 md:w-auto`}>
                    <Image
                        src={team.logo}
                        width={30}
                        height={30}
                        alt={`${team.name} logo`}
                        title={team.name}
                        />
                    <p className="text-left hover:text-yellow-300 hover:scale-105">{playerData.name}</p>
                </div>
                {activePlayer === playerData && (
                    <PlayerPopup playerData={playerData} />
                )}
            </button>

        </td>
    );
};

export default ScorerItem;
