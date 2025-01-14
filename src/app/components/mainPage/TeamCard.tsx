import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowTrendUp } from "react-icons/fa6";


type Props = {
    id: string,
    short_code: string,
    name: string,
    image: string,
    wins: number
}

const TeamCard = ({ id, name, image, short_code, wins }: Props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`leagues/league/teams/${id}/statistics`);
    }

    return (
        <div className="flex flex-col h-[322px] w-[277px] text-white text-xl rounded-lg">
            <div className="flex w-full h-[69px] items-center justify-center bg-primary-900/80 rounded-t-lg gap-3">
                <p>
                    Most won
                </p>
                <FaArrowTrendUp />
            </div>

            <div className="flex flex-col items-center justify-center h-full bg-secondary-900 rounded-b-lg text-secondary-200 cursor-pointer"
                onClick={() => handleClick()}>
                <span className="min-w-[100px] max-h-[100px] mb-2 text-center text-lg font-thin text-secondary-200">
                    {short_code}
                </span>
                <Image src={image}
                    alt={name}
                    width={94}
                    height={94}
                    className="bg-white rounded-full w-[100px] h-[100px]"
                />
                <div className="flex flex-col items-center">
                    <span className="min-w-[100px] max-h-[100px] mt-4 text-center text-[26px] text-secondary-100 font-black">
                        {name}
                    </span>
                    <span className="min-w-[100px] max-h-[100px] mt-5 text-center text-[14px] text-secondary-100 font-bold">
                        Matches won: {wins}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
