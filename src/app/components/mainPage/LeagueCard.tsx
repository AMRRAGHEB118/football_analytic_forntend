import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBookmark } from "react-icons/fa";

type Props = {
    _id: string,
    name: string,
    image: string,
    short_code: string,
}

const LeagueCard = ({ _id, name, image, short_code }: Props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`leagues/${_id}/statistics`);
    }

    return (
        <div className="flex flex-col h-[322px] w-[277px] text-white text-xl rounded-lg">
            <div className="flex w-full h-[69px] items-center justify-center bg-primary-900/80 rounded-t-lg gap-3">
                <p>
                    Top league
                </p>
                <FaBookmark className="text-lg" />                
            </div>
            <div className="flex flex-col items-center justify-center h-full bg-secondary-900 rounded-b-lg cursor-pointer"
                onClick={() => handleClick()}>
                {/* <div className="flex items-center w-full p-7">
                    <Image src={teamImage}
                        alt={teamName}
                        width={94}
                        height={94}
                        className="w-[40px] h-[40px]"
                    />
                    <span className="font-thin text-[14px] ml-2 text-white/95 tracking-wide">{teamName}</span>
                </div> */}
                <span className="flex flex-col relative bottom-2 items-center min-w-[100px] max-h-[100px] text-center text-secondary-200 sm:text-[17px] font-thin">
                    {short_code}
                </span>
                <Image src={image}
                    alt={name}
                    width={94}
                    height={94}
                    className="w-[100px] h-[100px]"
                />
                <div className="flex flex-col items-center ">
                    <span className="flex flex-col items-center mt-4 min-w-[100px] max-h-[100px] text-center text-secondary-100 sm:text-[23px] font-black">
                        <p>
                            {name}
                        </p>
                        <p>
                            league
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LeagueCard;
