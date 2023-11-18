import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ClubData } from "@/types/ClubResponse";

const TeamSearchItem = ({ club }: { club: ClubData }) => {
    const {name, logo, id} = club.team;
    return (
        <li>
            <Link href={`/club/${id}`} className="flex gap-4 p-2 items-center">
            <Image src={logo} width={30} height={30} alt={`${name} logo`}/>
            <p>{name}</p>
            </Link>
        </li>
    );
};

export default TeamSearchItem;
