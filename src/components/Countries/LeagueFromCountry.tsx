import { LeagueData } from "@/types/CountryResponse";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LeagueFromCountry = ({ league }: { league: LeagueData }) => {
    const { name, logo, id } = league.league;

    return (
        <li className="mb-1 hover:bg-[#e1e2d339] bg-[#ffffff42]">
            <Link href={`/standings/${id}`} className="flex items-center gap-4 h-full p-2">
                <Image
                    src={logo}
                    width={25}
                    height={25}
                    sizes="100vw"
                    alt={`${name} logo`}
                />
                <p className="text-white  font-semibold">{name}</p>
            </Link>
        </li>
    );
};

export default LeagueFromCountry;
