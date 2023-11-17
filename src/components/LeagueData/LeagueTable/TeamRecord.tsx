import React from "react";

type TeamRecordProps = {
    record: string[];
};

const TeamRecord: React.FC<TeamRecordProps> = ({ record }) => {
    return (
        <div className="flex gap-1 justify-center h-full">
            {record.map((game, i) => {
                const bgColors: Record<string, string> = {
                    W: "bg-[#32a85a]",
                    L: "bg-[#d12a46]",
                    D: "bg-[#b88c09]",
                };

                const gameClassName = `w-5 h-5 text-xs md:text-sm text-black flex items-center rounded justify-center ${bgColors[game]}`;

                return (
                    <div className={gameClassName} key={game + i}>
                        {game}
                    </div>
                );
            })}
        </div>
    );
};

export default TeamRecord;
