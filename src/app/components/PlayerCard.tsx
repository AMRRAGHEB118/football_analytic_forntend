'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface PlayerCardProps {
    player: {
        id: number;
        name: string;
        photo: string;
    };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/player/${player.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer bg-primary-500 text-secondary-100 shadow-md rounded-lg p-4 flex items-center space-x-4 transition-transform transform hover:scale-105 hover:bg-primary-600"
        >
            <Image
                src={player.photo}
                alt={`${player.name} photo`}
                className="w-12 h-12 rounded-full object-cover"
                width={48}
                height={48}
            />
            <span className="text-lg font-semibold text-secondary-100">{player.name}</span>
        </div>
    );
};

export default PlayerCard;
