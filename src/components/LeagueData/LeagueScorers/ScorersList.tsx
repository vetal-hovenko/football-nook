import React from "react";

import ScorerItem from "./ScorerItem";

import UserHint from "../../Ui/UserHint";
import Loader from "../../Ui/Loader/Loader";

import { GoalScorerResponse } from "@/types/Player";

type ScorersListProps = { data: GoalScorerResponse};

const ScorersList: React.FC<ScorersListProps> = ({ data }) => {
    return (
        <article className="bg-[#ffffff63] p-2 min-h-screen">
            <UserHint />

            {data ? (
                <div id="scorers-parent" className="overflow-y-hidden ">
                    <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg text-xs md:text-base fade-in">
                        <thead className="bg-gradient-to-r from-pink-400 via-[#40648e] to-pink-400 text-white">
                            <tr>
                                <th>Position</th>
                                <th className="w-min">Name</th>
                                <th>Matches</th>
                                <th>Goals</th>
                                <th>Assists</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.response.map((player, index) => {
                                const { player: playerData } = player;
                                const { games, goals, team } = player.statistics[0];
                                return (
                                    <tr key={playerData.id}>
                                        <td>{index + 1}</td>
                                        <ScorerItem
                                            playerData={playerData}
                                            team={team}
                                        />
                                        <td>{games.appearences}</td>
                                        <td>{goals.total}</td>
                                        <td>{goals.assists || "0"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="h-64 flex justify-center items-center">
                    <Loader size={100} />
                </div>
            )}
        </article>
    );
};

export default ScorersList;
