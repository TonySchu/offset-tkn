import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import React from "react";
import { SearchEngineOptimization } from "../types/SEO";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
library.add(fas, fab);

export const SEO: SearchEngineOptimization = {
    title: "Shape",
    keywords: "noindex, nofollow",
    description: "All Rights Reserved ©️ Teclead GmbH",
    icon: "../assets/img/favicons/favicon.ico",
};

type Props = {
    SEO: SearchEngineOptimization;
};
function DefaultTemplate(props: React.PropsWithChildren<Props>) {
    return (
        <main className="main" id="top">
            <Head>
                <title>{props.SEO.title}</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content={props.SEO.description} />
                <meta name="keywords" content={props.SEO.keywords} />
                <link rel="icon" href={props.SEO.icon} />
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </main>
    );
}

export default DefaultTemplate;
