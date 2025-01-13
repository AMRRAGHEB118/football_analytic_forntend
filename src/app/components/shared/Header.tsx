'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegNewspaper } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import Cookies from 'js-cookie';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [role, setRole] = useState<string>('')

    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('access_token') || '';
        try {
            const payload: any = jwtDecode(token);
            setRole(payload?.role);
        } catch { }
    }, [role])

    return (
        <header className="absolute top-0 z-30 w-full h-[70px] bg-secondary-950 flex items-center pr-10">
            <ul className={isMenuOpen ? "absolute w-full flex flex-col top-[85px] menu gap-6 p-4 text-sm md:hidden bg-secondary-950 z-30 indent-10" : "hidden"}>
                <li className="flex items-center text-secondary-100 hover:text-primary-500/75">
                    <GoHomeFill />
                    <a className=" transition " href="/">
                        Home
                    </a>
                </li>
                <li className="flex items-center text-secondary-100 hover:text-primary-500/75">
                    <IoMdFootball />
                    <a className=" transition " href="/leagues">
                        Browse leagues
                    </a>
                </li>
                <li className="flex items-center text-secondary-100 hover:text-primary-500/75">
                    <FaRegNewspaper />
                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/news">Latest feeds </a>
                </li>
            </ul>
            <div className="flex items-center justify-center mx-auto md:max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-full items-center justify-center">
                    <div className="relative md:absolute md:left-20 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <Image src={"https://s3-alpha-sig.figma.com/img/d252/a39e/195ae939555d19a1865287df963f324e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdmI8T0mxVhRm5j5MUrVGD7EAL8K1cz1b8iHkEh3HlH0FvB7hR9K9GqjZNXCfP6-6Nb8UtpVGPALDUog2Fdnto5UUQfDLkb8jBUjd3kjkeXybHUp6WiCifQeeClrb6Nw0yAV~45wtaiOCqjg~i2DyLuggrChI3zL4HhvzcEV-Mj5kEyiXo78VIcnwFD9ud1cr0TTjijyQnaMSgQ8ViFYu4nKjjzhwcSUg190Tp3ZVOTCgqK1DCngid3Cf4F7tcYAIHaUs2pofDyGJsm5y2QU3T1VwpXX9dkJWFBkfFH1lwRfVW2yzOkF5wdJ6wwjK9I1AfkZqtK10KhVsxSAGbweVA__"}
                                alt="logo" width={65} height={65} className="" />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex relative left-14 items-center gap-[50px] text-lg">
                                {/* <li>
                                    <a className="text-secondary-100 transition hover:text-primary-500/75" href="/teams"> Teams </a>
                                </li> */}
                                <li className="flex items-center text-secondary-100 hover:text-primary-500/75 gap-2">
                                    <GoHomeFill />
                                    <a className=" transition " href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="flex items-center text-secondary-100 hover:text-primary-500/75 gap-2">
                                    <IoMdFootball />
                                    <a className=" transition " href="/leagues">
                                        Browse leagues
                                    </a>
                                </li>
                                <li className="flex items-center text-secondary-100 hover:text-primary-500/75 gap-2">
                                    <FaRegNewspaper />
                                    <a className="transition" href="/news">Latest feeds </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button onClick={handleMenuToggle} className="absolute left-10 rounded text-lg text-secondary-200 transition hover:text-secondary-600/75">
                            <GiHamburgerMenu style={{ width: '24px', height: '24px' }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="
            flex items-center sm:w-[340px] w-[280px] right-10 top-[70px] absolute left-1/2 -translate-x-1/2 mt-4
            lg:relative lg:top-0 lg:-translate-x-0 lg:-left-6 lg:mt-0
            ">
                <input
                    type="text"
                    placeholder="Search something..."
                    className="relative indent-12 text-sm sm:h-[40px] w-full
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
                <a className="w-[26px] h-[26px] mx-1 text-secondary-100 hover:text-secondary-300 cursor-pointer transition"

                    href="/login">
                    {
                        role === 'admin' ? (
                            <p onClick={() => {
                                document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
                                router.push('/');
                            }}>Logout</p>
                        ) :
                            <>
                                <IoMdInformationCircleOutline className="w-full h-full" title="Authorize..." />
                            </>
                    }
                </a>
            </div>
        </header >
    )
}


export default Header;