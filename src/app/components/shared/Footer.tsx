'use client'
import Image from "next/image";

const Footer = () => {
    return (
        <div className="
            flex justify-center items-center h-[195px] w-full sm:w-[90%] p-10 border-t-2
            border-slate-300 border-solid mt-16 m-auto"
        >
            <div className="flex-col items-center">
                <a className="flex justify-center text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <Image src="https://s3-alpha-sig.figma.com/img/d252/a39e/195ae939555d19a1865287df963f324e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdmI8T0mxVhRm5j5MUrVGD7EAL8K1cz1b8iHkEh3HlH0FvB7hR9K9GqjZNXCfP6-6Nb8UtpVGPALDUog2Fdnto5UUQfDLkb8jBUjd3kjkeXybHUp6WiCifQeeClrb6Nw0yAV~45wtaiOCqjg~i2DyLuggrChI3zL4HhvzcEV-Mj5kEyiXo78VIcnwFD9ud1cr0TTjijyQnaMSgQ8ViFYu4nKjjzhwcSUg190Tp3ZVOTCgqK1DCngid3Cf4F7tcYAIHaUs2pofDyGJsm5y2QU3T1VwpXX9dkJWFBkfFH1lwRfVW2yzOkF5wdJ6wwjK9I1AfkZqtK10KhVsxSAGbweVA__"
                        alt="logo" width={73} height={73}></Image>
                </a>
                <div className="text-slate-500 relative top-5">© 2023 mydesignpublic. All rights reserved.</div>
            </div>

        </div>
    );
}

export default Footer;