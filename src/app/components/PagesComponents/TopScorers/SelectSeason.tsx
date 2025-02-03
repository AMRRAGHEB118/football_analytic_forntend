'use client';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';


type Season = {
    id: number,
    name: string
};

const SelectSeason = () => {
    const [seasons, setSeaons] = useState<Season[]>([]);
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const league = searchParams.get('league');

    useEffect(() => {
        const fetchSeasons = async () => {
            try {
                const seasonsRes = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}seasons/league-seasons/${league}`);
                setSeaons(seasonsRes.data.data);
            } catch { }
        };
        fetchSeasons();
    }, [league]);

    const updateSeason = async (id: number) => {
        if (id) {
            const newSearchParams = new URLSearchParams(searchParams.toString());
            newSearchParams.set('season', id.toString());
            router.push(`${pathName}?${newSearchParams.toString()}`);
        };
    };

    return (
        <div>
            {
                seasons.length > 0 && league && (
                    <div className="flex flex-col md:text-base text-sm text-secondary-100 gap-2">
                        <p>
                            Select a season
                        </p>
                        < Select
                            className="sm:w-[300px] w-[200px] sm:text-sm text-xs"
                            label="Season"
                            placeholder="Select a league"
                            onChange={(e) => updateSeason(parseInt(e.target.value))}
                        >
                            {
                                seasons.map((s: Season) => {
                                    return (
                                        <SelectItem key={s.id}>
                                            {s.name}
                                        </SelectItem>
                                    )
                                })
                            }
                        </ Select>
                    </div>
                )
            }
        </div>
    )
}

export default SelectSeason;