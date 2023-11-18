"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "../../Ui/Container";

import { fetchStandingsById } from "@/api/fetchStandingsById";

import { League } from "@/types/LeagueByIdResponse";


type StandingsHeaderProps = {
    id: number;
};

const StandingsHeader: React.FC<StandingsHeaderProps> = ({ id }) => {
    const [leagueInfo, setLeagueInfo] = useState<League | null>(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const info = await fetchStandingsById(id, 2023);
            setLeagueInfo(info.response[0].league);
        };

        fetchInfo();
    }, [id]);

    return (
        <aside className="mb-5 h-48 bg-fade-gray">
            <Container>
                <div className="flex flex-col-reverse h-48 items-center justify-center gap-4 px-8 py-2">
                    <h1 className="text-xl md:text-4xl text-white font-bold">
                        {leagueInfo ? leagueInfo.name : "Wait a second...."}
                    </h1>

                    {leagueInfo && (
                        <Image
                            src={leagueInfo.logo}
                            width={70}
                            height={70}
                            alt={`${leagueInfo.name} Logo`}
                            quality="100"
                        />
                    )}
                </div>
            </Container>
        </aside>
    );
};

export default React.memo(
    StandingsHeader,
    (oldProps, newProps) => oldProps.id === newProps.id
);
