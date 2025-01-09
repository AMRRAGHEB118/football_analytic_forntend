import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
    title: string,
    img: string,
    url: string,
}

const NewsCard = ({ img, title, url }: Props) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(url);        
    } 

    return (
        <a className="flex flex-col sm:h-[270px] sm:w-[400px] h-[240px] w-[380px] text-white text-xl rounded-lg "
            onClick={() => handleClick()}>
            <div className="flex w-full sm:h-[200px] h-[160px]">
                <Image src={img} alt="News picture"
                    objectFit="fit"
                    width={1920} height={1080}
                    className="w-full h-full object-cover rounded-t-lg cursor-pointer" />
            </div>
            <div className="flex flex-col w-full sm:h-[85px] h-[80px] p-5 rounded-b-lg
                bg-gradient-to-r from-primary-700 to-secondary-900
                font-bold"
                >
                <p className="sm:h-[85px] h-[80px] sm:text-[18px] line-clamp-2 hover:line-clamp-3 tracking-wide text-base font-semibold text-white/90 cursor-pointer">{title}</p>
            </div>
        </a>
    );
}

export default NewsCard;
