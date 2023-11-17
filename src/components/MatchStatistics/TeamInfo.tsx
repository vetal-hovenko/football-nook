import React from "react";
import Link from "next/link";
import Image from "next/image";

import { nameFormatter } from "@/lib/helpers/nameFormatter";

import { Team } from "@/types/FixtureResponse";

export const TeamInfo = ({ team }: { team: Team }) => {
    return (
        <Link
            href={`/club/${team.id}`}
            className="flex flex-col items-center w-1/3 gap-2"
        >
            <Image
                width={75}
                height={75}
                src={team.logo}
                alt="logo"
                className="w-16 h-16 md:w-20 md:h-20"
                title={team.name}
                quality={100}
            />
            <h2 className="text-base md:text-xl font-bold">
                {nameFormatter(team.name)}
            </h2>
        </Link>
    );
};

export default TeamInfo;
