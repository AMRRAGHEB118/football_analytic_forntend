import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCalendarDay } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";


type Props = {
    title: string,
    img: string,
    url: string,
    date: string,
    time: string
}

const NewsCard = ({ img, title, url, date, time }: Props) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(url);
    }

    return (
        <div className="flex flex-col w-full text-white text-xl rounded-sm ">
            <div className="flex w-full sm:h-[200px] h-[160px]" onClick={() => handleClick()}>
                <Image src={img} alt="News picture"
                    width={1920} height={1080}
                    className="w-full h-full object-cover rounded-t-sm cursor-pointer" />
            </div>
            <div className="flex flex-col w-full sm:h-[150px] h-[145px] sm:p-5 p-3 rounded-b-sm
                bg-gradient-to-r from-primary-900/50 to-secondary-900 antialiased
                text-secondary-100
                "
            >
                <p className="sm:text-[18px] line-clamp-2 text-[14px] font-[700] cursor-pointer"
                    onClick={() => handleClick()}>
                    {title}
                </p>
                <div className="flex flex-col relative top-5 sm:text-[8px] text-[5px] opacity-70 font-thin">
                    <div className="flex items-center gap-1">
                        <FaCalendarDay style={{ width: '11px', height: '11px' }} />
                        <p>
                            {date}
                        </p>
                    </div>
                    <div className="flex items-center gap-1 font-thin">
                        <IoTime style={{ width: '13px', height: '13px' }} />
                        <p>
                            {time}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;
