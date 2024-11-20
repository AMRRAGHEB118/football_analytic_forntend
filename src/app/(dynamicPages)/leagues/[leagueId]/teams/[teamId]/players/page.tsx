"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/app/components/Spinner";
import { useParams, usePathname, useRouter } from 'next/navigation'
import Image from "next/image";

type Player = {
    _id: string,
    commonName: string,
    position: string,
    imagePath: string
};

type Team = {
    _id: string,
    id: number,
    name: string,
    imgPath: string
}

const initialTeam = {
    _id: '',
    id: 0,
    name: '',
    imgPath: ''
}

const PlayersPage = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState<Team>(initialTeam);
    const { teamId } = useParams();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}players/team/${teamId}`)
            .then(res => {
                setPlayers(res.data.data.players);
                setTeam(res.data.data.team);
                setLoading(false);
            })
            .catch(); // To be handled later
    }, [teamId]);

    return (
        <div className="container mt-24 w-full mx-auto">
            {loading && <LoadingSpinner />}
            <div className='flex items-center p-5 mt-5 lg:mt-0'>
                <Image
                    src={team?.imgPath}
                    alt='Team logo'
                    width={128}
                    height={128}
                    className='w-[92px] sm:w-[128px]'
                />
                <div className="text-white relative left-10 top-3 font-black text-xl sm:text-4xl">{team.name}</div>
            </div>
            <div className='mb-10 w-full h-[1px] border-t-solid border-t-[1px] border-secondary-300 mx-auto'></div>
            <h1 className="text-lg md:text-2xl font-medium mb-6 text-secondary-200 ml-6 md:ml-0">Players</h1>
            <div className="
                mx-auto grid
                grid-cols-4
                md:grid-cols-5
                lg:grid-cols-8
                2xl:grid-cols-11
                gap-5 p-8
                place-items-center
            ">
                {players.map(p => {
                    return (
                        <div
                            key={p._id}
                            className="grayscale hover:grayscale-0 text-slate-300
                            text-center flex flex-col w-[70px] sm:w-[100px] items-center duration-250
                            transition-all cursor-pointer hover:text-primary-500"
                            onClick={() => {
                                router.push(pathName + '/' + p._id)
                            }}
                        >
                            <Image
                                src={p.imagePath}
                                className="bg-slate-100 rounded-full ring-4 ring-primary-500"
                                height={116}
                                width={116}
                                alt='Player image' />
                            <span className="text-center text-sm w-[116px] h-[40px] antialiased font-thin p-1 sm:text-base">{p.commonName}</span>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default PlayersPage;
