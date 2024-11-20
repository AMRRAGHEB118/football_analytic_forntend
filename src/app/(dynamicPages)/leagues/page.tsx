'use client';

import { useEffect, useState } from 'react';
import LeagueList from '../../components/LeagueList';
import axios from 'axios';
import { LoadingSpinner } from '@/app/components/Spinner';


const LeaguesPage = () => {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}league`)
            .then(res => {
                setLeagues(res.data.data);
                setLoading(false);
            })
            .catch()                            // To be handled later
    }, [])

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Leagues</h1>
            {
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <LeagueList leagues={leagues} />
                )}
        </div>
    );
};

export default LeaguesPage;
