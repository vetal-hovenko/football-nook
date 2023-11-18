import React from "react";

import CountiesWrapper from "./CountiesWrapper";
import { Container } from "../Container";

import { fetchCountries } from "@/api/fetchCountries";

const NavBar = async () => {
    const countries = await fetchCountries();

    return (
        <header className="text-white absolute top-0 w-full z-50">
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
