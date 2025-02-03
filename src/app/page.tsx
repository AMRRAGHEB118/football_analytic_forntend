'use client';

import Image from 'next/image';
import PlayerCard from './components/mainPage/PlayerCard';
import ESlider from './components/sliders/EntitySlider';
import NewsCard from './components/mainPage/NewsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TeamCard from './components/mainPage/TeamCard';
import LeagueCard from './components/mainPage/LeagueCard';
import { useRouter } from 'next/navigation';


type News = {
  title: string,
  img: string,
  url: string,
  date: string,
  time: string
}

type States = {
  error: any,
  data: any[],
  loading: boolean
}

type BestPlayer = {
  id: string,
  first_name: string,
  last_name: string,
  image: string,
  cont: number,
}

type MostWin = {
  id: string,
  short_code: string,
  name: string,
  image: string,
  wins: number,
}

type TopLeague = {
  _id: string,
  id: number,
  name: string,
  image: string,
  short_code: string,
}

type CardsProps<T> = {
  data: T,
  loading: boolean
}

const Home = () => {
  const [news, setNews] = useState<States>({ error: null, data: [], loading: true });
  const [sigPlayers, setSigPlayers] = useState<States>({ error: null, data: [], loading: true });
  const [scottishTeams, setScottishTeams] = useState<States>({ error: null, data: [], loading: true });
  const [bestPlayer, setBestPlayer] = useState<CardsProps<BestPlayer>>({
    data: {
      id: '',
      first_name: '',
      last_name: '',
      image: '',
      cont: 0
    }, loading: true
  });
  const [mostWin, setMostWin] = useState<CardsProps<MostWin>>({
    data: {
      id: '',
      short_code: '',
      name: '',
      image: '',
      wins: 0
    }, loading: true
  });
  const [TopLeague, setTopLeague] = useState<CardsProps<TopLeague>>({
    data: {
      _id: '',
      id: 0,
      name: '',
      image: '',
      short_code: '',
    }, loading: true
  });

  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}news/latest`);
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

    const fetchBestPlayer = async () => {
      try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}players/best-player`);
        setBestPlayer({ data: result.data.data[0], loading: false });
      } catch (_) { }
    }

    const fetchMostWonTeam = async () => {
      try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}team/statistics/most-won`);
        setMostWin({ data: result.data.data[0], loading: false });
      } catch (_) { }
    }

    const fetchTopLeague = async () => {
      try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}league/top-league`);
        setTopLeague({ data: result.data.data[0], loading: false });
      } catch (_) { }
    }

    fetchTopLeague();
    fetchMostWonTeam();
    fetchBestPlayer();
    fetchSigPlayers();
    fetchNews();
    fetchScottishTeams();
  }, []);


  return (
    <main className="flex flex-col items-center justify-between">
      <div className='relative flex flex-col w-full border-primary-400'>
        <Image src={'https://s3-alpha-sig.figma.com/img/5621/3ec4/b9e5d024a89db75b157af08cdcba4b01?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGovwYw4VmSjtpnz~5Qn36b9ya-eWzjKM9xZI0EoHweZDS3866Fjv-uYRgvY5suTRfcPs26E9ZGW3mH1Tkrse6B5q~65OJR21wOBfnwSJVfgn4mJACKAaHs-g5zO1xjtKWBKikGlmdlYA3iJEa0s4T4lvmqcOFFfhb35dgVVNr45GFuTFCQ7pr~HP7IoZQd5crNQrMNunlxXJML0TbZFY54gzu373IJnV3YQDgTIhpiDTb55jFytbwWo0ERdyEvOQD0HxofSEBNl9JrNd7PYt4qGc9MHQbwzadsJW-K8jTvzpoy-Y06q8Y7t0SLW2Gvg3FkWF152qYqiKQDpjw~GtA__'}
          alt='Main page photo'
          height={1080} width={1920}
          objectFit='fit'
          className='w-full object-cover' />
        <div className='flex justify-center items-center w-full sm:p-4 p-2 absolute bottom-0 bg-primary-800/60 text-white sm:text-lg text-sm'>
          Last your results
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[90px] sm:mt-[150px] mt-16'>
        {!bestPlayer.loading && <PlayerCard id={bestPlayer.data?.id} first_name={bestPlayer.data?.first_name}
          last_name={bestPlayer.data?.last_name} image={bestPlayer.data?.image}
          cont={bestPlayer.data?.cont}
        />}
        {!mostWin.loading && <TeamCard id={mostWin.data?.id} name={mostWin.data?.name}
          wins={mostWin.data?.wins} image={mostWin.data?.image}
          short_code={mostWin.data?.short_code}
        />}
        {!TopLeague.loading &&
          <LeagueCard id={TopLeague.data?.id} name={TopLeague.data?.name} image={TopLeague.data?.image} short_code={TopLeague.data?.short_code} />
        }
      </div>
      <div className='flex flex-col items-center justify-center w-full mt-[150px]'>
        {!sigPlayers.loading && !sigPlayers.error &&
          <div className='hidden xl:flex flex-col items-center'>
            <p className='font-bold text-2xl text-white mb-7'>Top contributers</p>
            <ESlider data={sigPlayers.data} type={'player'} />
          </div>
        }
        {!scottishTeams.loading && !sigPlayers.error && (
          <div className='hidden xl:flex flex-col items-center mt-[100px]'>
            <p className='font-bold text-2xl text-white mb-7'>Scottish Premiership</p>
            <ESlider data={scottishTeams.data} type={'team'} />
          </div>
        )
        }
        <div className='flex xl:mt-[150px] justify-center items-center w-full sm:h-[50px] h-[40px]
                        bg-primary-800/90 text-white sm:text-xl text-base tracking-wider'>
          News
        </div>
        {
          !news.error && !news.loading ?
            <div className='flex flex-col items center'>
              <div className='mt-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:gap-[40px] gap-[20px]'>
                {news.data.map((n: News, idx: number) => {
                  return (
                    <div key={idx} className='sm:w-[350px] w-[300px]'>
                      <NewsCard title={n.title} img={n.img} url={n.url} date={n.date} time={n.time} />
                    </div>
                  )
                })}
              </div>
              <div className='flex justify-center m-auto p-16'>
                <button className='text-secondary-100 text-base font-medium rounded-full border-2 border-primary-800 p-3
                                  duration-200 hover:bg-primary-800'
                  onClick={() => { router.push('/news') }}>
                  Browse more feeds</button>
              </div>
            </div>
            : !news.loading && <p className='text-center text-4xl text-secondary-100 font-bold mt-16'>Error while loading news, try refreshing the page.</p>
        }
      </div>
    </main>
  );
}


export default Home;