'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface TeamCardProps {
    team: {
        id: number;
        name: string;
        logo: string;
    };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/team/${team.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer bg-primary-500 text-secondary-100 shadow-md rounded-lg p-4 flex items-center space-x-4 transition-transform transform hover:scale-105 hover:bg-primary-600"
        >
            <Image src={team.logo} alt={`${team.name} logo`} className="w-12 h-12 rounded-full object-cover" width={48} height={48} />
            <span className="text-lg font-semibold text-secondary-100">{team.name}</span>
        </div>
    );
};

export default TeamCard;
