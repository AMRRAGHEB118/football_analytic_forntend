import PlayerCardSmall from "@/app/components/PlayerCardSmall"
import BarChartStatsPlayer from '@/app/components/charts/player/BarChartStatsPlayer';
import DounghuntChartStatsPlayer from "@/app/components/charts/player/DounghuntChartStatsPlayer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from "@/app/types";
import { LoadingSpinner } from "@/app/components/Spinner";
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import ObjectNotFound from "./shared/ObjectNotFound";


type Season = {
    _id: string,
    name: string,
    id: number
}

const PlayerPageComponent = () => {
    const [player, setPlayer] = useState<Player>({
        _id: '',
        position: '',
        detailedPosition: '',
        commonName: '',
        firstName: '',
        lastName: '',
        name: '',
        displayName: '',
        imagePath: '',
        height: 0,
        weight: 0,
        dateOfBirth: '',
        statistics: []
    });
    const [team, setTeam] = useState({
        _id: '',
        name: '',
        imgPath: ''
    });
    const [seasons, setSeasons] = useState<any>([]);
    const [lastFive, setLastFive] = useState<any>([]);
    const [loading, setLoading] = useState({ loading: true, error: false });
    const router = useRouter();
    const params = useParams();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const sParams = new URLSearchParams(searchParams.toString())

    const setSeasonParam = (seasonId: number) => {
        sParams.set('sId', seasonId.toString());
        router.push(pathName + '?' + sParams);
    }

    const id = params.playerId;
    const season: string = searchParams.get('sId') || (seasons[0]?.id)?.toString();
    const seasonName: string = seasons ? (seasons.find((s: Season) => (s.id).toString() === season))?.name : '2023/2024';

    useEffect(() => {

        setLoading({ loading: true, error: false });
        const fetchPlayer = async () => {
            if (season && searchParams) {
                await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}players/${id}/${season}`)
                    .then(res => {
                        setPlayer(res.data.data[0].player);
                        setTeam(res.data.data[0].team);
                        setLastFive(res.data.data[0].lastFiveSeasons);
                        console.log(res.data.data)
                    })
                    .catch(_ => {
                        setLoading(prev => ({ ...prev, error: true }))
                    });
            }
        }

        const fetchSeasons = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}seasons`)
                .then(res => {
                    setSeasons(res.data.data);
                })
                .catch(_ => {
                    setLoading(prev => ({ ...prev, error: true }));
                })
        }

        const fetchAll = async () => {
            await fetchPlayer();
            await fetchSeasons();
            setLoading(prev => ({ ...prev, loading: false }));
        }

        fetchAll();

    }, [searchParams, season]);

    return (
        <div className="flex-col w-full mx-auto sm:p-4">
            {loading.loading &&
                <div className='w-16 h-16 m-auto mt-14'>
                    <LoadingSpinner />
                </div>
            }

            {!loading.loading && player?.statistics[0]?._id ?
                (<div className="">
                    <div className="h-32"></div>
                    <div className="flex justify-center gap-4 lg:flex-nowrap flex-wrap w-full mx-auto p-5">
                        <div className="md:w-[600px] w-[401px]">
                            <PlayerCardSmall player={player} img={team.imgPath} seasons={seasons} />
                        </div>
                        <div className="2xl:w-[870px] w-[400px] flex flex-wrap gap-4 justify-center">
                            <BarChartStatsPlayer
                                title='Total Goals'
                                chartData={
                                    lastFive.map((s: any) => {
                                        const sLabel = (seasons.find((ssn: Season) => (s.seasonId).toString() === (ssn.id).toString()));
                                        return {
                                            label: sLabel.name,
                                            value: s.totalGoals
                                        }
                                    })
                                }
                            />
                            <BarChartStatsPlayer
                                title='Total assists'
                                chartData={
                                    lastFive.map((s: any) => {
                                        const sLabel = (seasons.find((ssn: Season) => (s.seasonId).toString() === (ssn.id).toString()));
                                        return {
                                            label: sLabel.name,
                                            value: s.assists
                                        }
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap relative top-10 m-auto justify-center gap-2 w-full p-0
                    sm:w-full sm:p-0">
                        <DounghuntChartStatsPlayer
                            title='Goals'
                            season={seasonName}
                            total={player?.statistics[0]?.totalGoals || 0}
                            chartData={[
                                { label: 'Goal', value: player.statistics[0]?.totalGoals, unit: 'Goals', color: '#FE7750' },
                                { label: 'Penalty', value: player.statistics[0]?.penalties, unit: 'pen', color: '#51B7FC' },
                            ]}
                            stats={
                                [
                                    { label: 'Goal', value: player.statistics[0]?.totalGoals, unit: 'Goals', color: '#FFFFFF' },
                                    { label: 'Penalty', value: player.statistics[0]?.penalties, unit: 'pen', color: '#FFFFFF' },
                                ]
                            }
                        />
                        <DounghuntChartStatsPlayer
                            title='Assists'
                            season={seasonName}
                            total={player?.statistics[0]?.assists || 0}
                            chartData={[
                                { label: 'Appearance', value: player?.statistics[0]?.appearances, unit: 'App', color: '#FE7750' },
                                { label: 'Assist', value: player?.statistics[0]?.assists, unit: 'assist', color: '#51B7FC' },
                            ]}
                            stats={
                                [
                                    { label: 'App', value: player?.statistics[0]?.appearances, unit: 'App', color: '#FFFFFF' },
                                    { label: 'Assist', value: player?.statistics[0]?.assists, unit: 'assist', color: '#FFFFFF' },
                                ]
                            }
                        />
                        <DounghuntChartStatsPlayer
                            title='Lineup'
                            season={seasonName}
                            total={player?.statistics[0]?.appearances}
                            chartData={[
                                { label: 'Appearance', value: player?.statistics[0]?.appearances, unit: 'App', color: '#FE7750' },
                                { label: 'Lineup', value: player?.statistics[0]?.lineups, unit: 'Lineups', color: '#51B7FC' },
                            ]}
                            stats={
                                [
                                    { label: 'App', value: player?.statistics[0]?.appearances, unit: 'App', color: '#FFFFFF' },
                                    { label: 'Lineups', value: player?.statistics[0]?.lineups, unit: 'L Ups', color: '#FFFFFF' },
                                ]
                            }
                        />
                        <DounghuntChartStatsPlayer
                            title='Yellow Cards'
                            season={seasonName}
                            total={player?.statistics[0]?.yellowCards}
                            chartData={[
                                { label: 'Home', value: player?.statistics[0]?.yellowCardsHome, unit: 'Card', color: '#FE7750' },
                                { label: 'Away', value: player?.statistics[0]?.yellowCardsAway, unit: 'Card', color: '#51B7FC' },
                            ]}
                            stats={
                                [
                                    { label: 'Home', value: player?.statistics[0]?.yellowCardsHome, unit: 'Card', color: '#FFFFFF' },
                                    { label: 'Away', value: player?.statistics[0]?.yellowCardsAway, unit: 'Card', color: '#FFFFFF' },
                                ]
                            }
                        />
                        {(player.position !== 'Goalkeeper' && player.position !== 'Defender') &&
                            <DounghuntChartStatsPlayer
                                title='Contributions'
                                season={seasonName}
                                total={player?.statistics[0]?.totalGoals + player?.statistics[0]?.assists}
                                chartData={[
                                    { label: 'Appearance', value: player?.statistics[0]?.appearances, unit: 'App', color: '#FE7750' },
                                    {
                                        label: 'Contributions',
                                        value: player?.statistics[0]?.totalGoals + player?.statistics[0]?.assists,
                                        unit: 'Contributions', color: '#51B7FC'
                                    },
                                ]}
                                stats={
                                    [
                                        { label: 'App', value: player?.statistics[0]?.appearances, unit: 'App', color: '#FFFFFF' },
                                        {
                                            label: 'Cont.',
                                            value: player?.statistics[0]?.totalGoals + player?.statistics[0]?.assists,
                                            unit: 'Cont.', color: '#FFFFFF'
                                        },
                                    ]
                                }
                            />}
                        {(player.position === 'Defender' || player.position === 'Goalkeeper') && <DounghuntChartStatsPlayer
                            title='Clean Sheet'
                            season={seasonName}
                            total={player?.statistics[0]?.cleanSheets}
                            chartData={[
                                { label: 'Home', value: player?.statistics[0]?.cleanSheetsHome, unit: 'CS', color: 'green' },
                                { label: 'Away', value: player?.statistics[0]?.cleanSheetsAway, unit: 'CS', color: 'yellow' },
                            ]}
                            stats={
                                [
                                    { label: 'Home', value: player?.statistics[0]?.cleanSheetsHome, unit: 'CS', color: '#FFFFFF' },
                                    { label: 'Away', value: player?.statistics[0]?.cleanSheetsAway, unit: 'CS', color: '#FFFFFF' },
                                ]
                            }
                        />}
                    </div>
                </div>
                ) :
                (
                    (!loading.loading && player._id && !player.statistics[0]) && (
                        <div className="mt-10 text-white px-8 text:lg sm:text-4xl mx-auto flex flex-col justify-center items-center">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#EA3323"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" /></svg>
                                NO STATISTICS FOUND FOR SEASON {seasonName}
                                <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#EA3323"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" /></svg>
                            </div>
                            <div className="flex flex-col items-center relative top-14">
                                <span className="text-lg font-medium border-solid border-l-4 border-l-primary-500 text-slate-200 p-2">Select a different season</span>
                                <div className="flex justify-center flex-wrap gap-5 mt-5 max-w-[400px]">
                                    {
                                        seasons.map((s: any) => {
                                            return ((s.id).toString() !== season &&
                                                <div
                                                    key={s.id}
                                                    className="text-sm hover:bg-primary-500 p-2 rounded-md
                                                    hover:cursor-pointer duration-100 transition-all"
                                                    onClick={() => setSeasonParam(s.id)}
                                                >
                                                    {s.name}
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="w-full h-[1px] bg-slate-500"></div>
                                </div>
                                <h1 className="text-2xl mt-8 font-bold">OR</h1>
                                <button
                                    className="bg-primary-500 hover:bg-primary-600 text-lg p-2 rounded-lg mt-5 duration-150 transition-all"
                                    onClick={() => { return router.back() }}
                                >
                                    Go back {'➜'}
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            {loading.error && !loading.loading && !player._id && (
                <ObjectNotFound name="player" />
            )}
        </div>
    )
}

export default PlayerPageComponent;