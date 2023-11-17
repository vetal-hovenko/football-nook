import React from "react";

import CountryItem from "./CountryItem";

import { Countries } from "@/types/Countries";
import { CountryFetch } from "@/types/CountryFetch";

type CountriesProps = {
    countries: CountryFetch;
}

const CountriesList: React.FC<CountriesProps> = ({countries}) => {
    const enumCountries = Object.values(Countries);

    return (
        <ul>
            {countries.response
                .filter((country) =>
                    enumCountries.includes(country.name as Countries)
                )
                .map((country) => (
                    <CountryItem
                        flag={country.flag}
                        key={country.name}
                        name={country.name}
                    />
                ))}
        </ul>
    );
};

export default CountriesList;
