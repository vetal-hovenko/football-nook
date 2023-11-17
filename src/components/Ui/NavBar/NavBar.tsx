import { fetchCountries } from "@/api/fetchCountries";
import CountriesList from "@/components/Countries/CountriesList";
import Link from "next/link";
import React from "react";
import { TbHome } from "react-icons/tb";
import CountiesWrapper from "./CountiesWrapper";
import { Container } from "../Container";

const NavBar = async () => {
    const countries = await fetchCountries();

    return (
        <header className="text-white absolute top-0 w-full">
            <Container>
                <nav className="flex gap-4 pt-4">
                    <div>
                        <CountiesWrapper countries={countries} />
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default NavBar;
