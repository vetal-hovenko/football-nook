import React from "react";
import Image from "next/image";

import Loader from "../Ui/Loader/Loader";

type CountryButtonProps = {
    name: string;
    flag: string | null;
    toggleLeagues: () => Promise<void>;
    loading: boolean;
    showLeagues: boolean;
};

const CountryButton: React.FC<CountryButtonProps> = ({
    name,
    flag,
    toggleLeagues,
    loading,
    showLeagues,
}) => {
    return (
        <button
            className=" hover:bg-[#e1e2d339] bg-[#b1b1b175] cursor-pointer flex items-center justify-between w-full"
            onClick={() => toggleLeagues()}
        >
            <div className="flex items-center gap-2 p-2 w-max">
                <div className="h-6 w-6">
                    {loading ? (
                        <Loader size={24} />
                    ) : (
                        <Image
                            src={flag ? flag : ""}
                            alt={`${name} flag`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    )}
                </div>
                <p className="font-bold text-base md:text-xl text-gray-300 px-4 rounded-full">
                    {name}
                </p>
            </div>

            <style jsx>{`
                button:hover p {
                    opacity: 1;
                }
            `}</style>

            <p className="text-gray-800 text-sm pr-3 opacity-0 transition-opacity">
                {`${showLeagues ? "Hide leagues" : "Show leagues"}`}
            </p>
        </button>
    );
};

export default CountryButton;
