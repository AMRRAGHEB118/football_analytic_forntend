"use client";

import { useParams } from "next/navigation";
import DoughnutChartLeague from "../../../../components/DounghuntChartLeague";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingSpinner } from "@/app/components/Spinner";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";


type Stat = {
    topPlayersScored: any[],
    topPlayersAssisted: any[],
    topTeamsPossessed: any[],
    topTeamsScored: any[],
    mostFailedToScore: any[],
}


type Season = {
    _id: string,
    id: number,
    name: string
}

type League = {
    _id: string,
    id: number,
    name: string,
    imagePath: string,
}

type _State<T> = {
    data: T,
    error: string | null,
    loading: boolean
}

const LeagueStat = () => {
    const [leagueStats, setLeagueStats] = useState<_State<Stat>>({
        data: {
            topPlayersScored: [],
            topPlayersAssisted: [],
            topTeamsPossessed: [],
            topTeamsScored: [],
            mostFailedToScore: []
        },
        loading: true,
        error: null
    });
    const [seasons, setSeasons] = useState<_State<Season[]>>({
        data: [],
        loading: true,
        error: null,
    })
    const [league, setLeague] = useState<_State<League>>({
        data: {
            _id: '',
            id: 0,
            name: '',
            imagePath: '',
        },
        error: null,
        loading: true
    });
    const { leagueId } = useParams();

    useEffect(() => {
        if (leagueId) {
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}seasons/league-seasons/${leagueId}`)
                .then(res => {
                    setSeasons({ ...seasons, data: res.data.data, loading: false });
                })
                .catch(_ => {
                    setSeasons({ ...seasons, error: 'Error!', loading: false })
                });

            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}league/${leagueId}`)
                .then(res => {
                    setLeague({ ...league, loading: false, data: res.data.data[0] })
                })
                .catch(_ => {
                    setLeague({ ...league, loading: false, error: 'Unexpected Error!' })
                });
        };

    }, [leagueId]);

    const fetchLeagueStats = async (id: number) => {
        await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}league/statistics/${id}`)
            .then(res => {
                setLeagueStats({ ...leagueStats, data: res.data.data[0], loading: false });
            })
            .catch(_ => {
                setLeagueStats({ ...leagueStats, error: 'Error!', loading: false })
            });
    }

    const topPlayersScoredData = [
        { label: leagueStats.data.topPlayersScored[0]?.player.name, value: leagueStats.data.topPlayersScored[0]?.totalGoals, unit: 'goals', color: '#FF6384' },
        { label: leagueStats.data.topPlayersScored[1]?.player.name, value: leagueStats.data.topPlayersScored[1]?.totalGoals, unit: 'goals', color: '#36A2EB' },
        { label: leagueStats.data.topPlayersScored[2]?.player.name, value: leagueStats.data.topPlayersScored[2]?.totalGoals, unit: 'goals', color: '#FFCE56' },
        { label: leagueStats.data.topPlayersScored[3]?.player.name, value: leagueStats.data.topPlayersScored[3]?.totalGoals, unit: 'goals', color: '#4BC0C0' },
        { label: leagueStats.data.topPlayersScored[4]?.player.name, value: leagueStats.data.topPlayersScored[4]?.totalGoals, unit: 'goals', color: '#9966FF' },
    ];

    const topPlayersAssistedData = [
        { label: leagueStats.data.topPlayersAssisted[0]?.player?.name, value: leagueStats.data.topPlayersAssisted[0]?.assists, unit: 'assists', color: '#FF6384' },
        { label: leagueStats.data.topPlayersAssisted[1]?.player.name, value: leagueStats.data.topPlayersAssisted[1]?.assists, unit: 'assists', color: '#36A2EB' },
        { label: leagueStats.data.topPlayersAssisted[2]?.player.name, value: leagueStats.data.topPlayersAssisted[2]?.assists, unit: 'assists', color: '#FFCE56' },
        { label: leagueStats.data.topPlayersAssisted[3]?.player.name, value: leagueStats.data.topPlayersAssisted[3]?.assists, unit: 'assists', color: '#4BC0C0' },
        { label: leagueStats.data.topPlayersAssisted[4]?.player.name, value: leagueStats.data.topPlayersAssisted[4]?.assists, unit: 'assists', color: '#9966FF' },
    ];

    const topTeamsPossessedData = [
        { label: leagueStats.data.topTeamsPossessed[0]?.team.name, value: leagueStats.data.topTeamsPossessed[0]?.ballPossession, unit: '%', color: '#FF6384' },
        { label: leagueStats.data.topTeamsPossessed[1]?.team.name, value: leagueStats.data.topTeamsPossessed[1]?.ballPossession, unit: '%', color: '#36A2EB' },
        { label: leagueStats.data.topTeamsPossessed[2]?.team.name, value: leagueStats.data.topTeamsPossessed[2]?.ballPossession, unit: '%', color: '#FFCE56' },
        { label: leagueStats.data.topTeamsPossessed[3]?.team.name, value: leagueStats.data.topTeamsPossessed[3]?.ballPossession, unit: '%', color: '#4BC0C0' },
        { label: leagueStats.data.topTeamsPossessed[4]?.team.name, value: leagueStats.data.topTeamsPossessed[4]?.ballPossession, unit: '%', color: '#9966FF' },
    ];

    const topTeamsScoredData = [
        { label: leagueStats.data.topTeamsScored[0]?.team.name, value: leagueStats.data.topTeamsScored[0]?.totalGoalsScored, unit: 'goals', color: '#FF6384' },
        { label: leagueStats.data.topTeamsScored[1]?.team.name, value: leagueStats.data.topTeamsScored[1]?.totalGoalsScored, unit: 'goals', color: '#36A2EB' },
        { label: leagueStats.data.topTeamsScored[2]?.team.name, value: leagueStats.data.topTeamsScored[2]?.totalGoalsScored, unit: 'goals', color: '#FFCE56' },
        { label: leagueStats.data.topTeamsScored[3]?.team.name, value: leagueStats.data.topTeamsScored[3]?.totalGoalsScored, unit: 'goals', color: '#4BC0C0' },
        { label: leagueStats.data.topTeamsScored[4]?.team.name, value: leagueStats.data.topTeamsScored[4]?.totalGoalsScored, unit: 'goals', color: '#9966FF' },
    ];

    const mostFailedToScoreData = [
        { label: leagueStats.data.mostFailedToScore[0]?.team.name, value: leagueStats.data.mostFailedToScore[0]?.failedToScore, unit: 'match', color: '#FF6384' },
        { label: leagueStats.data.mostFailedToScore[1]?.team.name, value: leagueStats.data.mostFailedToScore[1]?.failedToScore, unit: 'match', color: '#36A2EB' },
        { label: leagueStats.data.mostFailedToScore[2]?.team.name, value: leagueStats.data.mostFailedToScore[2]?.failedToScore, unit: 'match', color: '#FFCE56' },
        { label: leagueStats.data.mostFailedToScore[3]?.team.name, value: leagueStats.data.mostFailedToScore[3]?.failedToScore, unit: 'match', color: '#4BC0C0' },
        { label: leagueStats.data.mostFailedToScore[4]?.team.name, value: leagueStats.data.mostFailedToScore[4]?.failedToScore, unit: 'match', color: '#9966FF' },
    ];

    return (
        <div className="flex flex-col bg-neutral-900 sm:p-16 p-8">
            <div className="flex justify-center items-center w-full sm:p-10">
                {
                    seasons.loading && (
                        <div className="w-16 h-16">
                            <LoadingSpinner />
                        </div>
                    )
                }
                {
                    ((!seasons.loading && seasons.error) || (!league.loading && league.error)) && (
                        <div className="text-white">
                            Error happened please refresh the page
                        </div>
                    )
                }
                {
                    (!seasons.loading && !seasons.error && !league.loading && !league.error) && (
                        <div className="flex flex-wrap items-center justify-center w-full gap-10 pb-10 border-b-2 border-secondary-300 md:mt-0 mt-8">
                            <div className="flex items-center h-full gap-8">
                                <Image src={league.data.imagePath} alt={league.data.name} width={128} height={128}
                                    className="md:w-32 md:h-32 h-20 w-20" />
                                <p className="text-2xl md:text-4xl text-secondary-100 font-bold">{league.data.name}</p>
                            </div>
                            <div className="flex flex-col items-center gap-5 md:pl-10 text-secondary-100 md:border-l-2 border-secondary-300">
                                <h1 className="text-base md:text-lg">Select a season to browse its statistics</h1>
                                <Select
                                    className="max-w-xs text-xs"
                                    label="Season"
                                    placeholder="Select a season"
                                    onChange={(e) => fetchLeagueStats(parseInt(e.target.value))}
                                >
                                    {seasons.data.map((s: Season) => {
                                        return (
                                            <SelectItem key={s.id}>
                                                {s.name}
                                            </SelectItem>
                                        )
                                    })}
                                </Select>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                (!leagueStats.loading && !leagueStats.error) && (
                    <div className="grid xl:grid-cols-4 xl:w-[1200px] lg:grid-cols-3 lg:w-[1000px]
                                    md:grid-cols-2 md:w-[700px] w-[300px] gap-4 text-white m-auto mt-[20px]">
                        <DoughnutChartLeague
                            type="topPlayersScored"
                            data={topPlayersScoredData}
                            total={topPlayersScoredData.reduce((sum, player) => sum + player.value, 0)}
                            title="Top Players Scored"
                        />
                        <DoughnutChartLeague
                            type="topPlayersAssisted"
                            data={topPlayersAssistedData}
                            total={topPlayersAssistedData.reduce((sum, player) => sum + player.value, 0)}
                            title="Top Players Assisted"
                        />
                        <DoughnutChartLeague
                            type="topTeamsPossessed"
                            data={topTeamsPossessedData}
                            total={topTeamsPossessedData.reduce((sum, player) => sum + player.value, 0)}
                            title="Top Teams possessed"
                        />
                        <DoughnutChartLeague
                            type="topTeamsScored"
                            data={topTeamsScoredData}
                            total={topTeamsScoredData.reduce((sum, player) => sum + player.value, 0)}
                            title="Top Teams scored"
                        />
                        <DoughnutChartLeague
                            type="mostFailedToScore"
                            data={mostFailedToScoreData}
                            total={mostFailedToScoreData.reduce((sum, player) => sum + player.value, 0)}
                            title="Most Teams failed to score"
                        />
                    </div>
                )

            }
        </div >
    )
}

export default LeagueStat;