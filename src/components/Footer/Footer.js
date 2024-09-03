"use client";
import React from "react";
import { GithubIcon, LinkedinIcon, ItchIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
    return (
        <footer className=" bg-accentLight p-2 sm:p-10 flex flex-col items-center text-dark">
            <div className=" w-full relative font-medium py-2 px-8 flex flex-col md:flex-row items-center justify-between">
                <span className="text-center min-w-[30vw]">
                    &copy;Copyright 2024 Raphaele Guillemot - All Rights Reserved
                </span>
                <span className="flex flex-col items-center justify-center my-4 md:my-0 min-w-[30vw]">
                    <div className="flex flex-row items-center justify-center my-4">
                        <a
                            href={siteMetadata.linkedin}
                            className="inline-block w-6 h-6 mr-4"
                            aria-label="Reach out to me via LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
                        </a>
                        <a
                            href={siteMetadata.github}
                            className="inline-block w-6 h-6 mr-4"
                            aria-label="Check my profile on Github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
                        </a>
                        <a
                            href={siteMetadata.itch}
                            className="inline-block w-6 h-6 mr-4"
                            aria-label="Check my profile on Github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ItchIcon className="hover:scale-125 transition-all ease duration-200" />
                        </a>
                    </div>
                    <p>raphaeleguillemotmichelle@gmail.com</p>
                </span>
                <Link
                    href="/sitemap.xml"
                    className="text-center underline my-4 md:my-0 min-w-[30vw]"
                >
                    sitemap.xml
                </Link>
            </div>
        </footer>
    );
};

export default Footer;