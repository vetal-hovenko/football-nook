import React from "react";

import { Container } from "@/components/Ui/Container";
import SeasonSelect from "@/components/Ui/SeasonSelect";
import StandingsHeader from "@/components/LeagueData/LeagueTable/StandingsHeader";  
import DataSwitch from "@/components/LeagueData/DataSwitch";
import ShownLeagueData from "@/components/LeagueData/ShownLeagueData";
import NavBar from "@/components/Ui/NavBar/NavBar";

import { SearchParams } from "@/types/SearchParams";

export type ShownData = "Table" | "Goalscorers" | "Matches";

const Standings = ({ params }: {params: SearchParams}) => {
    const id = +params.id;
    const dataSwitchers: ShownData[] = ["Table", "Goalscorers", "Matches"];

    return (
        <>
            <NavBar />
            <StandingsHeader id={id} />

            <main >
                <Container>
                    <nav className="flex justify-between">
                        <SeasonSelect />
                    </nav>

                    <section className="rounded-md pb-2">
                        {dataSwitchers.map((button) => (
                            <DataSwitch
                                key={button}
                                title={button}
                            />
                        ))}

                        <ShownLeagueData
                            id={id}
                        />
                    </section>
                </Container>
            </main>
        </>
    );
};

export default Standings;
