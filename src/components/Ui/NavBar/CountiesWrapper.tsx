"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TbHome } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";

import CountriesList from "@/components/Countries/CountriesList";

import { CountryFetch } from "@/types/CountryFetch";

type CountriesWrapperProps = {
    countries: CountryFetch;
};

const CountiesWrapper: React.FC<CountriesWrapperProps> = ({ countries }) => {
    const [showCountries, setShowCountries] = useState(false);

    const listStyles = showCountries
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-x-[-120%]";
        
    const borderStyles = showCountries
        ? "rounded-tl-md rounded-tr-md"
        : "rounded-md";

    const buttonStyles = "transition-all hover:scale-110 duration-200";

    return (
        <>
            <div className={`flex gap-4 bg-gray-600 p-[2px] ${borderStyles}`}>
                <button
                    className={`${buttonStyles}`}
                    onClick={() => setShowCountries(!showCountries)}
                >
                    <IoIosMenu size="40" />
                </button>

                <Link
                    className={`${
                        showCountries
                            ? "opacity-100 visible"
                            : "opacity-0 hidden"
                    } ${buttonStyles}`}
                    href="/"
                >
                    <TbHome size="35" />
                </Link>
            </div>

            <div
                className={`absolute transition-all ${listStyles} bg-gray-600 rounded-md rounded-tl-none p-2  z-10`}
            >
                <CountriesList countries={countries} />
            </div>
        </>
    );
};

export default CountiesWrapper;
