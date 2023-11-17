import React from "react";
import Image from "next/image";
import Link from "next/link";

import { nameFormatter } from "@/lib/helpers/nameFormatter";

type TeamItemProps = {
    id: number;
    logo: string;
    name: string;
};

const TeamItem: React.FC<TeamItemProps> = ({ id, logo, name }) => {
    return (
        <Link
            href={`/club/${id}`}
            className="flex items-center gap-2 pl-2 md:gap-4 w-40 md:w-52"
        >
            <Image width={20} height={20} src={logo} alt={`${name} logo`} />
            <p className="hover:text-yellow-300 hover:scale-105" title={name}>
                {nameFormatter(name)}
            </p>
        </Link>
    );
};

export default TeamItem;
