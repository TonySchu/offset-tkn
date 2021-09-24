import Head from "next/head";
import React from "react";
import { SearchEngineOptimization } from "../types/SEO";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export const SEO: SearchEngineOptimization = {
  title: "Shape",
  keywords: "noindex, nofollow",
  description: "All Rights Reserved ©️ Teclead GmbH",
  icon: "../assets/img/favicons/favicon.ico",
};
function DefaultTemplate(props: any) {
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
