'use client';
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@heroui/table";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "../../Spinner";
import PaginationBtns from "../../common/paginationBtns";

type Player = {
    appearances: number,
    totalGoals: number,
    goals: number,
    penalties: number,
    season: string,
    leagueId: number,
    player: {
        _id: string,
        name: string,
        position: string,
        imagePath: string,
        team: {
            _id: string,
            name: string,
            imgPath: string,
        }
    }
}

type StateType = {
    data: Player[],
    loading: boolean,
    error: boolean,
    count: number
}

const ListScorers = () => {
    const [players, setPlayers] = useState<StateType>({
        data: [],
        loading: true,
        error: false,
        count: 0
    });
    const router = useRouter();
    const searchParams = useSearchParams();
    const season = searchParams.get('season');
    const page: any = searchParams.get('page') || 1;

    useEffect(() => {
        const fetchPlayers = async () => {
            setPlayers(prevState => ({ ...prevState, loading: true, error: false }));

            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}players/statistics/top-score/${season}/${page}`);
                setPlayers(prevState => (
                    { ...prevState, loading: false, data: result.data.data.data, count: result.data.data.count}
                ));
            } catch {
                setPlayers(prevState => ({ ...prevState, loading: false, error: true }));
            }
        };

        if (season) fetchPlayers();
    }, [season, page]);

    const handleClick = (id: string) => {
        router.push(`/leagues/league/teams/team/players/${id}`)
    }

    return (
        <div className="flex flex-col items-center w-full">
            {
                (!players.loading && !players.error && players.data.length > 0) && (
                    <div className="flex flex-col items-center" inert={true}>
                        <Table removeWrapper aria-label="Top scorers rank" className="text-secondary-200 mt-10"
                            style={{ borderSpacing: '0 10px', borderCollapse: 'separate' }}>
                            <TableHeader >
                                <TableColumn style={{ backgroundColor: '#585858', color: '#D9D9D9' }}>
                                    <p className="sm:text-sm text-xs">
                                        Player
                                    </p>
                                </TableColumn>
                                <TableColumn style={{ backgroundColor: '#585858', color: '#D9D9D9' }}
                                    className="sm:table-cell hidden"
                                >
                                    <p className="sm:text-sm text-xs">
                                        Appearances
                                    </p>
                                </TableColumn>
                                <TableColumn style={{ backgroundColor: '#585858', color: '#D9D9D9' }}>
                                    <p className="sm:text-sm text-xs">
                                        Goals
                                    </p>
                                </TableColumn>
                                <TableColumn style={{ backgroundColor: '#585858', color: '#D9D9D9' }}>
                                    <p className="sm:text-sm text-xs">
                                        Penalties
                                    </p>
                                </TableColumn>
                                <TableColumn style={{ backgroundColor: '#585858', color: '#D9D9D9' }}>
                                    <p className="sm:text-sm text-xs">
                                        Position
                                    </p>
                                </TableColumn>
                                <TableColumn style={{ backgroundColor: '#585858', color: '#D9D9D9' }}>
                                    <p className="sm:text-sm text-xs">
                                        Season
                                    </p>
                                </TableColumn>
                            </TableHeader>
                            <TableBody emptyContent={"No Players to display."} className="">
                                {
                                    players.data.map((p: Player, idx: number) => {
                                        return (
                                            <TableRow key={p.player._id}
                                                className="items-center sm:h-[70px] h-[50px] cursor-pointer hover:outline-secondary-300/40 rounded-lg
                                                            duration-150"
                                                onClick={() => handleClick(p.player._id)}>
                                                <TableCell>
                                                    <div className="flex items-center">
                                                        <p className="relative right-2 w-[20px]">{((parseInt(page) - 1) * 20) + (idx + 1)}</p>
                                                        <div className="flex sm:items-end items-center">
                                                            <Image src={p.player.imagePath} alt={p.player.name} width={264} height={264}
                                                                className="h-full sm:w-[50px] w-[30px] bg-white rounded-lg" />
                                                            <div>
                                                                <p className="ml-3 sm:text-sm text-xs line-clamp-2">{p.player.name}</p>
                                                                <p className="ml-3 text-secondary-200/60 sm:text-sm text-xs">{p.player.team.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TableCell >
                                                <TableCell className="sm:inline hidden">
                                                    <p className="sm:text-sm text-xs">{p.appearances}</p>
                                                </TableCell>

                                                <TableCell>
                                                    <p className="sm:text-sm text-xs">{p.totalGoals}</p>
                                                </TableCell>

                                                <TableCell>
                                                    <p className="sm:text-sm text-xs">{p.penalties}</p>
                                                </TableCell>

                                                <TableCell>
                                                    <p className="sm:text-sm text-xs">{p.player.position}</p>
                                                </TableCell>

                                                <TableCell>
                                                    <p className="sm:text-sm text-xs">{p.season}</p>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                        <PaginationBtns total={players.count / 20}/>
                    </div>
                )
            }
            {
                (players.loading && !players.error && season) && (
                    <div className="sm:w-[160px] sm:h-[160px] w-[100px] h-[100px] mt-[60px]">
                        <LoadingSpinner />
                    </div>
                )
            }
            {
                (!players.loading && !players.error && players.data.length <= 0 && season) && (
                    <div className="text-center text-secondary-100 sm:text-lg text-sm w-full mt-[60px]">
                        No players found, Please recheck the season id
                    </div>
                )
            }

        </div>
    )
}

export default ListScorers;