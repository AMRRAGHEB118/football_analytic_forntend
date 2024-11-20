'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

interface TeamCardProps {
    team: {
        id: number;
        name: string;
        imgPath: string;
    };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    const router = useRouter();
    const pathName = usePathname()

    const handleClick = () => {
        router.push(pathName + `/${team.id}/players`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer text-secondary-100 grayscale duration-250
            transition-all items-center flex flex-col text-slate-300 w-[75px]
            sm:w-[100px]
            hover:grayscale-0 hover:text-primary-500"
        >
            <Image src={team.imgPath} alt={`${team.name} logo`}
            width={116} height={116}
            />
            <span className="text-sm sm:text-base font-medium text-center">{team.name}</span>
        </div>
    );
};

export default TeamCard;
