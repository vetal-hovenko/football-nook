import React from "react";

import { Social } from "./Footer";

type SocialLinkProps = {
    social: Social;
}

const SocialLink: React.FC<SocialLinkProps> = ({social}) => {
    return (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gold-title transition-colors duration-300"
        >
            {social.icon}
        </a>
    );;
};

export default SocialLink;
