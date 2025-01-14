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
    <div className="block w-full py-[50px] sm:px-[100px] lg:px-[200px]">
      <div className='flex items-center p-5 lg:mt-0'>
        <Image
          src={league?.imagePath}
          alt='league logo'
          width={128}
          height={128}
          className='w-[92px] sm:w-[128px]'
        />
        <div className="text-secondary-100 font-bold relative left-10 top-3 text-xl sm:text-4xl">{league.name}</div>
      </div>
      <div className='mb-10 w-full h-[1px] border-t-solid border-t-[1px] border-secondary-300 mx-auto'></div>
      <h1 className="text-lg md:text-2xl font-medium mb-6 text-secondary-100 ml-6 md:ml-0">Teams</h1>
      <>{loading ? (
        <div className='w-16 h-16 m-auto mt-14'>
          <LoadingSpinner />
        </div>
      ) : (
        <TeamList teams={teams} />
      )
      }
      </>
    </div>
  );
};

export default TeamsPage;
