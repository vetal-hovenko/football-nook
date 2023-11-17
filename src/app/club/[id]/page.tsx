import React from "react";
import Image from "next/image";

import { Container } from "@/components/Ui/Container";
import NavBar from "@/components/Ui/NavBar/NavBar";
import LastMatches from "@/components/LastMatches";
import GoBackButton from "@/components/Ui/GoBackButton";

import { fetchClub } from "@/api/fetchClub";
import { fetchLastMatchesByTeam } from "@/api/fetchLastMatchesByTeam";

import { SearchParams } from "@/types/SearchParams";

const ClubPage = async ({ params }: { params: SearchParams }) => {
    const id = params.id;

    const clubResponse = await fetchClub(id);
    const lastMatches = await fetchLastMatchesByTeam(id, 2023);
    const club = clubResponse.response[0].team;
    const stadium = clubResponse.response[0].venue;

    return (
        <>
            <NavBar />
            <main>
                <Container>
                    <section className="flex flex-col items-center justify-center text-white pt-3 min-h-[90vh]">
                        <article className="flex flex-col items-center gap-4">
                            <Image
                                height="100"
                                width="100"
                                alt="club"
                                src={club.logo}
                                quality={100}
                            />
                            <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide">
                                {club.name}
                            </h1>
                        </article>

                        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-2">
                            Stadium
                        </h2>
                        <article className="flex mb-4 md:mb-0 flex-col md:flex-row gap-4 text-white">
                            <Image
                                height="400"
                                width="400"
                                alt={`${club.name} stadium`}
                                src={stadium.image}
                                quality={100}
                            />
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold">
                                    {stadium.name}
                                </p>
                                <p>
                                    Address:&nbsp;
                                    <a
                                        target="_blank"
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                            `${stadium.address}, ${stadium.city}`
                                        )}`}
                                        className="text-base text-blue-300 hover:text-gold-title"
                                    >
                                        {stadium.address}, {stadium.city}
                                    </a>
                                </p>
                                <p className="text-base">
                                    Capacity: {stadium.capacity}
                                </p>
                            </div>
                        </article>
                    </section>

                    <LastMatches
                        title={`Last 10 Matches of ${club.name}`}
                        matches={lastMatches}
                    />

                    <section className="flex mt-4 justify-center">
                        <GoBackButton />
                    </section>
                </Container>
            </main>
        </>
    );
};

export default ClubPage;
