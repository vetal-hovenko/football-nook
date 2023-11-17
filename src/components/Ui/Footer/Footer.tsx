import React from "react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

import SocialLink from "./SocialLink";

export const SOCIALS = [
    {
        href: "https://t.me/vitalik_hovenko",
        icon: <FaTelegram />,
    },
    {
        href: "https://www.linkedin.com/in/vitalii-hovenko/",
        icon: <FaLinkedin />,
    },
    {
        href: "https://github.com/vetal-hovenko",
        icon: <FaGithub />,
    },
];

export type Social = (typeof SOCIALS)[0];

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-24">
            <div className="flex justify-center space-x-6">
                {SOCIALS.map((social) => (
                    <SocialLink
                        key={social.href}
                        social={social}
                    />
                ))}
            </div>
        </footer>
    );
};

export default Footer;
