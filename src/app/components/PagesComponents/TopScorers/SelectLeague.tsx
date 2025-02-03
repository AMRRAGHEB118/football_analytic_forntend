'use client';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

type League = {
    _id: string,
    id: number,
    name: string,
    imagePath: string,
};

const SelectLeague = () => {
    const [leagues, setLeagues] = useState<League[]>([]);
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchLeagues = async () => {
            const leaguesRes = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}league`);
            setLeagues(leaguesRes.data.data);
        };
        fetchLeagues();
    }, []);

    const updateLeague = (id: number) => {
        if (id) {
            const newSearchParams = new URLSearchParams(searchParams.toString());
            newSearchParams.set('league', id.toString());
            router.push(`${pathName}?${newSearchParams.toString()}`);
        }
    };

    return (
        <div>
            {
                leagues.length > 0 && (
                    <div className="flex flex-col md:text-base text-sm text-secondary-100 gap-2">
                        <p>
                            Select a league
                        </p>
                        < Select
                            className="sm:w-[300px] w-[200px] sm:text-sm text-xs"
                            label="League"
                            placeholder="Select a league"
                            onChange={(e) => updateLeague(parseInt(e.target.value))}
                            
                        >
                            {
                                leagues.map((l: League) => {
                                    return (
                                        <SelectItem key={l.id} textValue={l.name}>
                                            <p>
                                                {l.name}
                                            </p>
                                            <div>
                                                <Image src={l.imagePath} alt={l.name} height={32} width={32} />
                                            </div>
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

export default SelectLeague;