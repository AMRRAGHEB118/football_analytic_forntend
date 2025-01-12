'use client'
import { useState } from "react";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-secondary-950 relative h-[70px] flex items-center pr-10">
            <ul className={isMenuOpen ? "absolute w-full flex flex-col top-[85px] menu gap-6 p-4 text-sm md:hidden bg-secondary-950 z-30 indent-10" : "hidden"}>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/teams"> Teams </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/leagues"> Leagues </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/news"> News </a>
                </li>
            </ul>
            <div className="flex items-center justify-center mx-auto md:max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-full items-center justify-center">
                    <div className="relative md:absolute md:left-20 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <Image src="/LOGO.svg" alt="logo" width={73} height={44}></Image>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex relative left-14 items-center gap-[50px] text-md">
                                <li>
                                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/teams"> Teams </a>
                                </li>
                                <li>
                                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/leagues"> Leagues </a>
                                </li>
                                <li>
                                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/news"> News </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button onClick={handleMenuToggle} className="absolute left-10 rounded bg-secondary-100 p-2 text-secondary-600 transition hover:text-secondary-600/75">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="
            flex items-center w-[340px] right-10 top-24 absolute left-1/2 -translate-x-1/2 mt-4
            lg:relative lg:top-0 lg:-translate-x-0 lg:-left-6 lg:mt-0
            ">
                <input
                    type="text"
                    placeholder="Search something..."
                    className="relative indent-12 text-sm h-[40px] w-[340px]
                    rounded-md bg-[#454545] text-white placeholder:text-neutral-400
                    outline-0 border-none focus:ring-0 focus:bg-[#323232]"/>
                <svg xmlns="http://www.w3.org/2000/svg" height="21px"
                    viewBox="0 -960 960 960" width="21px" fill="#e8eaed"
                    className="absolute left-[19px]"
                >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </div>
            <div className="flex items-center justify-center mr-3">
                <div className="rounded-full w-[32px] h-[32px] bg-white mx-1">
                    {/* <Image
                        src=""
                    /> */}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 -960 960 960" fill="#e8eaed">
                    <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
                </svg>
            </div>
        </header>
    )
}


export default Header;