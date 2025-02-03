import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import * as styles from "./cardsStyle/style";

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
        <div className={styles.bodyStyle}>
            <div className={styles.headerStyle}>
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
                    className={`bg-white ${styles.imgStyle}`}
                />
                <div className="flex flex-col items-center ">
                    <span className={styles.firstNameStyle}>
                        {first_name}
                    </span>
                    <span className={styles.lastNameStyle}>
                        {last_name}
                    </span>
                    <span className={styles.statStyle}>
                        Contributions: {cont}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
