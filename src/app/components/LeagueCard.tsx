'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoIosFootball } from "react-icons/io";


interface LeagueCardProps {
    league: {
        id: number;
        name: string;
        imagePath: string;
    };
}


const LeagueCard: React.FC<LeagueCardProps> = ({ league }) => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const router = useRouter();

    const listBtns = [
        {
            name: 'Statistics',
            link: `/leagues/${league.id}/statistics`,
            icon: ImStatsDots
        },
        {
            name: 'Teams',
            link: `/leagues/${league.id}/teams`,
            icon: IoIosFootball
        }
    ];

    const handleClick = (page: string) => {
        listBtns.map(b => {
            if (b.name === page) router.push(b.link);
        });
    };


    return (
        <div className='relative'>
            <div
                onClick={() => setActiveMenu(prev => !prev)}
                className="cursor-pointer relative flex flex-col items-center sm:w-[300px]
                transition-all grayscale duration-200 hover:grayscale-0"
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
            <div
                className={`
                absolute flex-col top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/12 z-10
                sm:h-24 sm:w-[120px] w-[90px] h-16 bg-secondary-800 rounded-lg
                `}
                style={{ display: activeMenu ? 'flex' : 'none' }}
            >
                {
                    listBtns.map((b: any) => {
                        const Icon = b.icon
                        return (
                            <span key={b.name}
                                className='w-full h-1/2 flex items-center p-3
                                sm:text-base text-[11px] text-secondary-100 font-thin hover:text-primary-500
                                cursor-pointer hover:bg-secondary-700 duration-200 rounded-lg gap-3'
                                onClick={() => handleClick(b.name)}
                            >
                                <p>
                                    {b.name}
                                </p>
                                <Icon />
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeagueCard;
