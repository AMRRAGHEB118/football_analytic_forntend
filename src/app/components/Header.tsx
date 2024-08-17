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
        <header className="bg-secondary-950 relative">
            <ul className={isMenuOpen ? "absolute w-full flex flex-col top-16 menu gap-6  p-4 text-sm sm:hidden bg-secondary-950" : "hidden"}>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/team"> Teams </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/player"> Players </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/league"> Leagues </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/news"> News </a>
                </li>
            </ul>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <Image src="/LOGO.svg" alt="logo" width={73} height={44}></Image>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                            <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/team"> Teams </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/player"> Players </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/league"> Leagues </a>
                </li>
                <li>
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/news"> News </a>
                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={handleMenuToggle} className="rounded bg-secondary-100 p-2 text-secondary-600 transition hover:text-secondary-600/75">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;