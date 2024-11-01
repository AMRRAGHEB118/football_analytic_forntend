'use client'
import Image from "next/image";

const Footer = () => {
    return (
        <div className="
            flex justify-center items-center absolute h-[195px] w-full sm:w-[90%] p-10 border-t-2
            border-slate-300 border-solid left-1/2 -translate-x-1/2 mt-32"
        >
            <div className="flex-col items-center">
                <a className="flex justify-center text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <Image src="/LOGO.svg" alt="logo" width={73} height={44}></Image>
                </a>
                <div className="text-slate-500 relative top-5">© 2023 mydesignpublic. All rights reserved.</div>
            </div>
            
        </div>
    );
}

export default Footer;