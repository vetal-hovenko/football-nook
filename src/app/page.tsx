import React from "react";

import CountriesList from "@/components/Countries/CountriesList";
import { HomePageHeader } from "@/components/Ui/HomePageHeader";
import TeamSearch from "@/components/TeamSearch/TeamSearch";
import { Container } from "@/components/Ui/Container";
import { fetchCountries } from "@/api/fetchCountries";

export default async function Home() {
    const countries = await fetchCountries();
    const subtitleStyles = "text-gold-title text-2xl md:text-4xl font-bold text-center my-2"

    return (
        <>
            <HomePageHeader />

            <main className="countries pt-10">
                <h2 className={subtitleStyles}>Search the team</h2>
                <section className="rounded-md w-full md:w-5/6 mx-auto mb-16 h-16">
                    <TeamSearch />
                </section>

                <h2 className={subtitleStyles}>Countries List</h2>
                <section className="w-full md:w-5/6 mx-auto ">
                    <Container>
                        <div className="bg-[#808080a2] p-2 rounded-md ">
                            <CountriesList countries={countries}/>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}


