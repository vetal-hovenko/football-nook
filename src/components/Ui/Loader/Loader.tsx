import React from "react";
import "./loader.css";

const Loader = ({ size }: { size: number }) => {
    const stylesForLoader = {
        height: size,
        width: size,
    }
    return (
        <div className="flex items-center">
            <div className="loader bg-white h-6 w-6" style={stylesForLoader} ></div>
        </div>
    );
};

export default Loader;
