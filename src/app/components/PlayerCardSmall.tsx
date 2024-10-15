import Image from 'next/image'

const PlayerCardSmall = () => {
  return (
    <div className="relative flex sm:w-full w-[425px] sm:h-[280px] h-[400px] bg-primary-950 items-center rounded-md">
      <Image
        src="https://s3-alpha-sig.figma.com/img/d01f/216a/0a38b0172fc9629274423c2bc6e2c30d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-GGtyYri3~Ls-uO2p-mQCgqR1vSBy2hcw0bnneruQj84AC7eTdf~bbr62C827r3cLUei7GbPfzKIIhlobTVHneV9E3UAU6XLSPS8cTDi9cju9tjmbpA-r1iRRLyTs73YhFCdT2vD~EXdA-SpUaJ642y9A6u2d0CI46A8u1dbdT-Yy68lUfDkAlTPDg47QqPwAVfLS5p~UsJIpDKydcLh4P8RYbTkh27PqvyJY9Z33vZOAYifZB6FNalbp17wzCHwQ9J2KoPHG2z6XNK2-bGxpNGT8rW4oeyQmy5Kyrzq4fbDR-75EvW5BQ0LCvWeDh1pVCZqVz0Ty5Kyu~m4j1s8Q__"
        alt="Stadium background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full opacity-10 z-0"
        quality={100}
      />
      <div className='flex items-center justify-center flex-wrap sm:flex-nowrap'>
        <Image
          src="https://cdn.sportmonks.com/images/soccer/players/21/21.png"
          alt="Player picture"
          height={140}
          width={140}
          className="w-32 relative m-14 ml-8 top-0 scale-x-[-1] rounded-full ring-4 ring-orange-600"
          quality={100}
        />
        <div className='flex-col z-10'>
          <div className='flex items-center'>
            <Image
              src="https://s3-alpha-sig.figma.com/img/5b84/c530/511a63eaec9fb27581e0c1d8cb213adf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEf5lk57FxRISIYnRHHdYnGSoMpm5-dDzs9CbPpT0VtmXNL0E0cOAmBHNH7r2rSziQO4Kf34UvNjkpMYrFK9cnRyjllSECdxD4xJVZDOUp~EpKS1iZbR352UI-HVqcFyoazTciROOdM79jaB~Pmb2VPW0fQcSvxel0IRlucK47rywcmokuGV1dK0dC1n8jBzDS~0P6d3mrT9qxBO15WzmW5sxLQWQ8S3cdlPJ392Va-DguaWxf0ERphPxtoe10qAuCfg3i2PLRbY-bBCMtudN-tuux5eH6InDKUue5DO2bLZ1x-utCYkzwARpElm7zIJVF~81KHMk1ITjJ~kXhGg2Q__"
              alt='madrid logo'
              className='flex'
              width={70.5}
              height={53.5}
            />
            <div className='relative flex-col font-light text-white left-3'>
              <p className='text-2xl'>
                JUDE
              </p>
              <p className='font-bold text-2xl'>
                BELLINGHAM
              </p>
            </div>
          </div>
          <div className='flex text-white space-between text-xl font-light'>
            <div className='ml-4 flex'><p className='font-medium mr-1'>1.8</p>M</div>
            <div className='ml-4 flex'><p className='font-medium mr-1'>25</p>Years</div>
            <div className='ml-4 flex'>Attacker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardSmall;
