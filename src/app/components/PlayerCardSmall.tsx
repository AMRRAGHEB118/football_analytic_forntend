import Image from 'next/image'
import { Player } from '../types';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


interface PlayerCardSmallProps {
  player: Player;
  img: string,
  seasons: any
}

const PlayerCardSmall = ({ player, img, seasons }: PlayerCardSmallProps) => {
  const [toggleSeasons, setToggleSeasons] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams.toString())

  const setSeasonParam = (seasonId: number) => {
    params.set('sId', seasonId.toString());
    router.push(pathName + '?' + params);
  }

  return (
    <div className="pCardBackground relative justify-center flex w-[400px] md:w-full md:h-[280px] h-[400px] items-center rounded-md">
      <Image
        src="https://s3-alpha-sig.figma.com/img/d01f/216a/0a38b0172fc9629274423c2bc6e2c30d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-GGtyYri3~Ls-uO2p-mQCgqR1vSBy2hcw0bnneruQj84AC7eTdf~bbr62C827r3cLUei7GbPfzKIIhlobTVHneV9E3UAU6XLSPS8cTDi9cju9tjmbpA-r1iRRLyTs73YhFCdT2vD~EXdA-SpUaJ642y9A6u2d0CI46A8u1dbdT-Yy68lUfDkAlTPDg47QqPwAVfLS5p~UsJIpDKydcLh4P8RYbTkh27PqvyJY9Z33vZOAYifZB6FNalbp17wzCHwQ9J2KoPHG2z6XNK2-bGxpNGT8rW4oeyQmy5Kyrzq4fbDR-75EvW5BQ0LCvWeDh1pVCZqVz0Ty5Kyu~m4j1s8Q__"
        alt="Stadium background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full opacity-15 z-0"
        quality={50}
      />
      <span
        className="absolute flex items-center hover:cursor-pointer top-7 right-7 text-slate-200 text-[11px] select-none z-40"
        onClick={() => setToggleSeasons(prevToggle => !prevToggle)}
      >
        {(seasons.find((s: any) => (s.id).toString() === (params.get('sId'))))?.name || seasons[0].name}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC">
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </span>
      <div className={`${toggleSeasons ? 'absolute' : 'hidden'} flex flex-col top-14 right-12 text-slate-200 text-[11px] z-40`}>
        {
          seasons && seasons.length != 0 && seasons.map((season: any) => {
            return (
              <div
                className='p-1 md:hover:bg-primary-500 hover:bg-primary-700 hover:cursor-pointer rounded-sm'
                onClick={() => setSeasonParam(season.id)}
              >
                {season.name}
              </div>
            )
          })
        }
      </div>
      <div className='flex items-center rounded-full justify-center flex-wrap md:flex-row flex-col md:flex-nowrap'>
        <div className='
        w-full h-[200px] top-0 absolute flex justify-center items-center bg-[#FE7750] z-10 rounded-t-md
        md:m-14 md:ml-0 md:top-auto md:rounded-l-md md:rounded-r-none md:h-full md:left-0 md:w-[220px]'>
          <Image
            src={player?.imagePath}
            alt="Player picture"
            height={150}
            width={150}
            className="scale-x-[-1] rounded-full ring-4 ring-orange-900 bg-white"
            quality={100}
          />
        </div>
        <div className='md:top-auto top-14 flex-col relative z-10 items-center md:left-20'>
          <div className='flex items-center justify-center relative top-5
            md:justify-start md:top-0'>
            <Image
              src={img}
              alt='Team logo'
              className='flex'
              width={70.5}
              height={53.5}
            />
            <div className='relative flex-col font-light text-white left-3'>
              <p className='text-2xl'>
                {player?.firstName}
              </p>
              <p className='font-bold text-2xl'>
                {player?.lastName}
              </p>
            </div>
          </div>
          <div className='flex text-white space-between text-xl font-light relative top-10'>
            <div className='ml-4 flex'><p className='font-medium mr-1'>{player?.height / 100}</p>M</div>
            <div className='ml-4 flex'><p className='font-medium mr-1'>
              {new Date().getFullYear() - new Date(player.dateOfBirth).getFullYear()}
            </p>years</div>
            <div className='ml-4 flex'>{player?.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardSmall;
