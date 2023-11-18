"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Club, Venue } from "@/types/ClubResponse";
import Loader from "../Ui/Loader/Loader";

type ClubInfoProps = {
    club: Club;
    stadium: Venue;
};

const ClubInfo: React.FC<ClubInfoProps> = ({ club, stadium }) => {
    const [showStadiumImage, setShowStadiumImage] = useState(false);

    useEffect(() => {
        const delayToShowStadiumImage = setTimeout(() => {
            setShowStadiumImage(true);
        }, 500);

        return () => clearTimeout(delayToShowStadiumImage);
    }, []);

    const stadiumImage = (
        <Image
            layout="fill"
            alt={`${club.name} stadium`}
            src={stadium.image}
            quality={100}
            priority={true}
            className="rounded-md"
        />
    );

    return (
        <>
            <div className="h-64 w-full md:h-96 md:w-[500px] flex items-center justify-center">
                {showStadiumImage ? stadiumImage : <Loader size={50} />}
            </div>
            <div className="flex flex-col gap-1 w-full md:w-1/4">
                <p className="text-lg font-semibold">{stadium.name}</p>
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
                <p className="text-base">Capacity: {stadium.capacity}</p>
            </div>
        </>
    );
};

export default ClubInfo;
