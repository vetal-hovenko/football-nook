import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="max-w-7xl mx-auto px-2 md:px-4 relative">{children}</div>;
};
