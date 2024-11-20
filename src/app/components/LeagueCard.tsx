'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface LeagueCardProps {
    league: {
        id: number;
        name: string;
        imagePath: string;
    };
}

const LeagueCard: React.FC<LeagueCardProps> = ({ league }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/leagues/${league.id}/teams`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer flex flex-col items-center transition-all
            grayscale duration-200 hover:grayscale-0"
        >
            <Image
                src={league.imagePath}
                alt={`${league.name} logo`}
                className="rounded-full"
                width={116}
                height={116}
            />
            <span className="text-sm sm:text-base font-thin text-primary-500">{league.name}</span>
        </div>
    );
};

export default LeagueCard;
