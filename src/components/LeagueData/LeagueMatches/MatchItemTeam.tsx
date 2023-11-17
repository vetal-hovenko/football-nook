import React from "react";
import Image from "next/image";
import Link from "next/link";

import { nameFormatter } from "@/lib/helpers/nameFormatter";

import { Team } from "@/types/FixtureResponse";

type MatchItemTeamProps = {
    team: Team
}

const MatchItemTeam: React.FC<MatchItemTeamProps> = ({team}) => {
    const formattedName =  nameFormatter(team.name);

    return (
        <Link className="team-logo flex flex-col items-center gap-1 w-32" href={`/club/${team.id}`}>
            <Image
                width={40}
                height={40}
                src={team.logo}
                alt={`${team.name} logo`}
                title={team.name}
            />

            <p className="text-sm text-center">{formattedName}</p>
        </Link>
    );
};

export default MatchItemTeam;
