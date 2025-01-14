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
            .catch()
    }, [])

    return (
        <div className="container mx-auto p-6">
            {
                loading ? (
                    <div className='w-16 h-16 m-auto mt-14'>
                        <LoadingSpinner />
                    </div>
                ) : (
                    <LeagueList leagues={leagues} />
                )}
        </div>
    );
};

export default LeaguesPage;
