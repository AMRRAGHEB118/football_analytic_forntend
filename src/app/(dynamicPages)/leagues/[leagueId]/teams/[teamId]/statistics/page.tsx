"use client";
import Image from 'next/image';
import DoughnutChartStats from '../../../../../../components/charts/DounghuntChartStats';
import BarChartStats from '../../../../../../components/charts/BarChartStats';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { Select, SelectItem } from "@nextui-org/react";


type Team = {
    _id: string,
    id: number,
    name: string,
    shortCode: string,
    imgPath: string,
    leagueId: number,
    statistics: Array<any>
};

type Season = {
    _id: string,
    id: number,
    name: string
}

type State<T> = {
    data: T,
    error: string | null,
    loading: boolean
};


const TeamCard = () => {
    const [team, setTeam] = useState<State<Team>>({
        data: {
            _id: '',
            id: 0,
            name: '',
            shortCode: '',
            imgPath: '',
            leagueId: 0,
            statistics: []
        },
        error: null,
        loading: true,
    });
    const [seasons, setSeasons] = useState<State<Season[]>>({
        data: [],
        error: null,
        loading: true,
    });
    const [selectedSeason, setSelectedSeason] = useState<any>(null);
    const [statIdx, setStatIdx] = useState<number | null>(null)


    const goals_scored_interval = {
        title: 'Goals Scored by Time Interval',
        chartData: [
            { label: '0-15', value: team.data.statistics[statIdx || 0]?.scoringTiming['0-15']?.count },
            { label: '15-30', value: team.data.statistics[statIdx || 0]?.scoringTiming['15-30']?.count },
            { label: '30-45', value: team.data.statistics[statIdx || 0]?.scoringTiming['30-45']?.count },
            { label: '45-60', value: team.data.statistics[statIdx || 0]?.scoringTiming['45-60']?.count },
            { label: '60-75', value: team.data.statistics[statIdx || 0]?.scoringTiming['60-75']?.count },
            { label: '75-90', value: team.data.statistics[statIdx || 0]?.scoringTiming['75-90']?.count }
        ]
    };

    const goals_conceded_interval = {
        title: 'Goals Conceded by Time Interval',
        chartData: [
            { label: '0-15', value: team.data.statistics[statIdx || 0]?.goalsConcededTiming['0-15']?.count },
            { label: '15-30', value: team.data.statistics[statIdx || 0]?.goalsConcededTiming['15-30']?.count },
            { label: '30-45', value: team.data.statistics[statIdx || 0]?.goalsConcededTiming['30-45']?.count },
            { label: '45-60', value: team.data.statistics[statIdx || 0]?.goalsConcededTiming['45-60']?.count },
            { label: '60-75', value: team.data.statistics[statIdx || 0]?.goalsConcededTiming['60-75']?.count },
            { label: '75-90', value: team.data.statistics[statIdx || 0]?.goalsConcededTiming['75-90']?.count }
        ]
    };

    const goals_scored = {
        title: 'Goals Scored',
        total: team.data.statistics[statIdx || 0]?.totalGoalsScored,
        chartData: [
            {
                label: 'Goals Scored Home', value: team.data.statistics[statIdx || 0]?.goalsScoredHome, unit: 'Goals', color:
                    '#FE7750'
            },
            {
                label: 'Goals Scored Away', value: team.data.statistics[statIdx || 0]?.goalsScoredAway, unit: 'Goals', color:
                    '#50a5f1'
            }
        ],
        stats: [
            { label: 'Home', value: team.data.statistics[statIdx || 0]?.goalsScoredHome, unit: 'Goals', color: '#FE7750' },
            { label: 'Away', value: team.data.statistics[statIdx || 0]?.goalsScoredAway, unit: 'Goals', color: '#50a5f1' }
        ]
    };

    const goals_conceded = {
        title: 'Goals Conceded',
        total: team.data.statistics[statIdx || 0]?.totalGoalsConceded,
        chartData: [
            {
                label: 'Goals Conceded Home', value: team.data.statistics[statIdx || 0]?.goalsConcededHome, unit: 'Goals', color:
                    '#FE7750'
            },
            {
                label: 'Goals Conceded Away', value: team.data.statistics[statIdx || 0]?.goalsConcededAway, unit: 'Goals', color:
                    '#50a5f1'
            }
        ],
        stats: [
            { label: 'Home', value: team.data.statistics[statIdx || 0]?.goalsConcededHome, unit: 'Goals', color: '#FE7750' },
            { label: 'Away', value: team.data.statistics[statIdx || 0]?.goalsConcededAway, unit: 'Goals', color: '#50a5f1' }
        ]
    };

    const cards_taked = {
        title: 'Cards Taked',
        total: team.data.statistics[statIdx || 0]?.yellowCards + team.data.statistics[statIdx || 0]?.redCards,
        chartData: [
            {
                label: 'Yellow Cards', value: team.data.statistics[statIdx || 0]?.yellowCards, unit: 'Cards', color:
                    'yellow'
            },
            {
                label: 'Red Cards', value: team.data.statistics[statIdx || 0]?.redCards, unit: 'Cards', color:
                    'red'
            }
        ],
        stats: [
            { label: 'Home', value: team.data.statistics[statIdx || 0]?.yellowCards, unit: 'Cards', color: '#FE7750' },
            { label: 'Away', value: team.data.statistics[statIdx || 0]?.redCards, unit: 'Cards', color: '#50a5f1' }
        ]
    };

    const matches_wons = {
        title: 'Matches Won',
        total: team.data.statistics[statIdx || 0]?.winHome + team.data.statistics[statIdx || 0]?.winAway,
        chartData: [
            {
                label: 'Matches won Home', value: team.data.statistics[statIdx || 0]?.winHome, unit: 'Matches', color:
                    '#FE7750'
            },
            {
                label: 'Matches won Away', value: team.data.statistics[statIdx || 0]?.winAway, unit: 'Matches', color:
                    '#50a5f1'
            }
        ],
        stats: [
            { label: 'Home', value: team.data.statistics[statIdx || 0]?.winHome, unit: 'Matches', color: '#FE7750' },
            { label: 'Away', value: team.data.statistics[statIdx || 0]?.winAway, unit: 'Matches', color: '#50a5f1' }
        ]
    };

    const matches_lost = {
        title: 'Matches Lost',
        total: team.data.statistics[statIdx || 0]?.lostHome + team.data.statistics[statIdx || 0]?.lostAway,
        chartData: [
            {
                label: 'Matches drawn home', value: team.data.statistics[statIdx || 0]?.lostHome, unit: 'Matches', color:
                    '#FE7750'
            },
            {
                label: 'Matches drawn away', value: team.data.statistics[statIdx || 0]?.lostAway, unit: 'Matches', color:
                    '#50a5f1'
            }
        ],
        stats: [
            { label: 'Home', value: team.data.statistics[statIdx || 0]?.lostHome, unit: 'Matches', color: '#FE7750' },
            { label: 'Away', value: team.data.statistics[statIdx || 0]?.lostAway, unit: 'Matches', color: '#50a5f1' }
        ]
    };

    const matches_drawn = {
        title: 'Matches Drawn',
        total: team.data.statistics[statIdx || 0]?.drawHome + team.data.statistics[statIdx || 0]?.drawAway,
        chartData: [
            {
                label: 'Matches drawn home', value: team.data.statistics[statIdx || 0]?.drawHome, unit: 'Matches', color:
                    '#FE7750'
            },
            {
                label: 'Matches drawn away', value: team.data.statistics[statIdx || 0]?.drawAway, unit: 'Matches', color:
                    '#50a5f1'
            }
        ],
        stats: [
            { label: 'Home', value: team.data.statistics[statIdx || 0]?.drawHome, unit: 'Matches', color: '#FE7750' },
            { label: 'Away', value: team.data.statistics[statIdx || 0]?.drawAway, unit: 'Matches', color: '#50a5f1' }
        ]
    };




    const { teamId } = useParams();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}team/${teamId}`)
            .then(res => {
                setTeam({ ...team, loading: false, data: res.data.data[0] });
                axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}seasons/league-seasons/${res.data.data[0].leagueId}`)
                    .then(resp => {
                        setSeasons({ ...seasons, loading: false, data: resp.data.data })
                    })
                    .catch(_ => {
                        setSeasons({ ...seasons, loading: false, error: 'Error loading seasons' })
                    })
            })
            .catch(_ => {
                setTeam({ ...team, loading: false, error: 'Error loading team!' })
            })

    }, []);


    const handleSeasonChange = (id: number) => {
        const index = team.data.statistics.map((s: any, idx: number) => {
            if (Number(s.seasonId) === Number(id)) return idx
        }).filter(e => typeof (e) === 'number')[0];
        setStatIdx(index);
    }

    const statRectStyle = `bg-primary-500 items-center justify-center sm:text-sm text-xs rounded-md
                            ml-2 text-lg font-bold h-full sm:w-[60px] w-[50px] flex flex-col`;

    return (
        <div className='m-auto lg:w-[1000px] sm:w-[425px] w-[315px] grid grid-cols-1 lg:p-16'>
            <div className="relative bg-primary-700/20 text-white rounded-lg overflow-hidden shadow-lg lg:mt-0 mt-20">
                {/* Background image */}
                <div className="absolute inset-0 opacity-5 w-full">
                    <Image
                        src="https://s3-alpha-sig.figma.com/img/9195/5a76/539acb8772d4d0d3392178cc6c7c19cf?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wp1LnPH2Qa90T-V6iB3ECaSxZTHlifZ3yQtT0ScY7x6RnmTYynhnzMdT-2aQcH~unOpcbszBtbLAWR5BYw3AJJ3SMyAAaP3jRiNB4gbb5J3ih39TcIyy-syN7cDVBIMX1mdWZIlwFB4ARuMz4jl74fFFm2NsTGF7H-IvMH7vCyYVtAOn2PgAKpneAC9GXx5cAFlN1VbY9OYDpeXTVp3dt16hxR2BFpgdKXpVxXW3AxGNwx5hCkhzYbDjFp0gBA09yjSYVbh6ojR3mngUJTU6Jle9Of4k-txOZWOhrviWREQVGYr3JlBnaE9YtAbxxUqOm4fJJsbXHWaSpX2NAdNH7g__"
                        alt="Stadium background"
                        layout="fill"
                        objectFit="cover"
                        className="object-cover w-full h-full"
                        quality={50}
                    />
                </div>
                {/* Team logo and info */}
                {
                    (!team.loading && !team.error) && (
                        <div className="relative z-10 flex flex-col p-8">
                            <div className="flex items-center lg:flex-nowrap flex-wrap">

                                <Image
                                    src={team.data.imgPath}
                                    alt="Celtic logo"
                                    className="w-24 h-24 rounded-full object-cover border-2 border-white"
                                    width={96}
                                    height={96}
                                />

                                <div className='flex flex-col ml-4'>
                                    <h1 className="text-4xl font-bold">{team.data.name}</h1>
                                    <p className="text-lg">{team.data.shortCode}</p>
                                </div>

                                <div className="flex flex-col space-y-2 lg:ml-32 sm:ml-4 ml-0 lg:mt-0 sm:mt-5 mt-9 sm:text-base text-xs">
                                    <h1>Select a season to view its stats</h1>
                                    <Select
                                        aria-label="Select a season"
                                        value={(selectedSeason)?.toString()}
                                        onChange={(e) => handleSeasonChange(Number(e.target.value))}
                                        placeholder='Select a season'
                                        color="secondary"
                                        className="w-[300px] border-none outline-none pr-8 text-secondary-800 cursor-pointer"
                                    >
                                        {seasons.data.map((season) => (
                                            <SelectItem key={season.id} value={season.id}
                                                className='bg-secondary-800 text-primary-700'>
                                                {season.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex justify-between items-center mt-6 space-x-2">
                                {/* Players Info (adjust flex basis for responsiveness) */}
                                <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="mb-2 flex items-center w-full h-[50px] rounded-lg">
                                        <div className="flex items-center pl-2 bg-secondary-950 text-white sm:h-[50px] h-[40px] rounded-lg">
                                            <span className='text-left sm:w-[100px] sm:text-sm text-xs'>Matches played</span>
                                            <div className={statRectStyle}>
                                                <span className="">{team.data.statistics[statIdx || 0]?.winHome +
                                                    team.data.statistics[statIdx || 0]?.winAway +
                                                    team.data.statistics[statIdx || 0]?.lostHome +
                                                    team.data.statistics[statIdx || 0]?.lostAway +
                                                    team.data.statistics[statIdx || 0]?.drawHome +
                                                    team.data.statistics[statIdx || 0]?.drawAway
                                                }

                                                </span>
                                                <span className="">Matches</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2 flex items-center justify-between w-full h-[50px] rounded-lg">
                                        <div className="flex items-center pl-2 bg-secondary-950 text-white sm:h-[50px] h-[40px] w-full rounded-lg">
                                            <span className='text-left sm:w-[100px] sm:text-sm text-xs'>Failed to score</span>
                                            <div className={statRectStyle}>
                                                <span className="">{team.data.statistics[statIdx || 0]?.failedToScore}</span>
                                                <span className="">Matches</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2 flex items-center justify-between w-ful h-[50px] rounded-lg">
                                        <div className="flex items-center pl-2 bg-secondary-950 text-white sm:h-[50px] h-[40px] w-full rounded-lg">
                                            <span className='text-left sm:w-[100px] sm:text-sm text-xs'>Clean sheets</span>
                                            <div className={statRectStyle}>
                                                <span className="">{team.data.statistics[statIdx || 0]?.cleanSheets}</span>
                                                <span className="">Matches</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2 flex items-center justify-between w-ful h-[50px] rounded-lg">
                                        <div className="flex items-center justify-between pl-2 bg-secondary-950 text-white sm:h-[50px] h-[40px] w-full rounded-lg">
                                            <span className='text-left sm:w-[100px] sm:text-sm text-xs'>AVG possession</span>
                                            <div className={statRectStyle}>
                                                <span className="">{team.data.statistics[statIdx || 0]?.ballPossession}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {/** End */}
            </div>
            <div>
                {
                    (!team.loading && statIdx) && (
                        <div className='justify-between grid pt-3 grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-6'>
                            <div>
                                <BarChartStats
                                    title={goals_scored_interval.title}
                                    chartData={goals_scored_interval.chartData}
                                />
                            </div>
                            <div >
                                <BarChartStats
                                    title={goals_conceded_interval.title}
                                    chartData={goals_conceded_interval.chartData}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
            {/** begin */}
            {statIdx &&
                (
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-3 lg:gap-y-2 gap-x-6'>
                        <div className='p-1 text-2xl'>
                            <DoughnutChartStats
                                title={goals_scored.title}
                                total={goals_scored.total}
                                chartData={goals_scored.chartData}
                                stats={goals_scored.stats}
                            />
                        </div>
                        <div className='p-1 text-2xl'>
                            <DoughnutChartStats
                                title={goals_conceded.title}
                                total={goals_conceded.total}
                                chartData={goals_conceded.chartData}
                                stats={goals_conceded.stats}
                            />
                        </div>
                        <div className='p-1 text-2xl'>
                            <DoughnutChartStats
                                title={matches_wons.title}
                                total={matches_wons.total}
                                chartData={matches_wons.chartData}
                                stats={matches_wons.stats}
                            />
                        </div>
                        <div className='p-1 text-2xl'>
                            <DoughnutChartStats
                                title={matches_lost.title}
                                total={matches_lost.total}
                                chartData={matches_lost.chartData}
                                stats={matches_lost.stats}
                            />
                        </div>
                        <div className='p-1 text-2xl'>
                            <DoughnutChartStats
                                title={matches_drawn.title}
                                total={matches_drawn.total}
                                chartData={matches_drawn.chartData}
                                stats={matches_drawn.stats}
                            />
                        </div>
                        <div className='p-1 text-2xl'>
                            <DoughnutChartStats
                                title={cards_taked.title}
                                total={cards_taked.total}
                                chartData={cards_taked.chartData}
                                stats={cards_taked.stats}
                            />
                        </div>
                    </div>
                )}
            {/** end */}
        </div>
    );
};
export default TeamCard