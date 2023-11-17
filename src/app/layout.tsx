import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Ui/Footer/Footer";
import Head from "next/head";

const inter = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: {
        icon: "./ball.svg"
    },
    title: "Football Nook",
    description:
        "A place, where you can find standings for numerous leagues from different countries, along with top goal-scorers.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${inter.className} bg-[#111b2d] bg-gradient-conic overflow-x-hidden scroll-smooth flex flex-col justify-between`}

            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
