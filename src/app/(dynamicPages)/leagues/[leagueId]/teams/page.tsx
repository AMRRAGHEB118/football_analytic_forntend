'use client';

import { useEffect, useState } from 'react';
import TeamList from '../../../../components/TeamList';
import axios from 'axios';
import { LoadingSpinner } from '@/app/components/Spinner';
import { useParams } from 'next/navigation';
import Image from 'next/image';


type league = {
  _id: string,
  id: number,
  name: string,
  imagePath: string,
}

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [league, setLeague] = useState<league>(
    {
      _id: '',
      id: 0,
      name: '',
      imagePath: '',
    }
  );
  const [loading, setLoading] = useState<boolean>(true);
  const { leagueId } = useParams();


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}team/league-list/${leagueId}`)
      .then(res => {
        setTeams(res.data.data);
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}league/${leagueId}`)
          .then(res => setLeague(res.data.data[0]))
          .catch();                    // To be handled later
        setLoading(false);
      })
      .catch()
  }, [leagueId]);


  return (
    <div className="container mx-auto p-6 px-8 sm:px-16 mt-10">
      <div className='flex items-center p-5 mt-5 lg:mt-0'>
        <Image
          src={league?.imagePath}
          alt='league logo'
          width={128}
          height={128}
          className='w-[92px] sm:w-[128px]'
        />
        <div className="text-white relative left-10 top-3 font-black text-xl sm:text-4xl">{league.name}</div>
      </div>
      <div className='mb-10 w-full h-[1px] border-t-solid border-t-[1px] border-secondary-300 mx-auto'></div>
      <h1 className="text-lg md:text-2xl font-medium mb-6 text-secondary-200 ml-6 md:ml-0">Teams</h1>
      <>{loading ? (
        <LoadingSpinner />
      ) : (
        <TeamList teams={teams} />
      )
      }
      </>
    </div>
  );
};

export default TeamsPage;
