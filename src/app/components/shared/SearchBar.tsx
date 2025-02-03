'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { LoadingSpinner } from '../Spinner';
import { useRouter } from 'next/navigation';


type SearchResult = {
    data: {
        teams: Array<any>,
        players: Array<any>
    }, loading: boolean
}

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [searchRes, setSearchRes] = useState<SearchResult>(
        { data: { teams: [], players: [] }, loading: false }
    );
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const sResRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchRes({ ...searchRes, loading: true });

        const value = event.target.value;
        setQuery(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            fetchSearchResults(value);
        }, 2000);
    };


    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!sResRef.current?.contains(event.target)) {
                setQuery('');
                setSearchRes({ loading: false, data: { players: [], teams: [] } });
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [sResRef]);

    const fetchSearchResults = async (query: string) => {
        if (query.length > 0) {
            try {
                const response = (await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}search/${query}`)).data;
                setSearchRes({ data: { teams: response.data.teams, players: response.data.players }, loading: false });
            } catch {
                setSearchRes({ ...searchRes, loading: false });
            }
        }
    };

    const navigateToPlayer = (id: string) => {
        setQuery('');
        setSearchRes({ loading: false, data: { players: [], teams: [] } });
        return router.push(`/leagues/league/teams/team/players/${id}`);
    };

    const navigateToTeamPlayers = (id: string) => {
        setQuery('');
        setSearchRes({ loading: false, data: { players: [], teams: [] } });
        return router.push(`/leagues/league/teams/${id}/players`);
    };

    const navigateToTeamStats = (id: string) => {
        setQuery('');
        setSearchRes({ loading: false, data: { players: [], teams: [] } });
        return router.push(`/leagues/league/teams/${id}/statistics`);
    };

    return (
        <div ref={sResRef} className="
            flex flex-col items-center sm:w-[340px] w-[280px] right-10 top-[70px] absolute left-1/2 -translate-x-1/2 mt-4
            xl:relative xl:top-0 xl:-translate-x-0 xl:-left-6 xl:mt-0
            ">
            <div className='flex items-center w-full'>
                <input
                    type="text"
                    placeholder="Search something..."
                    value={query}
                    onChange={handleInputChange}
                    className="relative indent-12 text-sm sm:h-[40px] w-full
                rounded-md bg-[#454545] text-white placeholder:text-neutral-400
                outline-0 border-none focus:ring-0 focus:bg-[#323232]"/>
                <svg xmlns="http://www.w3.org/2000/svg" height="21px"
                    viewBox="0 -960 960 960" width="21px" fill="#e8eaed"
                    className="absolute left-[19px]"
                >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </div>
            <div
                className='w-full shadow-lg bg-secondary-900 text-secondary-200 border-sm
                    xl:absolute xl:top-[40px] rounded-md'>
                {searchRes.loading === false &&
                    (
                        <div className='w-full'>
                            {
                                searchRes.data.teams.length > 0 && (
                                    <div className='w-full'>
                                        <h1 className='p-3 border-b-[1px] border-secondary-600/50 text-sm'>
                                            Teams
                                        </h1>
                                        <div>
                                            {searchRes.data.teams.map((t: any) => {
                                                return (
                                                    <div key={t._id}
                                                        className='flex items-center p-3 cursor-pointer hover:bg-secondary-800'
                                                    >
                                                        <Image src={t.imgPath} alt={t.name} width={64} height={64} className='h-[40px] w-[40px]' />
                                                        <div className='ml-2'>{t.name}</div>
                                                        <div className='flex flex-row-reverse w-full items-center gap-3'>
                                                            <div
                                                                className='p-1 border-[1px] border-secondary-700 text-sm rounded-lg transition hover:bg-secondary-900'
                                                                onClick={() => navigateToTeamPlayers(t.id)}>
                                                                players
                                                            </div>
                                                            <div
                                                                className='p-1 border-[1px] border-secondary-700 text-sm rounded-lg transition hover:bg-secondary-900'
                                                                onClick={() => navigateToTeamStats(t.id)}>
                                                                statistics
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }
                            {
                                searchRes.data.players.length > 0 && (
                                    <div>
                                        <h1 className='p-3 border-b-[1px] border-secondary-600/50 text-sm'>
                                            Players
                                        </h1>
                                        <div>
                                            {searchRes.data.players.map((p: any) => {
                                                return (
                                                    <div key={p._id}
                                                        className='flex items-center p-3 cursor-pointer hover:bg-secondary-800'
                                                        onClick={() => navigateToPlayer(p._id)}
                                                    >
                                                        <Image src={p.imagePath} alt={p.name} width={64} height={64} className='h-[40px] w-[40px] rounded-full bg-white' />
                                                        <div className='flex flex-col ml-2'>
                                                            <p className='text-base'>
                                                                {p.name}
                                                            </p>
                                                            <p className='text-sm text-secondary-400/80'>
                                                                {p.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }
                            {
                                query !== '' &&
                                (searchRes.data.players.length === 0 && searchRes.data.players.length === 0)
                                && searchRes.loading === false && (
                                    <div className='p-6 text-center text-secondary-100 sm:text-xl text-sm font-bold'>
                                        No results found
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {
                    searchRes.loading === true && query != '' && (
                        <div className='p-5 size-20 m-auto'>
                            <LoadingSpinner />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SearchComponent;