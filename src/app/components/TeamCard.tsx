'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ImStatsDots } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";


interface TeamCardProps {
    team: {
        id: number;
        name: string;
        imgPath: string;
    };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const router = useRouter();
    const pathName = usePathname()

    const listBtns = [
        {
            name: 'Statistics',
            link: pathName + `/${team.id}/statistics`,
            icon: ImStatsDots
        },
        {
            name: 'Players',
            link: pathName + `/${team.id}/players`,
            icon: FaUserFriends

        }
    ];

    const handleClick = (page: string) => {
        listBtns.map(b => {
            if (b.name === page) router.push(b.link);
        });
    };

    return (
        <div className='relative' onMouseLeave={() => setActiveMenu(false)}>
            <div
                onClick={() => setActiveMenu(prev => !prev)}
                className="cursor-pointer text-secondary-100 grayscale duration-250
                transition-all items-center flex flex-col text-secondary-300 w-[75px]
                sm:w-[100px]
                hover:grayscale-0 hover:text-primary-500"
            >
                <Image src={team.imgPath} alt={`${team.name} logo`}
                    width={116} height={116}
                />
                <span className="text-sm sm:text-base font-normal text-center">{team.name}</span>
            </div>
            <div
                className={`
                    absolute flex-col top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/12 z-10
                    bg-secondary-800 rounded-lg
                `}
                style={{ display: activeMenu ? 'flex' : 'none' }}
            >
                {
                    listBtns.map((b: any) => {
                        const Icon = b.icon;
                        return (
                            <span key={b.name}
                                className='w-full h-1/2 flex items-center p-3
                                sm:text-[14px] text-[11px] text-secondary-100 font-normal hover:text-primary-500
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

export default TeamCard;
