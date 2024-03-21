import React from "react";

import Loader from "../../Ui/Loader/Loader";
import UserHint from "../../Ui/UserHint";
import TableItem from "./TableItem";

import { LeagueResponse } from "@/types/LeagueByIdResponse";

type TableProps = { data: LeagueResponse };

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <article className="overflow-x-hidden bg-[#ffffff63] p-2">
            {data ? (
                <>
                    <UserHint />

                    <div className="overflow-x-auto">
                        <table className=" min-w-full bg-white text-xs md:text-base fade-in">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th title="Points">P</th>
                                    <th title="Matches Played">M</th>
                                    <th title="Wins">W</th>
                                    <th title="Defeats">L</th>
                                    <th title="Draws">D</th>
                                    <th title="Goals Scored">GS</th>
                                    <th title="Goals Conceded">GC</th>
                                    <th title="Goals Difference">GD</th>
                                    <th title="Last 5 Matches">Record</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.response[0].league.standings[0].map(
                                    (teamFromAPI, i) => (
                                        <TableItem
                                            key={teamFromAPI.team.id}
                                            teamFromAPI={teamFromAPI}
                                        />
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="h-64 flex justify-center items-center">
                    <Loader size={100} />
                </div>
            )}
        </article>
    );
};

export default Table;
