import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBookmark } from "react-icons/fa";
import * as styles from './cardsStyle/style'

type Props = {
    id: number,
    name: string,
    image: string,
    short_code: string,
}

const LeagueCard = ({ id, name, image, short_code }: Props) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`leagues/${id}/statistics`);
    }

    return (
        <div className={styles.bodyStyle}>
            <div className={styles.headerStyle}>
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
                <span className={styles.firstNameStyle}>
                    {short_code}
                </span>
                <Image src={image}
                    alt={name}
                    width={94}
                    height={94}
                    className={styles.imgStyle}
                />
                <div className="flex flex-col items-center ">
                    <span className={styles.lastNameStyle}>
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
