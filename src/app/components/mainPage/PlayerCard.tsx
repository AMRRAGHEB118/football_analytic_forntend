import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

type Props = {
    id: string,
    first_name: string,
    last_name: string,
    image: string,
    cont: number
}

const PlayerCard = ({ id, first_name, last_name, image, cont }: Props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`leagues/league/teams/team/players/${id}`)
    }

    return (
        <div className="flex flex-col h-[322px] w-[277px] text-white text-xl rounded-lg">
            <div className="flex w-full h-[69px] items-center justify-center bg-primary-900 rounded-t-lg gap-3">
                <p>
                    Top player
                </p>
                <FaStar />
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
                <Image src={image}
                    alt={first_name + last_name}
                    width={94}
                    height={94}
                    className="bg-white rounded-full w-[90px] h-[90px]"
                />
                <div className="flex flex-col items-center ">
                    <span className="min-w-[100px] max-h-[100px] text-secondary-200 mt-2 text-center text-xl font-thin">
                        {first_name}
                    </span>
                    <span className="min-w-[100px] max-h-[100px] text-center text-secondary-100 text-[26px] font-black">
                        {last_name}
                    </span>
                    <span className="w-full mt-7 flex justify-center text-base font-bold text-secondary-100">
                        Contributions: {cont}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
