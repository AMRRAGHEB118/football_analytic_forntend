"use client";

import Footer from "@/app/components/Footer";
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

const PlayersPage = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const { teamId } = useParams();

    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}players/team/${teamId}`)
            .then(res => {
                setPlayers(res.data.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="flex-col mt-24 w-full mx-auto sm:p-4">
            {loading && <LoadingSpinner />}
            <div className="
        mx-auto
        2xl:w-[1600px]
        flex
        flex-wrap
        justify-start
        self-center
        gap-4
        p-9
        ">
                {players.map(p => {
                    return (
                        <div
                            key={p._id}
                            className="grayscale hover:grayscale-0 text-slate-300 hover:text-primary-500 flex flex-col items-center duration-250 transition-all"
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
                            <span className="text-center text-base w-[116px] antialiased font-thin p-1">{p.commonName}</span>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>

    )
}

export default PlayersPage;
