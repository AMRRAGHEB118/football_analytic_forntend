import Image from 'next/image'
import { Player } from '../types';


interface PlayerCardSmallProps {
  player: Player;
  img: string
}

const PlayerCardSmall = ({ player, img }: PlayerCardSmallProps) => {
  return (
    <div className="pCardBackground relative justify-center flex w-full md:h-[280px] h-[400px] items-center rounded-md">
      <Image
        src="https://s3-alpha-sig.figma.com/img/d01f/216a/0a38b0172fc9629274423c2bc6e2c30d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-GGtyYri3~Ls-uO2p-mQCgqR1vSBy2hcw0bnneruQj84AC7eTdf~bbr62C827r3cLUei7GbPfzKIIhlobTVHneV9E3UAU6XLSPS8cTDi9cju9tjmbpA-r1iRRLyTs73YhFCdT2vD~EXdA-SpUaJ642y9A6u2d0CI46A8u1dbdT-Yy68lUfDkAlTPDg47QqPwAVfLS5p~UsJIpDKydcLh4P8RYbTkh27PqvyJY9Z33vZOAYifZB6FNalbp17wzCHwQ9J2KoPHG2z6XNK2-bGxpNGT8rW4oeyQmy5Kyrzq4fbDR-75EvW5BQ0LCvWeDh1pVCZqVz0Ty5Kyu~m4j1s8Q__"
        alt="Stadium background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full opacity-15 z-0"
        quality={50}
      />
      <div className='flex items-center rounded-full justify-center flex-wrap md:flex-row flex-col md:flex-nowrap'>
        <Image
          src={player?.imagePath}
          alt="Player picture"
          height={140}
          width={140}
          className="w-32 relative md:m-14 md:ml-8 bg-white scale-x-[-1] rounded-full ring-4 ring-orange-600"
          quality={100}
        />
        <div className='flex-col z-10 items-center'>
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
