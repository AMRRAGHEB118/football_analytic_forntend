import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowTrendUp } from "react-icons/fa6";
import * as styles from "./cardsStyle/style";


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
        <div className={styles.bodyStyle}>
            <div className={styles.headerStyle}>
                <p>
                    Most won
                </p>
                <FaArrowTrendUp />
            </div>

            <div className="flex flex-col items-center justify-center h-full bg-secondary-900 rounded-b-lg text-secondary-200 cursor-pointer"
                onClick={() => handleClick()}>
                <span className={styles.firstNameStyle}>
                    {short_code}
                </span>
                <Image src={image}
                    alt={name}
                    width={94}
                    height={94}
                    className={styles.imgStyle}
                />
                <div className="flex flex-col items-center">
                    <span className={styles.lastNameStyle}>
                        {name}
                    </span>
                    <span className={styles.statStyle}>
                        Matches won: {wins}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
