'use client';

import Image from 'next/image';
import PlayerCard from './components/mainPage/PlayerCard';
import ESlider from './components/sliders/EntitySlider';
import NewsCard from './components/mainPage/NewsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

type News = {
  title: string,
  img: string,
  url: string,
}

type States = {
  error: any,
  data: any[],
  loading: boolean
}


const Home = () => {
  const [news, setNews] = useState<States>({ error: null, data: [], loading: true });
  const [sigPlayers, setSigPlayers] = useState<States>({ error: null, data: [], loading: true });
  const [scottishTeams, setScottishTeams] = useState<States>({ error: null, data: [], loading: true });


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}news/get-news`);
        setNews({ ...news, data: fetchedNews.data.data, loading: false });
      } catch (error: any) {
        setNews({ ...news, error, loading: false })
      }
    }

    const fetchSigPlayers = async () => {
      try {
        const players = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}players/statistics/most-signficant/${process.env.NEXT_PUBLIC_CURRENT_SEASON}`);
        setSigPlayers({ ...sigPlayers, data: players.data.data, loading: false });
      } catch (error: any) {
        setSigPlayers({ ...sigPlayers, error, loading: false })
      }
    }

    const fetchScottishTeams = async () => {
      try {
        const teams = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}team/all`);
        setScottishTeams({ ...scottishTeams, data: teams.data.data, loading: false });
      } catch (error) {
        setScottishTeams({ ...scottishTeams, error, loading: false })
      }
    }

    fetchSigPlayers()
    fetchNews();
    fetchScottishTeams();
  }, []);


  return (
    <main className="flex flex-col items-center justify-between">
      <div className='flex flex-col w-full'>
        <Image src={'https://s3-alpha-sig.figma.com/img/3438/b486/83854d9e92236a27a0f7bca17bde8265?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plct6DiUUU-ET6~FTh-YWk04GCzA7yw557WJnwmPO71Lgo7slYa4YREaguW1h2InhVbD1a3tBkp8pg94ZqTUmo-Fn-W62JDGVddGDyDn3jbHSXu6lbqFz9Co92zoSlyXg7lvPqHbKETDL7LdvBbo6-vjI~DmVbdmMBNdpCRXxKiAOs2AoqWB8VAEyyQhhW3dpr4QeoTpBr53koYLGWYBU6Nyn8zuptd8TZ~jrxdhkT~uChIP6Nq0t7He6r4A13H1TbsZmma9m12IMDJUO4EVm5isOBVcrcVr~X5sidTUkUhGMdLI4nhi3hIU9hV7pN2HHiPZ-F1DxPK-2FY9B~U~4Q__'}
          alt='Main page photo'
          height={1080} width={1920}
          objectFit='cover'
          className='w-full' />
        <div className='flex justify-center items-center w-full h-[50px] bg-primary-500 text-white text-lg'>
          Last your results
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-[90px] mt-20'>
        <PlayerCard title={'Player'} />
        <PlayerCard title={'Team'} />
        <PlayerCard title={'League'} />
      </div>
      <div className='flex flex-col items-center justify-center w-full mt-[150px]'>
        {!sigPlayers.loading && !sigPlayers.error &&
          <div className='flex flex-col items-center'>
            <p className='font-thin text-2xl text-white mb-7'>Top contributers</p>
            <ESlider data={sigPlayers.data} type={'player'} />
          </div>
        }
        <div className='flex flex-col items-center mt-[100px]'>
          <p className='font-thin text-2xl text-white mb-7'>Scottish Premiership</p>
          <ESlider data={scottishTeams.data} type={'team'} />
        </div>
        <div className='flex mt-[150px] justify-center items-center w-full h-[50px] bg-primary-500 text-white text-xl tracking-wider'>
          News
        </div>
        {
          !news.error && !news.loading ?
            <div className='mt-14 grid grid-cols-1 lg:grid-cols-3 sm:gap-[40px] gap-[100px]'>
              {news.data.map((n: News, idx: number) => {
                return (
                  <NewsCard key={idx} title={n.title} img={n.img} url={n.url} />
                )
              })}
            </div>
            : !news.loading && <p className='text-center text-4xl text-secondary-100 font-bold mt-16'>Error while loading news, try refreshing the page.</p>
        }
      </div>
    </main>
  );
}


export default Home;