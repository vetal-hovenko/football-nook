import React from "react";

import { Container } from "@/components/Ui/Container";
import NavBar from "@/components/Ui/NavBar/NavBar";
import StatsHeader from "@/components/MatchStatistics/StatsHeader";
import LastMatches from "@/components/LastMatches";
import TeamInfo from "@/components/MatchStatistics/TeamInfo";
import StatsList from "@/components/MatchStatistics/StatsList";
import GoBackButton from "@/components/Ui/GoBackButton";

import { fetchMatchStats } from "@/api/fetchMatchStats";
import { fetchMatchById } from "@/api/fetchMatchById";
import { fetchHeadToHead } from "@/api/fetchHeadToHead";

import { SearchParams } from "@/types/SearchParams";
import { Goals, Match } from "@/types/FixtureResponse";

const MatchStats = async ({ params }: { params: SearchParams }) => {
    const statsResponse = await fetchMatchStats(+params.id);
    const fixtureResponse = await fetchMatchById(+params.id);
    const goals = fixtureResponse ? fixtureResponse[0].goals : ({} as Goals);

    const [stats1, stats2] = statsResponse;

    const headToHeadMatches =
        stats1 && stats2
            ? await fetchHeadToHead(stats1.team.id, stats2.team.id)
            : ([] as Match[]);

    return (
        <>
            <NavBar />
            <main className="p-3 mt-16">
                <Container>
                    {stats1 && stats2 ? (
                        <>
                            <section className="bg-[#14467449] p-4 rounded-md text-gold-title border-2 border-gray-700 relative">
                                <article className="flex flex-col items-center mb-4 md:mb-0 gap-2">
                                    <StatsHeader fixture={fixtureResponse} />
                                </article>

                                <article className="flex justify-between items-center">
                                    {stats1 && <TeamInfo team={stats1.team} />}
                                    <div className="flex justify-between text-2xl gap-4 font-semibold">
                                        <p>{goals.home}</p>
                                        <p>-</p>
                                        <p>{goals.away}</p>
                                    </div>
                                    {stats2 && <TeamInfo team={stats2.team} />}
                                </article>

                                <article className="mt-4">
                                    {statsResponse && (
                                        <StatsList
                                            stats1={stats1}
                                            stats2={stats2}
                                        />
                                    )}
                                </article>
                            </section>

                            <LastMatches
                                title="Last 5 matches between these teams"
                                matches={headToHeadMatches}
                            />

                            <section className="flex mt-4 justify-center">
                                <GoBackButton />
                            </section>
                        </>
                    ) : (
                        <section className="flex flex-col gap-9 h-[50vh] justify-center items-center">
                            <h1 className="text-white text-xl md:text-3xl text-center">
                                Unfortunately, there are no statistics for this
                                match.
                            </h1>
                            <GoBackButton />
                        </section>
                    )}
                </Container>
            </main>
        </>
    );
};

export default MatchStats;
